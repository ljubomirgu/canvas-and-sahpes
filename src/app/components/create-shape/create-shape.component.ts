import { Component, OnInit } from '@angular/core';
import { ShapeService } from '../../services/shape.service';
import { Rectangle } from 'src/app/rectangle';
import { Circle } from 'src/app/circle';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-shape',
  templateUrl: './create-shape.component.html',
  styleUrls: ['./create-shape.component.css']
})
export class CreateShapeComponent implements OnInit {
  chosenRectangle = false;
  chosenCircle = false;

  newRectangle: Rectangle;
  // newRectangle: {
  //   text: string,
  //   color: string,
  //   position: {xBegin: number, yBegin: number, rectWidth: number, rectHeight: number}
  // };
  newCircle: Circle;

  rectangleForm = new FormGroup({
    text: new FormControl(''),
    color: new FormControl('#ffffff'),
    position: new FormGroup({
      xBegin: new FormControl(0),
      yBegin: new FormControl(0),
      rectWidth: new FormControl(0),
      rectHeight: new FormControl(0)
    })
  })

  circleForm = new FormGroup({
    text: new FormControl(''),
    color: new FormControl('#ffffff'),
    borderColor: new FormControl('#010101'),
    position: new FormGroup({
      xBegin: new FormControl(0),
      yBegin: new FormControl(0),
      radius: new FormControl(0)
    })
  })

  constructor(private shapeService: ShapeService) { }

  ngOnInit(): void {
   // this.setNewRectangle();
   this.newCircle = {} as Circle;
   this.newRectangle = {} as Rectangle;
  }

  // setNewRectangle(){
  //   this.newRectangle.text = '';
  //   this.newRectangle.color='';
  //   this.newRectangle.position.xBegin = 0;
  //   this.newRectangle.position.yBegin = 0;
  //   this.newRectangle.position.rectWidth = 0;
  //   this.newRectangle.position.rectHeight = 0;
  // }

  onSelect(shape: string){
    if(shape === "rectangle"){
      this.chosenRectangle = true;
      this.chosenCircle = false;
    }else if(shape === "circle"){
      this.chosenRectangle = false;
      this.chosenCircle = true;
    }
    console.log("chosenRect: ", this.chosenRectangle);
    console.log("chosenCirc: ", this.chosenCircle);

  }

  // onChangeRectText(event: Event){
  //   console.log('1. ', event);
  //   this.newRectangle.text = (<HTMLInputElement>event.target).value;
  // }
  // onChangeRectColor(event: Event){
  //   this.newRectangle.color = (<HTMLInputElement>event.target).value;
  // }
  // onChangeRectX(event: Event){
  //   this.newRectangle.position.xBegin = +(<HTMLInputElement>event.target).value;
  // }
  // onChangeRectY(event: Event){
  //   this.newRectangle.position.yBegin = +(<HTMLInputElement>event.target).value;
  // }
  // onChangeRectWidth(event: Event){
  //   this.newRectangle.position.rectWidth = +(<HTMLInputElement>event.target).value;
  // }
  // onChangeRectHeight(event: Event){
  //   this.newRectangle.position.xBegin = +(<HTMLInputElement>event.target).value;
  // }
  // onChangeCircleText(event: Event){
  //   this.newCircle.text = this.newRectangle.text = (<HTMLInputElement>event.target).value;
  // }
  // onChangeCircleColor(event: Event){
  //   this.newCircle.color = (<HTMLInputElement>event.target).value;
  // }
  // onChangeCircleBorderColor(event: Event){
  //   this.newCircle.borderColor = (<HTMLInputElement>event.target).value;
  // }
  // onChangeCircleX(event: Event){
  //   this.newCircle.position.xBegin = +(<HTMLInputElement>event.target).value;
  // }
  // onChangeCircleY(event: Event){
  //   this.newCircle.position.yBegin = +(<HTMLInputElement>event.target).value;
  // }
  // onChangeCircleRadius(event: Event){
  //   this.newCircle.position.radius = +(<HTMLInputElement>event.target).value;
  // }

  onSubmitCreateCircle(){
    this.shapeService.addShape(this.newCircle).subscribe((res) => {
      console.log('1. ',res);
    });
  }
  onSubmitCreateRectangle(){
    this.shapeService.addShape(this.newRectangle).subscribe((res) => {
      console.log('2. ',res);
    });
  }


}
