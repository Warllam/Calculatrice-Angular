import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'PAN';
  //input: string;
  op1: string = '';
  op2: string = '';
  selecteur: number = 1;
  result: string = '';

  pressNum(num: String) {
    if (this.selecteur == 1) {
      this.op1 += num;
    } else {
      this.op2 += num;
    }
    //this.calcAnswer();
  }
}
