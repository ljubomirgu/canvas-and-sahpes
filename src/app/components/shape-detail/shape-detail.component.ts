import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';
import { Circle } from 'src/app/circle';
import { Shape } from 'src/app/shape';

@Component({
  selector: 'app-shape-detail',
  templateUrl: './shape-detail.component.html',
  styleUrls: ['./shape-detail.component.css'],
  // providers: [ShapeService]

})
export class ShapeDetailComponent implements OnInit {
  //@Input() selectedShape: Rectangle;//15:51 ovo se koristilo u svim dole onChangeShape...metodama umesto sadašnjeg selectedRectangle

  //26.08.
  selectedRectangle: Rectangle;
  selectedCircle: Circle;
 // @Input() selectedSh: Shape;

  updatedObject: Rectangle;
  @Output() updatedShapeRectangle = new EventEmitter<Rectangle>();//
  //26.08.
  @Output() updatedShapeCircle = new EventEmitter<Circle>();
  //@Output() updatedShape = new EventEmitter<Shape>();

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


  //
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

    // onChangeText(event: Event){
    //   this.selectedSh.text= (<HTMLInputElement>event.target).value;
    //   this.updatedShape.emit(this.selectedSh);
    // }


//24.08.2020. za slučaj da svaki input ima poseban EventEmitter:
  // updatedText: string;
  // updatedColor: string;
  // updatedPosition: {xBegin:number, yBegin: number, rectWidth: number, rectHeight: number};
  // @Output() updatedShapeText = new EventEmitter<String>();//
  // @Output() updatedShapeColor = new EventEmitter<String>();//
  // @Output() updatedShapePosition = new EventEmitter<{xBegin:number, yBegin: number, rectWidth: number, rectHeight: number}>();//


  // //24.08.2020. za svaki input poseban EventEmitter:
  // onChangeShapeText(event: Event){
  //   this.updatedText= (<HTMLInputElement>event.target).value;
  //   // this.updatedShapeText.emit(this.updatedText);
  //  // this.shapeService.updateShapeText(this.selectedShapeText);//bez servisa radim
  //  this.updatedObject = this.selectedShape;
  //  this.updatedObject.text=this.updatedText;
  //  this.updatedShapeObject.emit(this.selectedShape);
  // }
  // onChangeShapeColor(event: Event){
  //   this.updatedColor = (<HTMLInputElement>event.target).value;
  //   // this.updatedShapeColor.emit(this.updatedColor);
  //   this.updatedObject = this.selectedShape;
  //   this.updatedObject.color=this.updatedColor;
  //   this.updatedShapeObject.emit(this.updatedObject);
  // }

  // onChangeXBegin(event: Event){
  //   // this.updatedPosition.xBegin = +(<HTMLInputElement>event.target).value;
  //   this.updatedObject = this.selectedShape;
  //   this.updatedObject.position.xBegin= +(<HTMLInputElement>event.target).value;;
  //   this.updatedShapeObject.emit(this.updatedObject);
  // }
  // onChangeYBegin(event: Event){
  //   // this.updatedPosition.yBegin = +(<HTMLInputElement>event.target).value;
  //   this.updatedObject = this.selectedShape;
  //   this.updatedObject.position.yBegin= +(<HTMLInputElement>event.target).value;;
  //   this.updatedShapeObject.emit(this.updatedObject);
  // }
  // onChangeRectWidth(event: Event){
  //   // this.updatedPosition.rectWidth = +(<HTMLInputElement>event.target).value;
  //   this.updatedObject = this.selectedShape;
  //   this.updatedObject.position.rectWidth= +(<HTMLInputElement>event.target).value;;
  //   this.updatedShapeObject.emit(this.updatedObject);
  // }
  // onChangeRectHeight(event: Event){
  //   // this.updatedPosition.rectHeight = +(<HTMLInputElement>event.target).value;
  //   this.updatedObject = this.selectedShape;
  //   this.updatedObject.position.rectHeight= +(<HTMLInputElement>event.target).value;;
  //   this.updatedShapeObject.emit(this.updatedObject);
  // }

 }
