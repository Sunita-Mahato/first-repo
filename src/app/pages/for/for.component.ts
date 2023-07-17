import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent {
  constructor(){
  }
countrydetails:any[]=[
  {
'country':'India',
'people':[
  {
    "name":"Samir Kumar"
  },
  {
    "name":"Sunita Mahato"
  },
  {
    "name":"Asit Kumar Mahato"
  }
]
},
{
  'country':'UK',
  'people':[
    {
      "name":" Robin Mahato"
    },
    {
      "name":"Saheera Mahato"
    },
    {
      "name":"Sapan Kumar Mahato"
    }
  ]
  }
];
}

  





















  //students:any[];
  // constructor(){
  //   this.students=[
  //     {
  //       studentid:1,
  //       name:'Saheera',
  //       gender:'Female',
  //       course:'MCA'
  //     },

  //     {
  //       studentid:2,
  //       name:'Robin',
  //       gender:'Male',
  //       course:'MCA'
  //     },

  //     {
  //       studentid:3,
  //       name:'Anterjeet',
  //       gender:'Male',
  //       course:'BCA'
  //     },

  //     {
  //       studentid:4,
  //       name:'Vivek',
  //       gender:'Male',
  //       course:'BCA'
  //     }
  //   ];
  // }
  // getmorestudents():void{
  //   this.students=[
  //     {
  //       studentid:1,
  //       name:'Saheera',
  //       gender:'Female',
  //       course:'MCA'
  //     },

  //     {
  //       studentid:2,
  //       name:'Robin',
  //       gender:'Male',
  //       course:'MCA'
  //     },

  //     {
  //       studentid:3,
  //       name:'Anterjeet',
  //       gender:'Male',
  //       course:'BCA'
  //     },

  //     {
  //       studentid:4,
  //       name:'Vivek',
  //       gender:'Male',
  //       course:'BCA'
  //     },
  //     {
  //       studentid:5,
  //       name:'Neha',
  //       gender:'Female',
  //       course:'BCA'
  //     }
  //   ];

  // }
  // trackbystudentid(index:number,student:any):string{
  //   return student.studentid;
  // }




  
    
  
    
      
 


//Students:any[]=[
 // {
   // 'name': 'Sunita Mahato'
  //},
  //{
   // 'name': 'Asit Kumar Mahato'
 // },
  //{
   // 'name': 'Alok Mahato'
  //},
  //{
    //'name': 'Sunita Mahato'
 // }
//];

