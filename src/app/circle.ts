import { Shape } from './shape';

export class Circle extends Shape {
  borderColor: string;
  position: {xBegin:number, yBegin: number, radius: number};

  constructor(id: string, text: string, color: string, borderColor: string, xBegin:number, yBegin: number,
    radius: number){
      super(id, text, color);
      this.borderColor = borderColor;
      this.position = {xBegin, yBegin,radius}
    }

  public draw(ctx: CanvasRenderingContext2D): void{
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.xBegin, this.position.yBegin, this.position.radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "20px sans-serif";
    ctx.textAlign = 'center';
    ctx.textBaseline = "middle";
    ctx.fillText(this.text,
      this.position.xBegin,
      this.position.yBegin,
      this.position.radius*2
    )
  }
}
