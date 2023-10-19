import { Component } from '@angular/core';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html'})
export class InstrumentsComponent  {
  instruments : string [];
  constructor(){
    this.instruments = ["Piano", "Violon", "Oud"];
  }

}
