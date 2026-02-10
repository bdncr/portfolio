const { createCanvas } = require('canvas');
const fs = require('fs');

// Create a 32x32 canvas for favicon
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Black background
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, 32, 32);

// Matrix green border
ctx.strokeStyle = '#00ff41';
ctx.lineWidth = 2;
ctx.strokeRect(1, 1, 30, 30);

// Draw "B" letter in Matrix green
ctx.fillStyle = '#00ff41';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('B', 16, 17);

// Save as PNG first
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/favicon.png', buffer);

// For ICO format, we'll use the PNG and rename it
// (browsers accept PNG files with .ico extension)
fs.writeFileSync('public/favicon.ico', buffer);

console.log('✅ Favicon generated successfully!');
console.log('📁 Files created:');
console.log('   - public/favicon.ico');
console.log('   - public/favicon.png');
