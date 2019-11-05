import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Beer } from 'src/app/beer';
import { BeerService } from '../../../services/beer.service';

@Component({
  selector: 'app-beers-detail',
  templateUrl: './beers-detail.component.html',
  styleUrls: ['./beers-detail.component.css']
})
export class BeersDetailComponent implements OnInit {
  beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private location: Location) { }

  ngOnInit() {
    this.getBeer();
  }

  getBeer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beerService.getBeer(id)
      .subscribe(beer => this.beer = beer);
  }

  goBack(): void {
    this.location.back();
  }
}
