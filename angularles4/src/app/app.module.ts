import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';
import { SchoolComponent } from './school/school.component';
import { MoviesComponent } from './movies/movies.component';
import { WorkComponent } from './work/work.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FavmovieComponent } from './favmovie/favmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    SchoolComponent,
    MoviesComponent,
    WorkComponent,
    SidebarComponent,
    FavmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
