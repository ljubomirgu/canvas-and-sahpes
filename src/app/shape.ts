export abstract class Shape{
  _id: string;
  text: string;
  color: string;

  constructor(id: string, text: string, color: string){
    this._id = id;
    this.text = text;
    this.color = color;
  }

 public abstract draw(ctx: CanvasRenderingContext2D): void;
}
