const fs = require('fs');
const sharp = require('sharp');

async function processLogo() {
  try {
    const inputPath = 'public/logo.png';
    const outputPathPng = 'public/favicon.png';
    const outputPathIco = 'public/favicon.ico';
    const appIconPath = 'app/favicon.ico';

    if (!fs.existsSync(inputPath)) {
      console.error(`Error: input file ${inputPath} not found`);
      return;
    }

    const image = sharp(inputPath);
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const width = info.width;
    const height = info.height;
    
    let minY = height, maxY = 0;
    const colSums = new Float64Array(width);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const alpha = data[(y * width + x) * info.channels + 3];
            if (alpha > 5) {
                colSums[x] += alpha;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    
    let startX = -1, endX = -1, inChar = false;
    for (let x = 0; x < width; x++) {
        if (colSums[x] > 0) {
            if (!inChar) { inChar = true; if (startX === -1) startX = x; }
        } else if (inChar) {
            if (x - startX > Math.max(width * 0.02, 5)) { endX = x; break; }
            else { inChar = false; startX = -1; }
        }
    }
    if (endX === -1) endX = startX + Math.min(width * 0.25, 100);
    
    const padding = 5;
    const finalStartX = Math.max(0, startX - padding);
    const finalEndX = Math.min(width, endX + padding);
    const finalMinY = Math.max(0, minY - padding);
    const finalMaxY = Math.min(height, maxY + padding);
    
    const cw = finalEndX - finalStartX;
    const ch = finalMaxY - finalMinY;
    const boxSize = Math.max(cw, ch);
    
    console.log(`Cropping logo to extract P: x=${finalStartX}, y=${finalMinY}, w=${cw}, h=${ch}`);

    const finalBuffer = await sharp(inputPath)
      .extract({ left: finalStartX, top: finalMinY, width: cw, height: ch })
      .resize({
          width: 64, // Scale up to standard favicon max size
          height: 64,
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    fs.writeFileSync(outputPathPng, finalBuffer);
    fs.writeFileSync(outputPathIco, finalBuffer);
    if(fs.existsSync('app')) {
        fs.writeFileSync(appIconPath, finalBuffer);
    }
    console.log(`Saved output files successfully!`);
    
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}
processLogo();
