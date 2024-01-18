import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './components/search/search.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContentTimeComponent } from './components/content-time/content-time.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    CardImgComponent,
    HomeComponent,
    ContentTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
