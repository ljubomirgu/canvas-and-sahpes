import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';
import { Circle } from 'src/app/circle';

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

  constructor(private shapeService: ShapeService) {
  }

  ngOnInit(): void {
  }

  @Input() drawRectangle(selectedShape: Rectangle){

    this.selectedRectangle = selectedShape;//a ako dobija Shape parametar treba <Rectangle>selectedShape
    let xBegin = this.selectedRectangle.position.xBegin;
    let yBegin  =  this.selectedRectangle.position.yBegin;
    let rectWidth = this.selectedRectangle.position.rectWidth;
    let rectHeight = this.selectedRectangle.position.rectHeight;

    if(this.ctx != null){
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.selectedRectangle.color;
      this.ctx.fillRect(xBegin, yBegin, rectWidth, rectHeight);
      this.ctx.fillStyle = "black";
      this.ctx.font = "20px sans-serif";
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(this.selectedRectangle.text, xBegin + rectWidth/2 , yBegin + (rectHeight)/2, rectWidth);
    }
  }

  @Input() drawCircle(selectedShape: Circle){
    this.selectedCircle = selectedShape
    if(this.ctx != null){
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.fillStyle = this.selectedCircle.color;
       this.ctx.beginPath();
       this.ctx.arc(this.selectedCircle.position.xBegin, this.selectedCircle.position.yBegin,
        this.selectedCircle.position.radius, 0, 2*Math.PI);
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
