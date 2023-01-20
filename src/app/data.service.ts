import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './interfaces/payment.interface'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:3000/api/"

  constructor(private httpClient:HttpClient) {
   
  }
  getWeeklyPayments() {
    const url = this.url+"weekly_payments/1";
    return this.httpClient.get<Payment[]>(url)
  }
  getWeeklyCustomerPayments() {
    const url = this.url+"weekly_customer_payments/1";
    return this.httpClient.get<Payment[]>(url)
  }
  getWeeklyCustomerNotPayments() {
    const url = this.url+"weekly_customer_not_payments/1";
    return this.httpClient.get<Payment[]>(url)
  }
  getPaymentsGroupedByDays(type:string, year:number, month:number) {
    const url = this.url+"payments_grouped_by_days/1/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month)
  }
  getPaymentsGroupedByMonth(type:string, year:number) {
    const url = this.url+"payments_grouped_by_month/1/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year)
  }
  getCustomerWhoPaid(type:string, year:any, month:any) {
    const url = this.url+"customer_who_paid/1/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month)
  }
  getCustomerWhoNotPaid(type:string, year:any, month:any) {
    const url = this.url+"customer_who_not_paid/1/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month)
  }
  searchPaymentLog(search:any) {
    const url = this.url+"payment_logs/search/1/";
    return this.httpClient.get<Payment[]>(url+search)
  }
  getPaymentLogs() {
    const url = this.url+"payment_logs/manager_list/1";
    return this.httpClient.get<Payment[]>(url)
  }
  getPaymentLog(id:any) {
    const url = this.url+"payment_logs/";
    return this.httpClient.get<Payment[]>(url+id)
  }

  getPayments(id:any) {
    const url = this.url+"payments/";
    return this.httpClient.get<Payment[]>(url+id)
  }
  addPayment(body:any) {
    const url = this.url+"payments";
    return this.httpClient.post(url,body)
  }
  addPaymentLog(body:any){
    const url = this.url+"payment_logs";
    return this.httpClient.post(url,body)
  }
 
  
}
