import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
//graficos
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

//date picker
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

//server
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { TablesComponent } from './components/tables/tables.component';
import { TableUserPaymentsComponent } from './components/tables/table-user-payments/table-user-payments.component';
import { PaymentsLogsComponent } from './components/payments-logs/payments-logs.component';
import { TablePaymentLogsComponent } from './components/tables/table-payment-logs/table-payment-logs.component';
import { AddPaymentLogComponent } from './components/add-payment-log/add-payment-log.component';
import { UpdatePaymentLogComponent } from './components/update-payment-log/update-payment-log.component';
import { PaymentLogComponent } from './components/payment-log/payment-log.component';
const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'payments-logs', component:PaymentsLogsComponent},
  {path:'payments-log/:id', component:PaymentLogComponent},
  {path:'addpayments-log', component:AddPaymentLogComponent},
  {path:'updatepayments-log', component:UpdatePaymentLogComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChartComponent,
    TablesComponent,
    TableUserPaymentsComponent,
    PaymentsLogsComponent,
    TablePaymentLogsComponent,
    AddPaymentLogComponent,
    UpdatePaymentLogComponent,
    PaymentLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
