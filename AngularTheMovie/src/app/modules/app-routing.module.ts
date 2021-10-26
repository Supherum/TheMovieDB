import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from '../components/actor-list/actor-list.component';
import { MoviesPopularListComponentComponent } from '../components/movies-popular-list-component/movies-popular-list-component.component';

const routes: Routes = [
  {path:'popular',component: MoviesPopularListComponentComponent },
  {path:'person',component:ActorListComponent},
  {path:'**', redirectTo:'popular'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
