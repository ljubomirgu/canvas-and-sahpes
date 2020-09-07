import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Shape } from '../shape';
import { Rectangle } from '../rectangle';
import { Circle } from '../circle';

@Injectable({ providedIn: 'root'})
export class ShapeService{
  addedShape: boolean = false;

  createdShape: Shape;

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {};

  getShapes(): Observable<Shape[]>{
    return this.http.get<any[]>(`${this.uri}/shapes`).pipe(map(data => {
      const value : Shape [] = [];
      for (const sh of data) {
        if(sh.position.radius!= null){
         value.push(
           new Circle(
             sh._id,
             sh.text,
             sh.color,
             sh.borderColor,
             sh.position.xBegin,
             sh.position.yBegin,
             sh.position.radius
             )
          );
        }else{
          value.push(
            new Rectangle(
              sh._id,
              sh.text,
              sh.color,
              sh.position.xBegin,
              sh.position.yBegin,
              sh.position.rectWidth,
              sh.position.rectHeight));
        }
      }
      return value;
    }));
  }

  getShapeById(id: string): Observable<any>{
    return this.http.get<any>(`${this.uri}/shapes/${id}`);
  }

  addShape(someShape: any) : Observable<Shape>{
        return this.http.post<any>(`${this.uri}/shapes/add`, someShape).pipe(map(data =>{
         if(data.position.radius!= null){
          let value: Circle;
          value =
            new Circle(
              data._id,
              data.text,
              data.color,
              data.borderColor,
              data.position.xBegin,
              data.position.yBegin,
              data.position.radius
              );
              return value;
         }else{
           let value: Rectangle;
           value = new Rectangle(
              data._id,
              data.text,
              data.color,
              data.position.xBegin,
              data.position.yBegin,
              data.position.rectWidth,
              data.position.rectHeight
              );
              return value;
         }

       }));
  }

  updateShape(id: string, shape: any): Observable<any>{
    console.log("updateShape2 ",shape._id,shape)
    return this.http.put<any>(`${this.uri}/shapes/update/${id}`, shape);
  }

  deleteShape(id: string): Observable<any>{
    return this.http.delete(`${this.uri}/shapes/delete/${id}`);
  }

  setCreatedShape(shape: Shape){
    this.createdShape = shape;
  }
}
