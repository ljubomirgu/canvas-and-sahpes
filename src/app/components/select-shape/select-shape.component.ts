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
    // this.selectedShapes = this.shapes.filter(shape => shape.id === id);
    // this.selectedId = this.shapes.map(({id}) => id)[0];

    // this.selectedShape = this.shapes[id];

    // console.log("1***  ",this.selectedShape);
    // console.log("2. ",this.selectedId);
    // console.log("3. ",this.selectedShapes);

    //this.shapeSelected.emit(this.selectedShape)
    this.canvasComp.drawRectangle(this.selectedShape);


  }



}
