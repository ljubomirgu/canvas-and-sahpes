import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shape } from '../shape';
import { Rectangle } from '../rectangle';
import { Circle } from '../circle';

@Injectable({ providedIn: 'root'})
export class ShapeService{
  addedShape: boolean = false;
  createdShapeId: string;

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {};

  getShapes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.uri}/shapes`);
  }

  getShapeById(id: string): Observable<any>{
    return this.http.get<any>(`${this.uri}/shapes/${id}`);
  }

  addShape(someShape: any) : Observable<any>{
       return this.http.post(`${this.uri}/shapes/add`, someShape);
  }

  updateShape(id: string, text: string, color: string, borderColor: string): Observable<Object>{
    const shape = {
      text: text,
      color: color,
      borderColor: borderColor
    };
    return this.http.put(`${this.uri}/shapes/update/${id}`, shape);
  }

  deleteShape(id: string): Observable<any>{
    return this.http.delete(`${this.uri}/shapes/delete/${id}`);
  }

  setCreatedShapeId(id: string){
    this.createdShapeId = id;
    console.log("Shapeservise setCreatedShapeId: ",this.createdShapeId);/////
  }
}
