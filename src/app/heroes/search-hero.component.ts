import { Component, OnInit,  Output } from '@angular/core';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: []
})
export class SearchHeroComponent implements OnInit {

  @Output() public isSerachFound:boolean;
  
  
  constructor() { }

  ngOnInit() {
  }

}
