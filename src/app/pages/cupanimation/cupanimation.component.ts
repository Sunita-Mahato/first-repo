import { Component } from '@angular/core';

@Component({
  selector: 'app-cupanimation',
  templateUrl: './cupanimation.component.html',
  styleUrls: ['./cupanimation.component.scss']
})
export class CupanimationComponent {
  Cdata:any;
  getdata(val:any){
    this.Cdata=val;

  }

}
