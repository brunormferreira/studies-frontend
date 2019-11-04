import { Component, OnInit } from '@angular/core';

import { Beer } from '../../beer';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  selectedBeer: Beer;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

  getBeers(): void {
    this.beers = this.beerService.getBeers();
  }

}
