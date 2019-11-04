import { Injectable } from '@angular/core';
import { Beer } from '../beer';
import { BEERS } from '../mock-beers';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  getBeers(): Beer[] {
    return BEERS;
  }
}
