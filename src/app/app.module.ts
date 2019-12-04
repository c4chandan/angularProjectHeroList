import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHeroComponent } from './heroes/search-hero.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
// import { HerosDetailsComponent } from './heroes/heros-details.component';
// import { HerosListComponent } from './heroes/heros-list.component';
// import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // HerosDetailsComponent,
    // HerosListComponent,
    // PageNotFoundComponent
    routingComponent,
    SearchHeroComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
