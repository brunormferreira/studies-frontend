import { Component, OnInit } from '@angular/core';

import { Beer } from 'src/app/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  // To take top 5
  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers.slice(1, 5));
  }

}
