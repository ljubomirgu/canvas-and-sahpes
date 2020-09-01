import { Rectangle } from './rectangle';
import { Circle } from './circle';

// export interface Shape{
//   id: number;
//   text: string;
//   color: string;
//   type: Rectangle | Circle;
// }

export class Shape{
  _id: string;
  text: string;
  color: string;
  // type: Rectangle | Circle;

  constructor(id: string, text: string, color: string){
    this._id = id;
    this.text = text;
    this.color = color;
}
}
