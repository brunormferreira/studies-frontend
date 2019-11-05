import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { Beer } from '../beer';
import { BEERS } from '../mock-beers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private messageService: MessageService) { }

  getBeers(): Observable<Beer[]> {
    this.messageService.add('BeerService: fetched beers');
    return of(BEERS);
  }

  getBeer(id: number): Observable<Beer> {
    this.messageService.add(`BeerService: fetched beer id=${id}`);
    return of(BEERS.find(beer => beer.id === id));
  }
}
