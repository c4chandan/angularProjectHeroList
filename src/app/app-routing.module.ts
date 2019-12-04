import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosDetailsComponent } from './heroes/heros-details.component';
import { HerosListComponent } from './heroes/heros-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';


const routes: Routes = [
{path:'',redirectTo:'/Home',pathMatch:'full'},


{path:'Hero/:heros-list',component:HerosListComponent},
{path:'employee/:employee-list',component:EmployeeListComponent},
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
EmployeeDetailsComponent,
EmployeeListComponent,
  PageNotFoundComponent
];