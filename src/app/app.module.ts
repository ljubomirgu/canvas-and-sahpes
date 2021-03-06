import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectShapeComponent } from './components/select-shape/select-shape.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ShapeDetailComponent } from './components/shape-detail/shape-detail.component';
import { CreateShapeComponent } from './components/create-shape/create-shape.component';

import { ShapeService } from './services/shape.service';
import { NumberComponentComponent } from './components/shape-detail/shape-components/number-component/number-component.component';
import { TextComponentComponent } from './components/shape-detail/shape-components/text-component/text-component.component';
import { ColorComponentComponent } from './components/shape-detail/shape-components/color-component/color-component.component';

const routes: Routes = [
  { path: 'create', component: CreateShapeComponent},
  { path: 'shapes', component: SelectShapeComponent},
  {path: '', redirectTo: 'shapes', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SelectShapeComponent,
    CanvasComponent,
    ShapeDetailComponent,
    CreateShapeComponent,
    NumberComponentComponent,
    TextComponentComponent,
    ColorComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
