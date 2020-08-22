import { Component, OnInit, Input } from '@angular/core';
import { Rectangle } from 'src/app/rectangle';

@Component({
  selector: 'app-shape-detail',
  templateUrl: './shape-detail.component.html',
  styleUrls: ['./shape-detail.component.css']
})
export class ShapeDetailComponent implements OnInit {
  @Input() selectedShape: Rectangle;

  constructor() { }

  ngOnInit(): void {
  }

}
