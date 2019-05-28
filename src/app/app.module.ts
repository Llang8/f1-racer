import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RacerComponent } from './racer/racer.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RacerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
