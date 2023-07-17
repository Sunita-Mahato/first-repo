import { Component } from '@angular/core';

@Component({
  selector: 'app-basicts',
  templateUrl: './basicts.component.html',
  styleUrls: ['./basicts.component.scss']
})
export class BasictsComponent {
  /*public name:string;
  public email="abc@.com"
  public constructor(){
    this.name="";
    if(this.name){
      console.log(this.name);
    }
    else{
      console.log("name is empty")
    }
  }

  public valueChange(){
    console.log(this.email);
    this.email="def@gmail.com"
    console.log(this.email);
  }*/
  
  /*public color="green";
  public bgColor="yellow";

  public colorChange(){
  this.color="yellow";
  this.bgColor="green";

  }*/
  public color="red";
  public bgColor="grey";
  public mainDiv="blue"
  public text='red';

  public moveColor(){
    this.color="grey"
    this.bgColor="red"
    this.mainDiv="blue";
    this.text='grey'  }
}
