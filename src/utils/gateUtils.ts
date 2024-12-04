import * as THREE from 'three';

export function createGateTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Base color
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw geometric patterns
  ctx.strokeStyle = '#C5A572';
  ctx.lineWidth = 2;

  // Create Islamic geometric patterns
  const patternSize = 64;
  for (let y = 0; y < canvas.height; y += patternSize) {
    for (let x = 0; x < canvas.width; x += patternSize) {
      drawGeometricPattern(ctx, x, y, patternSize);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2);
  
  return texture;
}

function drawGeometricPattern(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number
) {
  // Eight-pointed star pattern
  ctx.save();
  ctx.translate(x + size / 2, y + size / 2);
  
  const points = 8;
  const outerRadius = size / 2;
  const innerRadius = outerRadius * 0.4;

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
}