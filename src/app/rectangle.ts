import { Shape } from './shape';

export class Rectangle extends Shape {

  position: {xBegin:number, yBegin: number, rectWidth: number, rectHeight: number};

  constructor(id: string, text: string, color: string, xBegin:number, yBegin: number, rectWidth: number, rectHeight: number ){
    super(id, text, color);
    this.position = {xBegin, yBegin, rectWidth, rectHeight}
    };

    public draw (ctx: CanvasRenderingContext2D): void{
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.xBegin, this.position.yBegin, this.position.rectWidth, this.position.rectHeight);
      ctx.fillStyle = "black";
      ctx.font = "20px sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = "middle";
      ctx.fillText(
        this.text,
        this.position.xBegin + this.position.rectWidth/2,
        this.position.yBegin + (this.position.rectHeight)/2,
        this.position.rectWidth
      );
    }
}
