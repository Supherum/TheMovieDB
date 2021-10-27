import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from '../components/actor-list/actor-list.component';
import { MoviesPopularListComponentComponent } from '../components/movies-popular-list-component/movies-popular-list-component.component';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';

const routes: Routes = [
  {path:'popular',component: MoviesPopularListComponentComponent },
  {path:'person',component:ActorListComponent},
  {path:'menu',component:SideMenuComponent},
  {path:'**', redirectTo:'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
