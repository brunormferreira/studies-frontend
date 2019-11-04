import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/beer';

@Component({
  selector: 'app-beers-detail',
  templateUrl: './beers-detail.component.html',
  styleUrls: ['./beers-detail.component.css']
})
export class BeersDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
