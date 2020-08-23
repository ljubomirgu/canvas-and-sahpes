import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input() selectedShape: Rectangle;
  @ViewChild('canvasRectangle', { static: false }) canvasRectangle: ElementRef;

  public get canvas() : HTMLCanvasElement | null{
    return this.canvasRectangle != null ? this.canvasRectangle.nativeElement : null;
  }
  public get ctx() : CanvasRenderingContext2D {
    return this.canvas != null ? this.canvas.getContext('2d') : null;
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Input() drawRectangle(selectedShape: Rectangle){
    this.selectedShape = selectedShape;
    let xBegin = this.selectedShape.position.xBegin;
    let yBegin  =  this.selectedShape.position.yBegin;
    let rectWidth = this.selectedShape.position.rectWidth;
    let rectHeight = this.selectedShape.position.rectHeight;

    if(this.ctx != null){ // if(this.ctx)
     // console.log("ctx: ", this.ctx)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.selectedShape.color;
    //  console.log("style: ",this.selectedShape.color )

    //  console.log("Dimension: ",this.selectedShape.position.xBegin, this.selectedShape.position.yBegin,
    //  this.selectedShape.position.rectWidth, this.selectedShape.position.rectHeight)

      this.ctx.fillRect(xBegin, yBegin, rectWidth, rectHeight);
      this.ctx.fillStyle = "black";
      this.ctx.font = "20px sans-serif";
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(this.selectedShape.text, xBegin + rectWidth/2 , yBegin + (rectHeight)/2, rectWidth);
      // this.ctx.fillText(this.selectedShape.text, xBegin + rectWidth/2 , yBegin + (rectHeight + 20)/2, rectWidth);
     // console.log("fillRct: ", this.ctx);
    }


  }

}
