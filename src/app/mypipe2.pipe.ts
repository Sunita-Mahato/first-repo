import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe2'
})
export class MypipePipe2 implements PipeTransform {

  transform(value: any):string {
    if(value)
    return '<i class="fa-solid fa-check tick"></i>';
    else
    return '<i class="fa-solid fa-xmark cross"></i>'; 
  }

}