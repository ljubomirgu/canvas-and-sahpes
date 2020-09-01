import { Rectangle } from './rectangle';
import { Circle } from './circle';
import { Shape } from './shape';

export const SHAPES: Shape[] = [
  new Rectangle ('1','first rec', '#00ffcc', 0, 0, 150, 100),
  new Rectangle ('2','second rec','#3333cc', 150, 200, 100, 100),
  new Rectangle ('3','third rec','#ccff33',  0, 300, 150, 50),
  new Rectangle ('4','fourth rec', '#cc0066', 150, 150, 100, 100),

  new Circle ('5', 'first arc', '#fcba03', '#1c4ab8', 100, 100,  50,  0,  2*Math.PI ),
  new Circle ('6', 'second arc', '#ffffff', '#000000', 200, 150,  100,  0,  2*Math.PI ),
  new Circle ('7', 'third arc', '#7f8787', '#fff56e', 100, 200,  50,  0,  2*Math.PI ),
  new Circle ('8', 'fourth arc', '#e38ff7', '#14e609', 300, 300, 70,  0,  2*Math.PI )




  // { id: 1,
  //   color: '#00ffcc',
  //   text: 'first rectangle',
  //   type: {
  //     position: { xBegin: 0, yBegin: 0, rectWidth: 150, rectHeight: 100 },
  // } as Rectangle},
  // {
  //   id: 2,
  //   color: '#3333cc',
  //   text: 'second rectangle',
  //   type: {
  //     position: { xBegin: 150, yBegin: 200, rectWidth: 100, rectHeight: 100 },
  // } as Rectangle},
  // {
  //   id: 3,
  //   color: '#ccff33',
  //   text: 'third rectangle',
  //   type: {
  //     position: { xBegin: 0, yBegin: 300, rectWidth: 150, rectHeight: 50 },
  // }as Rectangle},
  // {
  //   id: 4,
  //   color: '#cc0066',
  //   text: 'fourth rectangle',
  //   position: { xBegin: 150, yBegin: 150, rectWidth: 100, rectHeight: 100 },
  // }as Rectangle,
  // {
  //   id: 5,
  //   color: '#fcba03',
  //   text: 'first circle',
  //   borderColor: '#1c4ab8',
  //   position: {xBegin: 100, yBegin: 100, radius: 50, startAngle: 0, endAngle: 2*Math.PI}
  // }as Circle,
  // {
  //   id: 6,
  //   color: '#ffffff',
  //   text: 'second circle',
  //   type:{
  //     borderColor: '#000000',
  //     position: {xBegin: 200, yBegin: 150, radius: 50, startAngle: 0, endAngle: 2*Math.PI}
  // }as Circle },
  // {
  //   id: 7,
  //   color: '#7f8787',
  //   text: 'third circle',
  //   type:{
  //     borderColor: '#fff56e',
  //     position: {xBegin: 200, yBegin: 150, radius: 50, startAngle: 0, endAngle: 2*Math.PI}
  // }as Circle },
  // {
  //   id: 8,
  //   color: '#e38ff7',
  //   text: 'fourth circle',
  //   type:{
  //     borderColor: '#14e609',
  //     position: {xBegin: 200, yBegin: 150, radius: 50, startAngle: 0, endAngle: 2*Math.PI}
  // }as Circle }
  // {
  //     id: 4,
  //     color: '#cc0066',
  //     text: 'fourth rectangle',
  //     position: { xBegin: 150, yBegin: 150, rectWidth: 100, rectHeight: 100 },
  //   }as Rectangle,
  //   {
  //     id: 5,
  //     color: '#fcba03',
  //     text: 'first circle',
  //     borderColor: '#1c4ab8',
  //     position: {xBegin: 100, yBegin: 100, radius: 50, startAngle: 0, endAngle: 2*Math.PI}
  //   }as Circle


]
