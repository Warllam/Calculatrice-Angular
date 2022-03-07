import { Component, VERSION } from '@angular/core';
import { OperateursService } from './operateurs.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'PAN';
  //input: string;
  op1: number = 0;
  op2: number = 0;
  selecteur: number = 1;
  operateur: String = '';
  result: number = 0;
  memorise: number = 0;

  alert(s: String) {
    alert(s);
  }

  constructor(public OperateursService: OperateursService) {}
  lister() {
    return this.OperateursService.listeOperateurs;
  }

  calc(operateur: String) {
    switch (operateur) {
      case this.OperateursService.listeOperateurs[0]:
        this.result = this.op1 + this.op2;
        break;
      case this.OperateursService.listeOperateurs[1]:
        this.result = this.op1 - this.op2;
        break;
      case this.OperateursService.listeOperateurs[2]:
        this.result = this.op1 / this.op2;
        break;
      case this.OperateursService.listeOperateurs[3]:
        this.result = this.op1 * this.op2;
        break;
      default:
        this.result = 0;
        break;
    }
    this.op1 = 0;
    this.op2 = 0;
  }

  memoriser() {
    this.memorise = this.result;
    this.op1 = 0;
    this.op2 = 0;
  }

  chargerMemoire() {
    this.op1 = this.memorise;
    this.op2 = 0;
  }
}
