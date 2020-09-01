import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shape } from '../shape';
import { Rectangle } from '../rectangle';
import { Circle } from '../circle';

@Injectable({ providedIn: 'root'})
export class ShapeService{
  // shapeText: string;

  // updateShapeText(text: string){
  //   this.shapeText = text;
  //  }
  // public get updatedShapeText() : string {
  //   return this.shapeText;
  // }
  addedShape: boolean = false;//0109

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {};

  getShapes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.uri}/shapes`);
  }
  getShapeById(id: string): Observable<any>{
    return this.http.get<any>(`${this.uri}/shapes/${id}`);
  }

  // getObjectById(id: string): Observable<Rectangle|Circle>{
  //   return this.http.get<Rectangle|Circle>(`${this.uri}/shapes/${id}`);
  // }

  // addShape(text: string, color: string, xBegin: number, yBegin: number, borderColor?: string, ): Observable<any>{
  //   const shape = {
  //     text: text,
  //     color: color,
  //     borderColor: borderColor,
  //     xBegin: xBegin,
  //     yBegin: yBegin,
  //   };
  //   return this.http.post(`${this.uri}/shapes/add`, shape);
  // }

  addShape(someShape: any){
       return this.http.post(`${this.uri}/shapes/add`, someShape);
      // this.addedShape = true;
  }

  updateShape(id: string, text: string, color: string, borderColor: string): Observable<Object>{
    const shape = {
      text: text,
      color: color,
      borderColor: borderColor
    };
    return this.http.put(`${this.uri}/shapes/update/${id}`, shape);
  }

  deleteShape(id: string): Observable<Object>{
    return this.http.delete(`${this.uri}/shapes/delete/${id}`);
  }
}
