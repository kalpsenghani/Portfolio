import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  const inputFile = join(__dirname, '../public/favicon.ico');
  const outputDir = join(__dirname, '../public');

  try {
    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(join(outputDir, filename));
      console.log(`Generated ${filename}`);
    }
    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 