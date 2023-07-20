

import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  title='Radha';
  fristname:string='Krishna'

// attribute binding

  cols:number=3;
  bdr:number=5;

  // event binding

  constructor(){}

  valueshow(){
    console.log("event binding")
  }

  showdata(){
    alert('Hello Sir');
  }

  // two way binding

  data:string='Sunita';
  data1:string='Sona';

}