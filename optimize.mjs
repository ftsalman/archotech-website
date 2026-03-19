import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'c:/Shuhaib-Website/homart-website/public/projects';
const files = fs.readdirSync(dir);

const processFiles = async () => {
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const inputPath = path.join(dir, file);
      
      // Clean up the filename
      let filenameNoExt = path.basename(file, path.extname(file));
      if (filenameNoExt.endsWith('.jpg')) {
        filenameNoExt = filenameNoExt.slice(0, -4);
      }
      
      const outputPath = path.join(dir, `${filenameNoExt}.webp`);
      
      console.log(`Optimizing ${file}...`);
      try {
        await sharp(inputPath)
          .resize({ width: 1400, withoutEnlargement: true }) // Resize to max 1400px width
          .webp({ quality: 80 }) // Compress to WebP
          .toFile(outputPath);
        console.log(`✅ Converted and optimized -> ${filenameNoExt}.webp`);
      } catch (err) {
        console.error(`❌ Failed to process ${file}:`, err);
      }
    }
  }
  console.log('🎉 All images optimized successfully!');
};

processFiles();
