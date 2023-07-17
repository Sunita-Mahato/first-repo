import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelsets1',
  templateUrl: './ifelsets1.component.html',
  styleUrls: ['./ifelsets1.component.scss']
  
})
export class Ifelsets1Component {
  isvalid:boolean=true;
  changevalue(valid:any){
    this.isvalid=valid;
  }

}
