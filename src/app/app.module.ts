import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
//graficos
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

//date picker
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LineChartComponent } from './components/line-chart/line-chart.component';

//server
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PermissionsGuard} from './permissions.guard';
import { ApplicationComponent } from './components/application/application.component'
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',  component: HomeComponent},
  {path:'login',  component:LoginComponent},
  {path:'application/:id',  component:ApplicationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    LoginComponent,
    HomeComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  
  
})
export class AppModule {
  
 }
