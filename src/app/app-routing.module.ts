import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosDetailsComponent } from './heroes/heros-details.component';
import { HerosListComponent } from './heroes/heros-list.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
{path:'',redirectTo:'/Home',pathMatch:'full'},

{path:'Hero',component:HerosDetailsComponent},
{path:'Hero/:heros-list',component:HerosListComponent},

//if any other page which is not defined thn this page will open
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
HerosDetailsComponent,
HerosListComponent,
  PageNotFoundComponent
];