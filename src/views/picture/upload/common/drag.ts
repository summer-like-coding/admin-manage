export interface Mouse {
  x: number;
  y: number;
}

export class DragGraph {
  x: number;

  y: number;

  w: number;

  h: number;

  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  watermark: HTMLImageElement;

  // eslint-disable-next-line max-params
  constructor(x: number, y: number, w: number, h: number, canvas: HTMLCanvasElement, watermark: HTMLImageElement) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.watermark = watermark;
  }

  paint() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
    this.ctx.drawImage(this.watermark, this.x, this.y, this.w, this.h);
  }

  is_mouse_in_graph(mouse: Mouse) {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.w, this.h);
    return this.ctx.isPointInPath(mouse.x, mouse.y);
  }

  erase() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  selected() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
    this.ctx.rect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}
