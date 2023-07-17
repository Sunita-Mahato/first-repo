import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})

export class StyleComponent {
  
  constructor(){}
  people:any[]=[
    {
    "name":"Dipu",
    "Country":'India'
    },
    {
      "name":"Minu",
      "Country":'UK'
      },
      {
        "name":"Sinu",
        "Country":'USA'
        },
        {
          "name":"Alok",
          "Country":'UK'
          },
          {
            "name":"Banty",
            "Country":'India'
            }
  ];
     getColor(Country){
    switch(Country)
    {
      case 'India':
      return 'green';
      case 'UK':
      return 'greenyellow';
      case 'USA':
      return 'lightblue';
      
    }
  
  }
}
