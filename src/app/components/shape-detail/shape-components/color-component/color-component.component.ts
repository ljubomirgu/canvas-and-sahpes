import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-component',
  templateUrl: './color-component.component.html',
  styleUrls: ['./color-component.component.css']
})
export class ColorComponentComponent implements OnInit {
  propertyType : string;

  @Input() propertyTitle: string;
  @Input() propertyValue: string;
  @Output() updateColor  = new EventEmitter<{propertyTitle: string;propertyValue: string; }>();


  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor(event:Event){
    this.propertyValue =(<HTMLInputElement>event.target).value;
    this.updateColor.emit({propertyTitle: this.propertyTitle, propertyValue: this.propertyValue});
  }

}
