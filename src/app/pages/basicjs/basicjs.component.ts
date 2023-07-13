import { Component } from '@angular/core';

@Component({
  selector: 'app-basicjs',
  templateUrl: './basicjs.component.html',
  styleUrls: ['./basicjs.component.scss']
})
export class BasicjsComponent {
  title='Basic of TypeScript for Angular';
  data:number=20;
  getData(item:number)
  {
    
    
    return item*20;
  }
  getItem()
  {
  this.getData(12)
  }
}



