import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-component',
  templateUrl: './number-component.component.html',
  styleUrls: ['./number-component.component.css']
})
export class NumberComponentComponent implements OnInit {
  propertyType : number;

  @Input() propertyTitle: string;
  @Input() propertyValue: number;
  @Output() updateNumber  = new EventEmitter<{propertyTitle: string;propertyValue: number; }>();


  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(event:Event){
    this.propertyValue =+(<HTMLInputElement>event.target).value;
    this.updateNumber.emit({propertyTitle: this.propertyTitle, propertyValue: this.propertyValue});
  }

}
