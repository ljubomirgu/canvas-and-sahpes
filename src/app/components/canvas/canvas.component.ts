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

    if(this.ctx != null){
     // console.log("ctx: ", this.ctx)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.selectedShape.color;
      console.log("style: ",this.selectedShape.color )

     console.log("Dimension: ",this.selectedShape.position.xBegin, this.selectedShape.position.yBegin,
     this.selectedShape.position.rectWidth, this.selectedShape.position.rectHeight)

      this.ctx.fillRect(
        this.selectedShape.position.xBegin,
        this.selectedShape.position.yBegin,
        this.selectedShape.position.rectWidth,
        this.selectedShape.position.rectHeight);
    }
    console.log("fillRct: ", this.ctx);

  }

}
