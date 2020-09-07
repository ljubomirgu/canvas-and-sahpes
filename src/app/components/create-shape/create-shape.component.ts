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
  }

  onSelect(shape: string){
    if(shape === "rectangle"){
      this.chosenRectangle = true;
      this.chosenCircle = false;
    }else if(shape === "circle"){
      this.chosenRectangle = false;
      this.chosenCircle = true;
    }
  }

  onSubmitCreateCircle(){
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
      this.router.navigate(['/shapes']);
      this.shapeService.addedShape = true;
      this.shapeService.setCreatedShape(res);
    });
  }

  onSubmitCreateRectangle(){
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
      this.router.navigate(['/shapes']);
      this.shapeService.addedShape = true;
      this.shapeService.setCreatedShape(res);
    });
  }

}
