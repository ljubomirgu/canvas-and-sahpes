import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';
import { Circle } from 'src/app/circle';

@Component({
  selector: 'app-shape-detail',
  templateUrl: './shape-detail.component.html',
  styleUrls: ['./shape-detail.component.css'],
})
export class ShapeDetailComponent implements OnInit {
  selectedRectangle: Rectangle;
  selectedCircle: Circle;
  updatedObject: Rectangle;

  @Output() updatedShapeRectangle = new EventEmitter<Rectangle>();
  @Output() updatedShapeCircle = new EventEmitter<Circle>();

  constructor(private shapeService: ShapeService) { }

  ngOnInit(): void {
  }

  //methods for updating rectangle attributes:
  onChangeRectText(event: Event){
    this.selectedRectangle.text=(<HTMLInputElement>event.target).value;
    this.updatedShapeRectangle.emit(this.selectedRectangle);//observable?
  }
  onChangeRectColor(event: Event){
    this.selectedRectangle.color=(<HTMLInputElement>event.target).value;
    this.updatedShapeRectangle.emit(this.selectedRectangle);//observable?
  }

  onChangeRectXBegin(event: Event){
    this.selectedRectangle.position.xBegin= +(<HTMLInputElement>event.target).value;;
    this.updatedShapeRectangle.emit(this.selectedRectangle);//observable?
  }
  onChangeRectYBegin(event: Event){
    this.selectedRectangle.position.yBegin= +(<HTMLInputElement>event.target).value;;
    this.updatedShapeRectangle.emit(this.selectedRectangle);//observable?
  }
  onChangeRectWidth(event: Event){
    this.selectedRectangle.position.rectWidth= +(<HTMLInputElement>event.target).value;;
    this.updatedShapeRectangle.emit(this.selectedRectangle);//observable?
  }
  onChangeRectHeight(event: Event){
    this.selectedRectangle.position.rectHeight= +(<HTMLInputElement>event.target).value;;
    this.updatedShapeRectangle.emit(this.selectedRectangle);//observable?
  }

  setRectangle(selectedRect: Rectangle){
    this.selectedRectangle = selectedRect;
    this.selectedCircle = null;
  }
  setCircle(selectedCircle: Circle){
    this.selectedCircle = selectedCircle;
    this.selectedRectangle = null;
  }

  //methods for updating circle attributes:
  onChangeCircleText(event: Event){
    this.selectedCircle.text = (<HTMLInputElement>event.target).value;
    this.updatedShapeCircle.emit(this.selectedCircle);
  }
  onChangeCircleColor(event: Event){
    this.selectedCircle.color = (<HTMLInputElement>event.target).value;
    this.updatedShapeCircle.emit(this.selectedCircle);
  }
  onChangeCircleBorderColor(event: Event){
    this.selectedCircle.borderColor = (<HTMLInputElement>event.target).value;
    this.updatedShapeCircle.emit(this.selectedCircle);
  }
  onChangeCircleXBegin(event: Event){
    this.selectedCircle.position.xBegin = +(<HTMLInputElement>event.target).value;
    this.updatedShapeCircle.emit(this.selectedCircle);
  }
  onChangeCircleYBegin(event: Event){
    this.selectedCircle.position.yBegin = +(<HTMLInputElement>event.target).value;
    this.updatedShapeCircle.emit(this.selectedCircle);
  }
  onChangeCircleRadius(event: Event){
    this.selectedCircle.position.radius = +(<HTMLInputElement>event.target).value;
    this.updatedShapeCircle.emit(this.selectedCircle);
  }

 }
