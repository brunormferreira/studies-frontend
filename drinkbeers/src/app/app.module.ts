import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeersComponent } from './components/beers/beers.component';
import { BeersDetailComponent } from './components/beers/beers-detail/beers-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeersDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
