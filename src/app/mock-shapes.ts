import { Rectangle } from './rectangle';
import { Circle } from './circle';
import { Shape } from './shape';

export const SHAPES: Shape[] = [
  new Rectangle ('1','first rec', '#00ffcc', 0, 0, 150, 100),
  new Rectangle ('2','second rec','#3333cc', 150, 200, 100, 100),
  new Rectangle ('3','third rec','#ccff33',  0, 300, 150, 50),
  new Rectangle ('4','fourth rec', '#cc0066', 150, 150, 100, 100),

  new Circle ('5', 'first arc', '#fcba03', '#1c4ab8', 100, 100,  50),
  new Circle ('6', 'second arc', '#ffffff', '#000000', 200, 150,  100),
  new Circle ('7', 'third arc', '#7f8787', '#fff56e', 100, 200,  50),
  new Circle ('8', 'fourth arc', '#e38ff7', '#14e609', 300, 300, 70)

]
