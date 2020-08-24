import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';

@Component({
  selector: 'app-shape-detail',
  templateUrl: './shape-detail.component.html',
  styleUrls: ['./shape-detail.component.css'],
  // providers: [ShapeService]

})
export class ShapeDetailComponent implements OnInit {
  @Input() selectedShape: Rectangle;



  updatedObject: Rectangle;
  @Output() updatedShapeObject = new EventEmitter<Rectangle>();//

  // constructor(private shapeService: ShapeService) { }

  ngOnInit(): void {
  }

  onChangeShapeText(event: Event){
      this.selectedShape.text=(<HTMLInputElement>event.target).value;
      this.updatedShapeObject.emit(this.selectedShape);//observable?
    }
    onChangeShapeColor(event: Event){
      this.selectedShape.color=(<HTMLInputElement>event.target).value;
      this.updatedShapeObject.emit(this.selectedShape);//observable?
    }

    onChangeXBegin(event: Event){
      this.selectedShape.position.xBegin= +(<HTMLInputElement>event.target).value;;
      this.updatedShapeObject.emit(this.selectedShape);//observable?
    }
    onChangeYBegin(event: Event){
      this.selectedShape.position.yBegin= +(<HTMLInputElement>event.target).value;;
      this.updatedShapeObject.emit(this.selectedShape);//observable?
    }
    onChangeRectWidth(event: Event){
      this.selectedShape.position.rectWidth= +(<HTMLInputElement>event.target).value;;
      this.updatedShapeObject.emit(this.selectedShape);//observable?
    }
    onChangeRectHeight(event: Event){
      this.selectedShape.position.rectHeight= +(<HTMLInputElement>event.target).value;;
      this.updatedShapeObject.emit(this.selectedShape);//observable?
    }


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
