import { Shape } from './shape';

export class Circle extends Shape {
  // id: number;
  // text: string;
  // color: string;
  borderColor: string;
  position: {xBegin:number, yBegin: number, radius: number};

  constructor(id: string, text: string, color: string, borderColor: string, xBegin:number, yBegin: number,
    radius: number){
      super(id, text, color);
      this.borderColor = borderColor;
      this.position = {xBegin, yBegin,radius}
    }
}
