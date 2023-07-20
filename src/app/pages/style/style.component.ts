import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})

export class StyleComponent {
  constructor(){}
  users=[
      'Ritu',
       'Sapan',
       'Minu',
       'Sinu'
    ];
    getcsscclass(flag:string){
      let cssclass;
      if(flag=="mode")
      {
        cssclass={
          'two':true,
          'three':true
        }
      }else{
        cssclass={
          'two':false,
          'three':true
        }
      }
      return cssclass;
    }


        /*  Interpolation*/
      empfirstname:string='Subroto';
      emplastname:string='Mahato';
      a:number=10;
      b:number=20;
    }




























  // users=[
  //   'Ritu',
  //   'Sapan',
  //   'Minu',
  //   'Sinu'
  // ];

  
  // constructor(){}
  // people:any[]=[
  //   {
  //   "name":"Dipu",
  //   "Country":'India'
  //   },
  //   {
  //     "name":"Minu",
  //     "Country":'UK'
  //     },
  //     {
  //       "name":"Sinu",
  //       "Country":'USA'
  //       },
  //       {
  //         "name":"Alok",
  //         "Country":'UK'
  //         },
  //         {
  //           "name":"Banty",
  //           "Country":'India'
  //           }
  // ];
  //    getColor(Country){
  //   switch(Country)
  //   {
  //     case 'India':
  //     return 'green';
  //     case 'UK':
  //     return 'greenyellow';
  //     case 'USA':
  //     return 'lightblue';
      
  //   }
  
  // }

