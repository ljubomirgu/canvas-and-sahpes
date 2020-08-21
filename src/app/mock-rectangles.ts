import { Rectangle } from './rectangle';

export const RECTANGLES: Rectangle[] = [
  { id: 1,
    color: '#00ffcc',
    text: 'first',
    position: { xBegin: 0, yBegin: 0, rectWidth: 50, rectHeight: 30 },
  },
  {
    id: 2,
    color: '#3333cc',
    text: 'second',
    position: { xBegin: 150, yBegin: 200, rectWidth: 50, rectHeight: 20 },
  },
  {
    id: 3,
    color: '#ccff33',
    text: 'third',
    position: { xBegin: 0, yBegin: 300, rectWidth: 50, rectHeight: 20 },
  },
  {
    id: 4,
    color: '#cc0066',
    text: 'fourth',
    position: { xBegin: 150, yBegin: 150, rectWidth: 30, rectHeight: 30 },
  },
];


// selected: Rectangle;
// rectangles: Rectangle[] ;

// ngOnInit(){
//   this.rectangles = RECTANGLES
// }

// onSelect(id: number){
//   this.selected = this.rectangles.map(({ id }) => id);//id atribut a ne index niza
//  // Map, FILTER
//  return this.rectangles[id];
// }
