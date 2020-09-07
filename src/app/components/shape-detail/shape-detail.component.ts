import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';
import { ShapeService } from 'src/app/services/shape.service';
import { Circle } from 'src/app/circle';
import { Shape } from 'src/app/shape';

@Component({
  selector: 'app-shape-detail',
  templateUrl: './shape-detail.component.html',
  styleUrls: ['./shape-detail.component.css'],
})
export class ShapeDetailComponent implements OnInit {
  /*private*/ _selectedShape: Shape;

  @Output() updatedShape = new EventEmitter<Shape>();

  constructor(private shapeService: ShapeService) {}

  ngOnInit(): void {}

  @Input() set selectedShape(selectedSh: Shape) {
    this._selectedShape = selectedSh;
    if (this._selectedShape) {
      this.arrayShape = [];
      console.log('Keys: ', Object.keys(this._selectedShape)); ///////
      if (this._selectedShape instanceof Circle) {
        const shape = {
          _id: this._selectedShape._id,
          text: this._selectedShape.text,
          color: this._selectedShape.color,
          borderColor: this._selectedShape.borderColor,
          xBegin: this._selectedShape.position.xBegin,
          yBegin: this._selectedShape.position.yBegin,
          radius: this._selectedShape.position.radius,
        };
        for (let prop in shape) {
          for (let obj of this.arrayShapeReadOnly) {
            if (prop === obj.propertyName) {
              this.arrayShape.push({
                propertyTitle: obj.propertyTitle,
                propertyType: obj.propertyType,
                propertyName: obj.propertyName,
                propertyValue: shape[prop],
              });
            }
          }
        }
      } else if (this._selectedShape instanceof Rectangle) {
        const shape = {
          _id: this._selectedShape._id,
          text: this._selectedShape.text,
          color: this._selectedShape.color,
          xBegin: this._selectedShape.position.xBegin,
          yBegin: this._selectedShape.position.yBegin,
          rectWidth: this._selectedShape.position.rectWidth,
          rectHeight: this._selectedShape.position.rectHeight,
        };
        for (let prop in shape) {
          for (let obj of this.arrayShapeReadOnly) {
            if (prop === obj.propertyName) {
              this.arrayShape.push({
                propertyTitle: obj.propertyTitle,
                propertyType: obj.propertyType,
                propertyName: obj.propertyName,
                propertyValue: shape[prop],
              });
            }
          }
        }
      }
    }
  }

  arrayShapeReadOnly: {propertyTitle: string; propertyType: string; propertyName: string;}[] = [
    { propertyTitle: 'ID', propertyType: 'text', propertyName: '_id' },
    { propertyTitle: 'Text', propertyType: 'text', propertyName: 'text' },
    { propertyTitle: 'Color', propertyType: 'color', propertyName: 'color' },
    { propertyTitle: 'Border color', propertyType: 'color', propertyName: 'borderColor' },
    { propertyTitle: 'x(px)', propertyType: 'number', propertyName: 'xBegin' },
    { propertyTitle: 'y(px)', propertyType: 'number', propertyName: 'yBegin' },
    { propertyTitle: 'width(px)', propertyType: 'number', propertyName: 'rectWidth'},
    { propertyTitle: 'height(px)', propertyType: 'number', propertyName: 'rectHeight' },
    { propertyTitle: 'radius(px)', propertyType: 'number', propertyName: 'radius' },
  ];

  arrayShape: { propertyTitle: string; propertyType: string; propertyName: string; propertyValue: any;}[];

  onSubmitUpdate() {
    console.log("onSubmitUpdate 1 ", this._selectedShape);/////
    this.shapeService.updateShape(this._selectedShape._id, this._selectedShape).subscribe((res)=> {
      console.log(res);
    });
  }

  textUpdating(event: { propertyTitle: string; propertyValue: string }) {
    const propertyValue = event.propertyValue;
    let propName: string;
    for (let proper of this.arrayShape) {
      if (proper.propertyTitle == event.propertyTitle) {
        if (
          proper.propertyTitle == 'x(px)' ||
          proper.propertyTitle == 'y(px)' ||
          proper.propertyTitle == 'width(px)' ||
          proper.propertyTitle == 'height(px)' ||
          proper.propertyTitle == 'radius'
        ) {
          propName = 'position.' + proper.propertyName;
        } else {
          propName = proper.propertyName;
        }
      }
    }
    if (this._selectedShape instanceof Circle) {
      for (let prop in this._selectedShape) {
        if (prop == propName) {
          this._selectedShape[prop] = propertyValue;
        }
      }
    } else if (this._selectedShape instanceof Rectangle) {
      for (let prop in this._selectedShape) {
        if (prop == propName) {
          this._selectedShape[prop] = propertyValue;
        }
      }
    }
    this.updatedShape.emit(this._selectedShape);
  }

  numberUpdating(event: { propertyTitle: string; propertyValue: number }) {
    const propertyValue = event.propertyValue;
    let propName: string;
    for (let proper of this.arrayShape) {
      if (proper.propertyTitle == event.propertyTitle) {
        if (
          proper.propertyTitle == 'x(px)' ||
          proper.propertyTitle == 'y(px)' ||
          proper.propertyTitle == 'width(px)' ||
          proper.propertyTitle == 'height(px)' ||
          proper.propertyTitle == 'radius'
        ){
          propName = proper.propertyName;
          }
      }
    }
    if (this._selectedShape instanceof Circle) {
      for (let prop in this._selectedShape.position) {
        if (prop == propName) {
          this._selectedShape.position[prop] = propertyValue;
        }
      }
    } else if (this._selectedShape instanceof Rectangle) {
      for (let prop in this._selectedShape.position) {
        if (prop == propName) {
          this._selectedShape.position[prop] = propertyValue;
        }
      }
    }
    this.updatedShape.emit(this._selectedShape);
  }

  colorUpdating(event: { propertyTitle: string; propertyValue: string }) {
    const propertyValue = event.propertyValue;
    let propName: string;
    for (let proper of this.arrayShape) {
      if (proper.propertyTitle == event.propertyTitle) {
        if (
          proper.propertyTitle == 'x(px)' ||
          proper.propertyTitle == 'y(px)' ||
          proper.propertyTitle == 'width(px)' ||
          proper.propertyTitle == 'height(px)' ||
          proper.propertyTitle == 'radius'
        ) {
          propName = 'position.' + proper.propertyName;
        } else {
          propName = proper.propertyName;
        }
      }
    }
    if (this._selectedShape instanceof Circle) {
      for (let prop in this._selectedShape) {
        if (prop == propName) {
          this._selectedShape[prop] = propertyValue;
        }
      }
    } else if (this._selectedShape instanceof Rectangle) {
      for (let prop in this._selectedShape) {
        if (prop == propName) {
          this._selectedShape[prop] = propertyValue;
        }
      }
    }
    this.updatedShape.emit(this._selectedShape);
  }

}
