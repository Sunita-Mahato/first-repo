import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ifelsets',
  templateUrl: './ifelsets.component.html',
  styleUrls: ['./ifelsets.component.scss'],
  preserveWhitespaces: true,
  //inputs:['Pdata']
  outputs:['childevent']

})

export class IfelsetsComponent {
 // Pdata:any;
 childevent=new EventEmitter();

 onchange(val:any){
  //console.log(val);
  this.childevent.emit(val);
 }


name='if else condition';


public show=true




public moveWord(){
  this.show=false 
}


}




