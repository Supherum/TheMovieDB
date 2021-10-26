import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPopularListComponentComponent } from './components/movies-popular-list-component/movies-popular-list-component.component';
import { MoviesItemComponentComponent } from './components/movies-item-component/movies-item-component.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActorItemComponent } from './actor-item/actor-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponentComponent,
    MoviesItemComponentComponent,
    ActorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
