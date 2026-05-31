import sharp from 'sharp';
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname } from 'path';

const src = 'C:/Users/rinali/Documents/1. Keperluan Dokumen/PortofolioURL/IMG_1441.JPG';
const destDir = 'C:/Users/rinali/Documents/1. Keperluan Dokumen/PortofolioURL/portfolio/public/images';
const dest = destDir + '/daffa.webp';

if (!existsSync(src)) { console.error('Source not found:', src); process.exit(1); }
mkdirSync(destDir, { recursive: true });

// Generate blur placeholder (10px wide, blurred)
const blurBuffer = await sharp(src)
  .resize(10, null, { fit: 'inside' })
  .blur(2)
  .toFormat('webp', { quality: 20 })
  .toBuffer();
const blurBase64 = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

// Resize to max 700px width, aspect 3:4
await sharp(src)
  .resize(700, null, { fit: 'cover', position: 'top' })
  .toFormat('webp', { quality: 88 })
  .toFile(dest);

// Write blur data to a JS module
const blurDir = destDir + '/blur';
mkdirSync(blurDir, { recursive: true });
writeFileSync(blurDir + '/daffa-blur.mjs', `export const blurDataURL = ${JSON.stringify(blurBase64)};\n`);

console.log('Done! WebP:', dest);
