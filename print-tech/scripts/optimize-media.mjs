// Usage : npm run optimize:media [-- --keep-audio] [-- --force]
// Lit public/media/raw (récursif) -> écrit dans public/media/optimized/{images,videos} + manifest.json
import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const RAW = "public/media/raw", OUT_I = "public/media/optimized/images", OUT_V = "public/media/optimized/videos";
const KEEP_AUDIO = process.argv.includes("--keep-audio"), FORCE = process.argv.includes("--force");
const IMG = new Set([".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp"]);
const VID = new Set([".mov", ".mp4", ".m4v"]);
const slug = (f) => path.parse(f).name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

async function walk(d) {
  let out = [];
  for (const e of await fs.readdir(d, { withFileTypes: true }).catch(() => [])) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) out = out.concat(await walk(f)); else out.push(f);
  }
  return out;
}
const exists = (f) => fs.access(f).then(() => true, () => false);
const run = (args) => new Promise((res, rej) => {
  const c = spawn(ffmpegPath, ["-y", "-loglevel", "error", ...args], { stdio: "inherit" });
  c.on("exit", (code) => (code === 0 ? res() : rej(new Error("ffmpeg code " + code))));
});

async function image(file, name) {
  const out = path.join(OUT_I, name + ".webp");
  if (!FORCE && (await exists(out))) return out;
  let input = file;
  if ([".heic", ".heif"].includes(path.extname(file).toLowerCase())) {
    const { default: convert } = await import("heic-convert");
    input = Buffer.from(await convert({ buffer: await fs.readFile(file), format: "JPEG", quality: 0.95 }));
  }
  await sharp(input).rotate().resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  return out;
}
async function video(file, name) {
  const out = path.join(OUT_V, name + ".mp4"), poster = path.join(OUT_V, name + ".jpg");
  if (FORCE || !(await exists(out))) {
    await run(["-i", file, "-vf", "scale='min(1280,iw)':-2", "-c:v", "libx264", "-crf", "24", "-preset", "medium", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
      ...(KEEP_AUDIO ? ["-c:a", "aac", "-b:a", "96k"] : ["-an"]), out]);
  }
  if (FORCE || !(await exists(poster))) await run(["-ss", "0.5", "-i", out, "-frames:v", "1", "-q:v", "3", poster]);
  return { src: out, poster };
}

const files = await walk(RAW);
const manifest = { images: [], videos: [] };
const used = new Set();
for (const f of files) {
  const ext = path.extname(f).toLowerCase();
  if (!IMG.has(ext) && !VID.has(ext)) continue;
  let name = slug(f) || "media", n = 1;
  while (used.has(name)) name = `${slug(f)}-${++n}`;
  used.add(name);
  try {
    if (IMG.has(ext)) { const o = await image(f, name); manifest.images.push("/" + path.relative("public", o)); console.log("image", o); }
    else { const v = await video(f, name); manifest.videos.push({ src: "/" + path.relative("public", v.src), poster: "/" + path.relative("public", v.poster) }); console.log("video", v.src); }
  } catch (e) { console.warn("ECHEC", f, e.message); }
}
await fs.writeFile("public/media/optimized/manifest.json", JSON.stringify(manifest, null, 2));
await fs.writeFile("public/media/manifest.json", JSON.stringify(manifest, null, 2));
console.log(`Terminé : ${manifest.images.length} image(s), ${manifest.videos.length} vidéo(s). Voir public/media/optimized/manifest.json et public/media/manifest.json`);
