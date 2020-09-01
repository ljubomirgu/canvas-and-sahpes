import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShapeService } from '../../services/shape.service';

import { Rectangle } from 'src/app/rectangle';
import { RECTANGLES } from 'src/app/mock-rectangles';
import { Shape } from 'src/app/shape';

//25.08.2020 dodato:
//import { SHAPES } from 'src/app/mock-shapes';
import { Circle } from 'src/app/circle';


@Component({
  selector: 'app-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.css']
})
export class SelectShapeComponent implements OnInit {

  addedShape: boolean = false;
  // selectedShape: Rectangle;
  // shapes: Rectangle[];//zakomentarisano jer je dodato:
  //lastShape: Shape;
  //25.08.2020.
  selectedSh: Shape;//
  shapess: Shape[];//

  selectedRect: Rectangle;//
  selectedCircle: Circle;//

  selectedId: number;
  @ViewChild('canvasComp', { static: false })canvasComp;
  @ViewChild('shapeDetail', { static: false })shapeDetail;

 // selectedShapes: Rectangle[];//
  //@Output() shapeSelected = new EventEmitter<Rectangle>();

  constructor(private router: Router, private shapeService: ShapeService) { }

  ngOnInit(): void {
    console.log("addedShape ", this.addedShape);//0109
    this.fetchShapes();
    //  this.shapes = RECTANGLES;
    //  this.shapess = SHAPES;//
    this.ckeckAddedShape();//0109
   // this.setLastShape();//0109
   console.log("addedShape ", this.addedShape);//0109

  }

  fetchShapes(){
    this.shapeService.getShapes().subscribe((shapes) => {
      this.shapess = shapes;
      console.log(this.shapess);
    });
  }

  ckeckAddedShape(){//0109
    this.addedShape = this.shapeService.addedShape;
  }
  // setLastShape(){//0109
  //   this.lastShape = this.shapess[this.shapess.length-1];
  // }

  //ima nova metoda onSelectShape()
  // onSelect(id: number){
  //   //  console.log(id);
  //   //  console.log(this.shapes);
  //   this.selectedShape = this.shapes.find(shape => shape.id == id);
  //   this.canvasComp.drawRectangle(this.selectedShape);
  // }

  //25.8.2020.
  onSelectShape(id: string){
    console.log(id);
   //console.log(this.shapess);
   // this.selectedSh = this.shapess.find(shape => shape._id === id);

    this.shapeService.getShapeById(id).subscribe((shape) =>{
      if(!shape.hasOwnProperty('borderColor')){
        this.selectedRect = <Rectangle>shape;
        console.log("hha ", this.selectedRect);
        this.canvasComp.drawRectangle(this.selectedRect);//...drawCircle(this.selectedSh)
        this.shapeDetail.setRectangle(this.selectedRect);
      }else{
        this.selectedCircle = <Circle>shape;
        console.log("opa ", this.selectedCircle);
        this.canvasComp.drawCircle(this.selectedCircle)//...drawCircle(this.selectedSh)
      this.shapeDetail.setCircle(this.selectedCircle);
      }
    })

  //  console.log(this.selectedSh);
  //   if(this.selectedSh instanceof Rectangle){
  //     this.selectedRect = this.selectedSh;//
  //     this.canvasComp.drawRectangle(this.selectedRect);//...drawCircle(this.selectedSh)
  //     this.shapeDetail.setRectangle(this.selectedRect);//26.08.
  //   }else if(this.selectedSh instanceof Circle){
  //     this.selectedCircle = this.selectedSh//
  //     this.canvasComp.drawCircle(this.selectedCircle)//...drawCircle(this.selectedSh)
  //     this.shapeDetail.setCircle(this.selectedCircle);//26.08.
  //   }
  }

  //ima nova metoda updateShape()
  // updateObject(event: Rectangle){
  //   this.selectedShape = event;//subscribe?
  //   this.canvasComp.drawRectangle(this.selectedShape);
  // }


  updateShape(event: Shape){
    this.selectedSh = event;//subscribe?
    if(this.selectedSh instanceof Circle){
      this.canvasComp.drawCircle(<Circle>this.selectedSh);
    }else if(this.selectedSh instanceof Rectangle){
      this.canvasComp.drawRectangle(<Rectangle>this.selectedSh);
  }
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


  //25.08.*****************************************************
  // selectedShape: Rectangle;
  // shapes: Rectangle[];//zakomentarisano jer je dodato:

//   selectedSh: Shape;//
//   shapess: Shape[];//

//   selectedId: number;
//   @ViewChild('canvasComp', { static: false })canvasComp;
//   @ViewChild('shapeDetail', { static: false })shapeDetail;

//   constructor() { }

//   ngOnInit(): void {
//       this.shapess = SHAPES;//
//   }

//   onSelectShape(id: number){
//      console.log(id);
//      console.log(this.shapess);

//     this.selectedSh = this.shapess.find(shape => shape.id == id);
//     console.log(this.selectedSh);
//     if(this.selectedSh instanceof Rectangle){
//       this.canvasComp.drawRectangle(this.selectedSh);
//     }else if(this.selectedSh instanceof Circle){
//       this.canvasComp.drawCircle(this.selectedSh);
//     }
//   }

//   updateObject(event: Rectangle){
//     this.selectedShape = event;//subscribe?
//     this.canvasComp.drawRectangle(this.selectedShape);
//   }
}
