export class ShapeService{
  shapeText: string;

  updateShapeText(text: string){
    this.shapeText = text;
  }


  public get updatedShapeText() : string {
    return this.shapeText;
  }

}
