import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

import { Rectangle } from 'src/app/rectangle';
import { RECTANGLES } from 'src/app/mock-rectangles';

@Component({
  selector: 'app-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.css']
})
export class SelectShapeComponent implements OnInit {

  selectedShape: Rectangle;
  shapes: Rectangle[];
  selectedId: number;
  @ViewChild('canvasComp', { static: false })canvasComp;
  @ViewChild('shapeDetail', { static: false })shapeDetail;

 // selectedShapes: Rectangle[];//
  //@Output() shapeSelected = new EventEmitter<Rectangle>();

  constructor() { }

  ngOnInit(): void {
    this.shapes = RECTANGLES;
  }

  onSelect(id: number){
     console.log(id);
     console.log(this.shapes);

     this.selectedShape = this.shapes.find(shape => shape.id == id);
    this.canvasComp.drawRectangle(this.selectedShape);
  }

  updateObject(event: Rectangle){
    this.selectedShape = event;//subscribe?
    this.canvasComp.drawRectangle(this.selectedShape);
  }



  //24.08.2020. za slučaj da svaki input ima svoj EventEmitter shape-detail.component.ts
  // updateText($event){
  //   this.selectedShape.text= $event;
  //   this.canvasComp.drawRectangle(this.selectedShape);
  // }
  // updateColor($event){
  //   this.selectedShape.color= $event;
  //   this.canvasComp.drawRectangle(this.selectedShape);
  // }


}
