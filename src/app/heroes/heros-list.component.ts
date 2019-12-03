import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroesList:any=[
    {
      'heroId':'101',
      'heroName':'SuperMan',
      'heroGender':'male',
      'heroProduction':'DC'
    },
    {
      'heroId':'102',
      'heroName':'Wonder Women',
      'heroGender':'female',
      'heroProduction':'DC'
    },
    {
      'heroId':'103',
      'heroName':'BatMan',
      'heroGender':'male',
      'heroProduction':'DC'
    },
    {
      'heroId':'104',
      'heroName':'SpiderMan',
      'heroGender':'male',
      'heroProduction':'Marvel'
    },
    {
      'heroId':'105',
      'heroName':'Captain America',
      'heroGender':'male',
      'heroProduction':'Marvel'
    },
    {
      'heroId':'106',
      'heroName':'Iron Man',
      'heroGender':'male',
      'heroProduction':'Marvel'
    },
    {
      'heroId':'107',
      'heroName':'Hulk',
      'heroGender':'male',
      'heroProduction':'Marvel'
    },
    {
      'heroId':'108',
      'heroName':'Captain Marvel',
      'heroGender':'female',
      'heroProduction':'Marvel'
    },
    {
      'heroId':'109',
      'heroName':'Thanos',
      'heroGender':'male',
      'heroProduction':'Marvel'
    },
    {
      'heroId':'110',
      'heroName':'Helena',
      'heroGender':'female',
      'heroProduction':'Marvel'
    },
  ];

  public heroObj;

  onHeroSelect(heroObj:any){
    this.heroObj=heroObj;
    console.log("I m clicked : "+heroObj.heroId+" "+heroObj.heroName);
  }

  isSerachFound=false;
  searchHero(){
    this.isSerachFound=true
    console.log("i m here"+this.isSerachFound);
  }
}
