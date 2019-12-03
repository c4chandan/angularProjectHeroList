import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {

  @Input() public selectedHero;
  constructor() { }

  ngOnInit() {
  }

}
