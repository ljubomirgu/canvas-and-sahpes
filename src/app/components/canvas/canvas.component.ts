import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';
import { Circle } from 'src/app/circle';
import { Shape } from 'src/app/shape';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ShapeService]
})
export class CanvasComponent implements OnInit {

  @Input() selectedRectangle: Rectangle;
  @Input() selectedCircle: Circle;

  @ViewChild('canvasRectangle', { static: false }) canvasRectangle: ElementRef;

  public get canvas() : HTMLCanvasElement | null{
    return this.canvasRectangle != null ? this.canvasRectangle.nativeElement : null;
  }
  public get ctx() : CanvasRenderingContext2D {
    return this.canvas != null ? this.canvas.getContext('2d') : null;
  }

  constructor(private shapeService: ShapeService) { }

  ngOnInit(): void {
  }


  @Input() drawRectangle(selectedShape: Rectangle){

    this.selectedRectangle = selectedShape;//a ako dobija Shape parametar treba <Rectangle>selectedShape
    let xBegin = this.selectedRectangle.position.xBegin;
    let yBegin  =  this.selectedRectangle.position.yBegin;
    let rectWidth = this.selectedRectangle.position.rectWidth;
    let rectHeight = this.selectedRectangle.position.rectHeight;

    if(this.ctx != null){ // if(this.ctx)
     // console.log("ctx: ", this.ctx)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.selectedRectangle.color;
    //  console.log("style: ",this.selectedShape.color )
    //  console.log("Dimension: ",this.selectedShape.position.xBegin, this.selectedShape.position.yBegin,
    //  this.selectedShape.position.rectWidth, this.selectedShape.position.rectHeight)

      this.ctx.fillRect(xBegin, yBegin, rectWidth, rectHeight);
      this.ctx.fillStyle = "black";
      this.ctx.font = "20px sans-serif";
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(this.selectedRectangle.text, xBegin + rectWidth/2 , yBegin + (rectHeight)/2, rectWidth); // umesto ovog ide donji red sa service:

     // this.ctx.fillText(this.shapeService.updatedShapeText, xBegin + rectWidth/2 , yBegin + (rectHeight)/2, rectWidth);
      // this.ctx.fillText(this.selectedShape.text, xBegin + rectWidth/2 , yBegin + (rectHeight + 20)/2, rectWidth);
     // console.log("fillRct: ", this.ctx);
    }
  }

  @Input() drawCircle(selectedShape: Circle){
    this.selectedCircle = selectedShape //<Circle>selectedShape;
    if(this.ctx != null){
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.fillStyle = this.selectedCircle.color;
       this.ctx.beginPath();
       this.ctx.arc(
          this.selectedCircle.position.xBegin,
          this.selectedCircle.position.yBegin ,
          this.selectedCircle.position.radius,
          //this.selectedCircle.position.startAngle,
          0,
          //this. selectedCircle.position.endAngle
          2*Math.PI);
       this.ctx.fill();
       this.ctx.strokeStyle = this.selectedCircle.borderColor;
       this.ctx.lineWidth = 3;
       this.ctx.stroke();

       this.ctx.fillStyle = "black";
       this.ctx.font = "20px sans-serif";
       this.ctx.textAlign = 'center';
       this.ctx.textBaseline = "middle";
       this.ctx.fillText(this.selectedCircle.text,
          this.selectedCircle.position.xBegin,
          this.selectedCircle.position.yBegin,
          this.selectedCircle.position.radius*2)
  }}

}
