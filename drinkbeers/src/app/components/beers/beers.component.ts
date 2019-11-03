import { Component, OnInit } from '@angular/core';
import { BEERS } from '../../mock-beers';
import { Beer } from 'src/app/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers = BEERS;
  selectedBeer: Beer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

}
