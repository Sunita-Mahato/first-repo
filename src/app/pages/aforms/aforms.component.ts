import { Component } from '@angular/core';

@Component({
  selector: 'app-aforms',
  templateUrl: './aforms.component.html',
  styleUrls: ['./aforms.component.scss']
})
export class AformsComponent {
  onSubmit(){
    console.log('Submitted')
  }
}
