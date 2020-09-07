import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShapeService } from '../../services/shape.service';
import { Shape } from 'src/app/shape';


@Component({
  selector: 'app-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.css']
})
export class SelectShapeComponent implements OnInit {
  addedShape: boolean = false;
  selectedSh: Shape;
  shapess: Shape[];

  selected: Shape;

  constructor(private router: Router, private shapeService: ShapeService) { }

  ngOnInit(): void {
    this.fetchShapes();
  }

  fetchShapes(){
    this.shapeService.getShapes().subscribe((shapes) => {
      this.shapess = shapes;
      this.checkAddedShape();
      if(this.addedShape){
        this.selected=this.shapeService.createdShape;
        this.onSelectShape();
      }
    });
  }

  checkAddedShape(){
    this.addedShape = this.shapeService.addedShape;
  }

  onSelectShape(){
    this.selectedSh= this.selected;
  }

  updateShape(event: Shape){
     this.selectedSh = event;
     this.selected = event;
  }

}
