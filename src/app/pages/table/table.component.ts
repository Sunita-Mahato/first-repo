import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  data:any=[
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:true,
      isBasic:true,
      isBusiness:true,
      isPremium:true,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:true,
      isBasic:true,
      isBusiness:true,
      isPremium:true,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:false,
      isBasic:true,
      isBusiness:true,
      isPremium:true,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:false,
      isBasic:false,
      isBusiness:true,
      isPremium:true,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:false,
      isBasic:false,
      isBusiness:false,
      isPremium:true,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:false,
      isBasic:false,
      isBusiness:false,
      isPremium:true,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:false,
      isBasic:false,
      isBusiness:false,
      isPremium:false,
      isPro:true,
    },
    {
      pricing: 'There are many variations of passages of Lorem',
      isStarted:false,
      isBasic:false,
      isBusiness:false,
      isPremium:false,
      isPro:true,
    },
    
    
  ];

}
