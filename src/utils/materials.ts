import * as THREE from 'three';

export function createKiswahTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 4096;
  canvas.height = 4096;
  const ctx = canvas.getContext('2d')!;

  // Fill background with pure black
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set gold color for calligraphy and patterns
  const goldColor = '#C5A572';

  // Configure text settings
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 120px Amiri';
  ctx.fillStyle = goldColor;
  ctx.lineWidth = 1;

  // Draw the main Shahada text
  ctx.save();
  ctx.translate(canvas.width / 2, 800);
  ctx.fillText('لا إله إلا الله محمد رسول الله', 0, 0);
  ctx.restore();

  // Draw shorter horizontal lines
  const drawHorizontalLine = (y: number) => {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.4, y);
    ctx.lineTo(canvas.width * 0.6, y);
    ctx.strokeStyle = goldColor;
    ctx.stroke();
  };

  // Draw shorter vertical lines
  const drawVerticalLine = (x: number) => {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height * 0.4);
    ctx.lineTo(x, canvas.height * 0.6);
    ctx.strokeStyle = goldColor;
    ctx.stroke();
  };

  // Draw crisp lines with smaller spacing
  for (let i = 0; i < 6; i++) {
    drawHorizontalLine(1000 + i * 150);
    drawVerticalLine(1638 + i * 150);
  }

  // Draw geometric patterns
  const drawGeometricPattern = (x: number, y: number, size: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = goldColor;
    ctx.lineWidth = 1;
    
    // Eight-pointed star
    const points = 8;
    const innerRadius = size * 0.4;
    const outerRadius = size;
    
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / points;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.stroke();
    
    ctx.restore();
  };

  // Draw patterns at specific positions with smaller size
  const patternPositions = [
    [1024, 1200],
    [3072, 1200],
    [2048, 1400],
  ];

  patternPositions.forEach(([x, y]) => {
    drawGeometricPattern(x, y, 80);
  });

  // Create and configure texture
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  texture.anisotropy = 16;
  
  return texture;
}