import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
  // encapsulation:ViewEncapsulation.Emulated
})
export class OperationsComponent implements OnInit {
  @Input('value1') value1:any;
  @Input('value2') value2:any;
  @Output() done = new EventEmitter<any>();
  result:Number=0;

  constructor() { }

  ngOnInit(): void {
  }

  // ngDoCheck() {
  //   console.log("Checked in OperationsComponent",this.value1,this.value2)
  // }

  onAdd():void {
  // console.log("ON ADD",this.value1,this.value2);
  this.done.emit(true);
  this.result = this.value2 + this.value1;
  }

  onSubtract():void {
    this.done.emit(true);
    this.result = this.value1 - this.value2;
  }

  onMultiply():void {
    this.done.emit(true);
    this.result = this.value1 * this.value2;
  }

  onDivide():void {
    this.done.emit(true);
    this.result = this.value1 / this.value2;
  }

  onReset():void {
    this.done.emit(true);
    this.result = 0;
  }

}
