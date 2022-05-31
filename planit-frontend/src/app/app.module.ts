import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';


import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingCodeInputComponent } from './components/landing-code-input/landing-code-input.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingCodeInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,

	MatCardModule,
	MatGridListModule,
	MatButtonModule,
	MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
