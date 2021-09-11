import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperationsComponent } from '../operations-child/operations.component';

@Component({
  selector: 'app-inputvalues',
  templateUrl: './inputvalues.component.html',
  styleUrls: ['./inputvalues.component.css'],
})
export class InputvaluesComponent implements OnChanges,OnInit,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit,OnDestroy {
  value1 = 0;
  value2 = 0;
  @ViewChild(OperationsComponent)
  private ops!: OperationsComponent;

  constructor() {
    // console.log("Constructor Called",this.value1);
   }

  ngOnChanges(changes:SimpleChanges):void {
console.log("InputvaluesComponent - ngOnChanges Called",changes)
  }

  ngOnInit(): void {
    console.log("InputvaluesComponent - ngOnInit Called")
  }

  ngDoCheck():void {
    console.log("InputvaluesComponent - ngDoCheck Called")
  }

  ngAfterContentInit():void {
    console.log("InputvaluesComponent - ngAfterContentInit Called")
  }

  ngAfterContentChecked():void{
    console.log("InputvaluesComponent - ngAfterContentChecked Called")
  }

  ngAfterViewChecked():void {
    console.log("InputvaluesComponent - ngAfterViewChecked Called")
  }

  ngAfterViewInit():void {
    console.log("InputvaluesComponent - ngAfterViewInit Called")
  }

  ngOnDestroy():void {
    console.log("InputvaluesComponent - ngOnDestroy Called")
  }

  onOperationDone(isDone:any){
    console.log("DONE INPUT",isDone);
    if(isDone) {
      this.value1 = 0;
      this.value2 = 0;
    }
  }

  onAdd():void {
    // console.log("ON ADD",this.value1,this.value2);
    this.ops.onAdd();
    }
  
    onSubtract():void {
      this.ops.onSubtract();
    }
  
    onMultiply():void {
      this.ops.onMultiply();
    }
  
    onDivide():void {
      this.ops.onDivide();
    }
  
    onReset():void {
      this.ops.onReset();
    }

}
