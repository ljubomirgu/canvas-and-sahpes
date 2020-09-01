import { Shape } from './shape';

export class Rectangle extends Shape {
  // id: number;
  // color: string;
  // text: string;
  position: {xBegin:number, yBegin: number, rectWidth: number, rectHeight: number};

  constructor(id: string, text: string, color: string, xBegin:number, yBegin: number, rectWidth: number, rectHeight: number ){
    super(id, text, color);
    this.position = {xBegin, yBegin, rectWidth, rectHeight}
    };

}
