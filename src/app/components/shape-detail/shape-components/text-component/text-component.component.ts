import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {
  propertyType : string;

  @Input() propertyTitle: string;
  @Input() propertyValue: string;
  @Output() updateText  = new EventEmitter<{propertyTitle: string;propertyValue: string; }>();


  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(event:Event){
    this.propertyValue =(<HTMLInputElement>event.target).value;
    this.updateText.emit({propertyTitle: this.propertyTitle, propertyValue: this.propertyValue});
  }
}


