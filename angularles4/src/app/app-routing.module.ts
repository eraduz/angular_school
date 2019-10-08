import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';
import { MoviesComponent } from './movies/movies.component';
import { SchoolComponent } from './school/school.component';
import { WorkComponent } from './work/work.component';
import { FavmovieComponent } from './favmovie/favmovie.component';

const routes: Routes = [
  {
    path: 'me',
    component: MeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
  path: 'school',
  component: SchoolComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'favmovies',
    component: FavmovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
