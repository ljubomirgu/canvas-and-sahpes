import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';
import { Circle } from 'src/app/circle';
import { Shape } from 'src/app/shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ShapeService]
})
export class CanvasComponent implements OnInit, OnChanges {

  private _selectedShape: Shape;

  @Input() set selectedShape(selectedShape: Shape){
    this._selectedShape = selectedShape;
    if(this._selectedShape != null && this.ctx != null){
     this.drawShape();
   }
  }

  @ViewChild('canvasRectangle', { static: false }) canvasRectangle: ElementRef;

  public get canvas() : HTMLCanvasElement | null{
    return this.canvasRectangle != null ? this.canvasRectangle.nativeElement : null;
  }

  public get ctx() : CanvasRenderingContext2D {
    return this.canvas != null ? this.canvas.getContext('2d') : null;
  }

  constructor(private shapeService: ShapeService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    // const selectedValue = changes['selected'];//0509
    // if(selectedValue.previousValue != null){//0509
    //   this.selected = selectedValue.currentValue;//0509
    //   if(this.selected != null && this.ctx != null){//0509
    //     this.drawShape();//0509
    //   }//0509
    // }//0509
 }

  drawShape(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this._selectedShape.draw(this.ctx);
  }
}
