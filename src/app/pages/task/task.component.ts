import { Component } from '@angular/core';
interface User{
  name: string,
  price:number,
  description:string,
  url:string
  
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  user ?:User;
 people :Array<User> = [
    {
      name: 'Asit',
      price:38000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img1.jpg")
      
  
    },
    {
      name: 'Sonal',
      price:18000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img2.jpg")
    },
    {
      name: 'Sai',
      price:16000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img3.jpg")
    },
    {
      name: 'Ravi',
      price:20000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img4.jpg")
      },
    {
      name: 'Sona',
      price:22000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img5.jpg")
    },
    {
      name: 'Mona',
      price:16000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img6.jpg")
    },
    {
      name: 'Rakhi',
      price:27000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img7.jpg")
    },
    {
      name: 'Rani',
      price:19000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img8.jpg")
    },
    {
      name: 'Ram',
      price:22000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img9.jpg")
    },
    {
      name: 'Sita',
      price:35000,
      description:'There are many variations of passages of Lorem',
      url:("/assets/img/img10.jpg")
    }
  ];
  getPerson(person:any){
console.log(person);
this.user=person;

  }
  
    

}
  

  



