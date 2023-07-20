import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
   // pipes
   cols:number=4;
   bdr:number=5;
 
   employees:any[]=[
    {
      code:'emp001',
      name:'Asit',
      salary:85000,
      dob:'31/Oct/1990'
    },
    {
      code:'emp002',
      name:'Samir',
      salary:120000,
      dob:'07/Feb/1987'
    },
    {
      code:'emp003',
      name:'Subroto',
      salary:60000,
      dob:'20/Nov/1989'
    },
    {
      code:'emp004',
      name:'Alok',
      salary:90000,
      dob:'28/Oct/1982'
    },
    {
      code:'emp005',
      name:'Sunita',
      salary:95000,
      dob:'21/Dec/1988'
    }
  ];


// Parameter pipes

dob=new Date (1997,11,21);
salary:number=120000


// Chaining Pipes

// Pipes with string

name:string="Minu";
position:string="Software Developer";
work:string="Software Developer";


// date,percent,decimal,currency

currentdate=new Date();
mynumber:number=0.14589236;


// json pipe

public employees1=[{
  "id":1,"name":"Sunita Mahato"
},
{
  "id":2,"name":"Sapna Mahato"
},
{
  "id":3,"name":"Sneha Mahato"
},
{
  "id":4,"name":"Anu Mahato"
},
{
  "id":5,"name":"kriti Mahato"
}
];


// Custom pipe

employees2:any=[{
  code:'001',name:'Samir',gender:'male',salary:80000
},
{
  code:'002',name:'Sunita',gender:'feale',salary:75000
},
{
  code:'003',name:'Asit',gender:'male',salary:60000
},
{
  code:'004',name:'Alok',gender:'male',salary:55000 
},
{
  code:'005',name:'Subroto',gender:'male',salary:50000
},
];
}






 






