import { copyFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const files = [
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png'
];

async function copyFavicons() {
  const sourceFile = join(__dirname, '../public/favicon.ico');
  const outputDir = join(__dirname, '../public');

  try {
    for (const filename of files) {
      await copyFile(sourceFile, join(outputDir, filename));
      console.log(`Copied to ${filename}`);
    }
    console.log('All favicon files copied successfully!');
  } catch (error) {
    console.error('Error copying favicons:', error);
  }
}

copyFavicons(); 