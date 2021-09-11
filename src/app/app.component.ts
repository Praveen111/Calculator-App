import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';

  // ngOnChanges(changes:SimpleChanges) {
  //   console.log("CHANGES APP",changes);
  // }
  onOperationDone(val:any) {
    console.log("On Done",val);
  }
}
