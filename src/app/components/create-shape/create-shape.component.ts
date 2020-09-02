import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Circle } from 'src/app/circle';
import { ShapeService } from '../../services/shape.service';
import { Rectangle } from 'src/app/rectangle';


@Component({
  selector: 'app-create-shape',
  templateUrl: './create-shape.component.html',
  styleUrls: ['./create-shape.component.css']
})
export class CreateShapeComponent implements OnInit {
  chosenRectangle: boolean = false;
  chosenCircle: boolean = false;
  resId: string;
  newRectangle: Rectangle;
  newCircle: Circle;

  rectangleForm = new FormGroup({
    text: new FormControl(''),
    color: new FormControl('#ffffff'),
    xBegin: new FormControl(0, Validators.min(0)),
    yBegin: new FormControl(0, Validators.min(0)),
    rectWidth: new FormControl(0, [Validators.required, Validators.min(0)]),
    rectHeight: new FormControl(0, [Validators.required, Validators.min(0)])
  })

  circleForm = new FormGroup({
    text: new FormControl(''),
    color: new FormControl('#ffffff'),
    borderColor: new FormControl('#ffffff'),
    xBegin: new FormControl(0, Validators.min(0)),
    yBegin: new FormControl(0, Validators.min(0)),
    radius: new FormControl(0, [Validators.required, Validators.min(0)])
  })

  constructor(private shapeService: ShapeService, private router: Router) { }

  ngOnInit(): void {
    this.newRectangle = new Rectangle('','','#ffffff',null,null,null,null);
    this.newCircle = new Circle('','','#ffffff','#ffffff',null,null,null)
    console.log("newCircle ", this.newCircle);//////
    console.log("newRectangle", this.newRectangle);//////
  }

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
    console.log("On submit Circle: ", this.newCircle);/////
    const shape = {
      text: this.newCircle.text,
      color: this.newCircle.color,
      borderColor: this.newCircle.borderColor,
      position: {
        xBegin: this.newCircle.position.xBegin,
        yBegin: this.newCircle.position.yBegin,
        radius: this.newCircle.position.radius
      }
    }
    this.shapeService.addShape(shape).subscribe((res) => {
      console.log('Added circle ',res);/////
      this.router.navigate(['/shapes']);
      this.shapeService.addedShape=true;
      this.shapeService.setCreatedShapeId(res._id);
    });
  }

  onSubmitCreateRectangle(){
    console.log("On submit Rect: ", this.newRectangle);/////
    const shape = {
      text: this.newRectangle.text,
      color: this.newRectangle.color,
      position: {
        xBegin: this.newRectangle.position.xBegin,
        yBegin: this.newRectangle.position.yBegin,
        rectWidth: this.newRectangle.position.rectWidth,
        rectHeight: this.newRectangle.position.rectHeight,
      }
    }
    this.shapeService.addShape(shape).subscribe((res) => {
      console.log('Added rect ',res);/////
      this.router.navigate(['/shapes']);
      this.shapeService.addedShape=true;
      this.shapeService.setCreatedShapeId(res._id);
    });
  }

}
