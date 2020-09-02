import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShapeService } from '../../services/shape.service';

import { Rectangle } from 'src/app/rectangle';
import { Shape } from 'src/app/shape';
import { Circle } from 'src/app/circle';


@Component({
  selector: 'app-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.css']
})
export class SelectShapeComponent implements OnInit {
  addedShape: boolean = false;
  selectedSh: Shape;
  shapess: Shape[];
  selectedRect: Rectangle;
  selectedCircle: Circle;

  selectedId: string;
  @ViewChild('canvasComp', { static: false })canvasComp;
  @ViewChild('shapeDetail', { static: false })shapeDetail;

  constructor(private router: Router, private shapeService: ShapeService) { }

  ngOnInit(): void {
    console.log("onInit selectedId ",this.selectedId);/////
    console.log("addedShape ", this.addedShape);/////
    this.fetchShapes();
    this.ckeckAddedShape();
    console.log("addedShape ", this.addedShape);/////
  }

  fetchShapes(){
    this.shapeService.getShapes().subscribe((shapes) => {
      this.shapess = shapes;
      console.log("Fetch shapess ", this.shapess);/////
      this.ckeckAddedShape();
      if(this.addedShape){
        // if(!this.shapess[this.shapess.length-1].hasOwnProperty('borderColor')){
        //   this.canvasComp.drawRectangle(<Rectangle>this.shapess[this.shapess.length-1]);
        //   this.shapeDetail.setRectangle(<Rectangle>this.shapess[this.shapess.length-1]);
        // }else{
        //   this.canvasComp.drawCircle(<Circle>this.shapess[this.shapess.length-1]);
        //   this.shapeDetail.setCircle(<Circle>this.shapess[this.shapess.length-1]);
        // }
        //this.selectedId = this.shapess[this.shapess.length-1]._id;
        this.selectedId = this.shapeService.createdShapeId;
        this.onSelectShape(this.selectedId);
      }
    });
  }

  ckeckAddedShape(){//0109
    this.addedShape = this.shapeService.addedShape;
  }

  onSelectShape(id: string){
    console.log("onSelect selectedId ",this.selectedId);/////
    console.log(id);/////

    this.shapeService.getShapeById(id).subscribe((shape) =>{
      if(!shape.hasOwnProperty('borderColor')){
        this.selectedRect = <Rectangle>shape;
        console.log("OnSelectShapeRect ", this.selectedRect);/////
        this.canvasComp.drawRectangle(this.selectedRect);
        this.shapeDetail.setRectangle(this.selectedRect);
      }else{
        this.selectedCircle = <Circle>shape;
        console.log("OnSelectShapeCirc ", this.selectedCircle);
        this.canvasComp.drawCircle(this.selectedCircle)
        this.shapeDetail.setCircle(this.selectedCircle);
      }
    })
  }

  updateShape(event: Shape){
    this.selectedSh = event;
    if(this.selectedSh instanceof Circle){
      this.canvasComp.drawCircle(<Circle>this.selectedSh);
    }else if(this.selectedSh instanceof Rectangle){
      this.canvasComp.drawRectangle(<Rectangle>this.selectedSh);
   }
  }

}
