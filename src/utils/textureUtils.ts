import * as THREE from 'three';

export function createTileTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Base color
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Create circular tile pattern
  const tileSize = 256; // Size of each tile
  const radius = tileSize / 2;
  
  for (let y = 0; y < canvas.height; y += tileSize) {
    for (let x = 0; x < canvas.width; x += tileSize) {
      drawCircularTile(ctx, x + radius, y + radius, radius);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);
  
  return texture;
}

function drawCircularTile(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  // Draw main circle
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.98, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  
  // Add subtle border
  ctx.strokeStyle = 'rgba(180, 180, 180, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Add marble effect
  ctx.save();
  ctx.clip(); // Clip to circle

  // Create marble veining
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    const startX = x - radius + Math.random() * radius * 2;
    const startY = y - radius + Math.random() * radius * 2;
    ctx.moveTo(startX, startY);
    
    // Create curved veins
    const cp1x = x - radius + Math.random() * radius * 2;
    const cp1y = y - radius + Math.random() * radius * 2;
    const cp2x = x - radius + Math.random() * radius * 2;
    const cp2y = y - radius + Math.random() * radius * 2;
    const endX = x - radius + Math.random() * radius * 2;
    const endY = y - radius + Math.random() * radius * 2;
    
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.restore();
}