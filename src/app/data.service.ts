import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Payment } from './interfaces/payment.interface'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:3000/api/"
  headers= new HttpHeaders({'content-type':'application/json','Access-Control-Allow-Origin': '*','Authorization':"Bearer "+localStorage.getItem("token")})
 

  constructor(private httpClient:HttpClient) {
  }
  getWeeklyPayments() {
    const url = this.url+"weekly_payments";
    return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  }
  getWeeklyCustomerPayments() {
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2Nzc1MjQ0NjV9.5wm2rRdGEsI6L4u6IWjYE4m2allm0K1OBRE1ZDxreSw");
    const url = this.url+"weekly_customer_payments";
    return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  }
  getWeeklyCustomerNotPayments() {
    const url = this.url+"weekly_customer_not_payments";
    return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  }
  getPaymentsGroupedByDays(type:string, year:number, month:number) {
    const url = this.url+"payments_grouped_by_days/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month,{headers:this.headers})
  }
  getPaymentsGroupedByMonth(type:string, year:number) {
    const url = this.url+"payments_grouped_by_month/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year,{headers:this.headers})
  }
  getCustomerWhoPaid(type:string, year:any, month:any) {
    const url = this.url+"customer_who_paid/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month,{headers:this.headers})
  }
  getCustomerWhoNotPaid(type:string, year:any, month:any) {
    const url = this.url+"customer_who_not_paid/";
    return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month,{headers:this.headers})
  }
  searchPaymentLog(search:any) {
    const url = this.url+"payment_logs/search/";
    return this.httpClient.get<Payment[]>(url+search,{headers:this.headers})
  }
  getPaymentLogs() {
    const url = this.url+"payment_logs";
    return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  }
  getPaymentLog(id:any) {
    const url = this.url+"payment_logs/";
    return this.httpClient.get<Payment[]>(url+id,{headers:this.headers})
  }

  getPayments(id:any) {
    const url = this.url+"payments/";
    return this.httpClient.get<Payment[]>(url+id,{headers:this.headers})
  }
  addPayment(body:any) {
    const url = this.url+"payments";
    return this.httpClient.post(url,body,{headers:this.headers})
  }
  addPaymentLog(body:any){
    const url = this.url+"payment_logs";
    return this.httpClient.post(url,body,{headers:this.headers})
  }
  deletePaymentLog(id:any){
    const url = this.url+"payment_logs/"+id;
    return this.httpClient.delete(url,{headers:this.headers})
  }
 
  
}
