import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectShapeComponent } from './components/select-shape/select-shape.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ShapeDetailComponent } from './components/shape-detail/shape-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SelectShapeComponent,
    CanvasComponent,
    ShapeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
