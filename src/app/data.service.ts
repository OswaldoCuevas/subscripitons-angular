import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { StatusSubscriptions } from './interfaces/StatusSubscriptions.interface';
import { Application } from './interfaces/Application.interface';
import { Subscription } from './interfaces/Subscription.interface';
import { Payment } from './interfaces/Payment.interface';
// import { Payment } from './interfaces/payment.interface'
// import { PaymentLog } from './interfaces/paymentLog.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   url:string="http://localhost:3000/api/"
   

 dailyPayments = [
    {
      day: '2023-04-20',
      payments: 100.50,
      number_payments: 5,
      payment_date: new Date()
    },
    {
      day: '2023-04-19',
      payments: 80.25,
      number_payments: 4,
      payment_date: new Date()
    },
    {
      day: '2023-04-18',
      payments: 75.50,
      number_payments: 3,
      payment_date: new Date()
    },
    {
      day: '2023-04-17',
      payments: 50.75,
      number_payments: 2,
      payment_date: new Date()
    },
    {
      day: '2023-04-16',
      payments: 25.00,
      number_payments: 1,
      payment_date: new Date()
    }
  ];
  statusSubscriptions:Array<StatusSubscriptions> = [
    {
      id: 1,
      id_application: 2,
      date_start: new Date(),
      date_ending: new Date('2023-05-21'),
      payment: 50.00,
      active: true,
      id_user: 1,
      username: 'jdoe',
      max_date_ending: new Date('2023-05-21'),
      days_remaining: 30,
      status: 'Activo'
    },
    {
      id: 2,
      id_application: 3,
      date_start: new Date(),
      date_ending: new Date('2023-05-05'),
      payment: 20.00,
      active: true,
      id_user: 2,
      username: 'jsmith',
      max_date_ending: new Date('2023-05-05'),
      days_remaining: 14,
      status: 'Vencido'
    },
    {
      id: 3,
      id_application: 1,
      date_start: new Date(),
      date_ending: new Date('2023-06-01'),
      payment: 100.00,
      active: true,
      id_user: 3,
      username: 'jkim',
      max_date_ending: new Date('2023-06-01'),
      days_remaining: 40,
      status: 'Activo'
    },
    {
      id: 4,
      id_application: 2,
      date_start: new Date(),
      date_ending: new Date('2023-04-30'),
      payment: 30.00,
      active: false,
      id_user: 4,
      username: 'jlee',
      max_date_ending: new Date('2023-12-30'),
      days_remaining: 0,
      status: 'Suspendido'
    },
    {
      id: 5,
      id_application: 3,
      date_start: new Date(),
      date_ending: new Date('2023-05-10'),
      payment: 15.00,
      active: true,
      id_user: 5,
      username: 'jchoi',
      max_date_ending: new Date('2023-05-10'),
      days_remaining: 19,
      status: 'Activo'
    }
  ];
  administrators= [
    {
      id: 1,
      username: 'admin1',
      password: 'password1',
      type: 'superuser'
    },
    {
      id: 2,
      username: 'admin2',
      password: 'password2',
      type: 'regular'
    },
    {
      id: 3,
      username: 'admin3',
      password: 'password3',
      type: 'regular'
    },
    {
      id: 4,
      username: 'admin4',
      password: 'password4',
      type: 'superuser'
    },
    {
      id: 5,
      username: 'admin5',
      password: 'password5',
      type: 'regular'
    }
  ];
  applications= [
    {
      id: 1,
      code: 'APP001',
      name: 'Application 1',
      price: 50.0,
      url_img: 'https://example.com/img1.png',
      date_create: new Date()
    },
    {
      id: 2,
      code: 'APP002',
      name: 'Application 2',
      price: 75.5,
      url_img: 'https://example.com/img2.png',
      date_create: new Date()
    },
    {
      id: 3,
      code: 'APP003',
      name: 'Application 3',
      price: 100.0,
      url_img: 'https://example.com/img3.png',
      date_create: new Date()
    },
    {
      id: 4,
      code: 'APP004',
      name: 'Application 4',
      price: 150.75,
      url_img: 'https://example.com/img4.png',
      date_create: new Date()
    },
    {
      id: 5,
      code: 'APP005',
      name: 'Application 5',
      price: 200.25,
      url_img: 'https://example.com/img5.png',
      date_create: new Date()
    }
  ];
  users = [
    {
      id: 1,
      username: 'user1',
      password: 'password1',
      token: 'token1'
    },
    {
      id: 2,
      username: 'user2',
      password: 'password2',
      token: 'token2'
    },
    {
      id: 3,
      username: 'user3',
      password: 'password3',
      token: 'token3'
    },
    {
      id: 4,
      username: 'user4',
      password: 'password4',
      token: 'token4'
    },
    {
      id: 5,
      username: 'user5',
      password: 'password5',
      token: 'token5'
    }
  ];
  //----------------------Aplications----------------------------
getapplications(){
  const url = this.url+"applications";
  return this.httpClient.get<Application[]>(url)
}
getapplication(id:any){
  const url = this.url+"applications/"+id;
  return this.httpClient.get<Application[]>(url)
}
addapplication(body:any){
  const headers = new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  });
  const url = this.url+"applications";
  return this.httpClient.post(url,body)
}
updateApplication(id:any,body:any){
 
  const url = this.url+"applications/"+id;
  return this.httpClient.patch(url,body)
}
//----------------------Subscriptions----------------------------
getStatusSubscriptions(id_application : any)  {
  const url = this.url+"subscriptions/status/"+id_application;
  return this.httpClient.get<StatusSubscriptions[]>(url)
}
getSubscriptionsUserApp(id_user : any ,id_application:any) {
  const url = this.url+"subscriptions/"+id_user+"/"+id_application;
  return this.httpClient.get<Subscription[]>(url)
}
deleteSubscriptionsUserActive(id_user : any ,id_application:any) {
  const url = this.url+"subscriptions/active/"+id_user+"/"+id_application;
  return this.httpClient.delete(url)
}
addSubscription(body:any){
  const url = this.url+"subscriptions";
  return this.httpClient.post(url,body)
}
getSubscriptionAppForMonth(id_application:any, month:any, year:any) {
  const url = this.url+"subscriptions/month/"+id_application+"/"+month+"/"+year;
  return this.httpClient.get<Subscription[]>(url)
}
getSubscriptionAppForYear(id_application:any,  year:any) {
  const url = this.url+"subscriptions/year/"+id_application+"/"+year;
  return this.httpClient.get<Subscription[]>(url)
}
getSubscriptionApp(id_application:any) {
  const url = this.url+"subscriptions/"+id_application;
  return this.httpClient.get<Subscription[]>(url)
}

getPaymentsMonth(id_application:any, month:any, year:any) {
  const url = this.url+"subscriptions/daily_payments/month/"+id_application+"/"+month+"/"+year;
  return this.httpClient.get<Payment[]>(url)
}
getPaymentsYear(id_application:any,  year:any) {
  const url = this.url+"subscriptions/daily_payments/year/"+id_application+"/"+year;
  return this.httpClient.get<Payment[]>(url)
}
getPayments(id_application:any) {
  const url = this.url+"subscriptions/daily_payments/all/"+id_application;
  return this.httpClient.get<Payment[]>(url)
}

   constructor(private httpClient:HttpClient) {
   }
  // getToken(){
  //   this.headers = new HttpHeaders({'content-type':'application/json','Access-Control-Allow-Origin': '*','Authorization':"Bearer "+localStorage.getItem("token")})
  // }
 
  // // --------------------------- LOGIN ------------------------
  // login(body:any) {
  //   this.getToken()
  //   const url = this.url+"login";
  //   return this.httpClient.post<{text:any,token:any}>(url,body)
  // }
  // // ------------------------- USER ------------------------
  // addUser(body:any){
  //   const url = this.url+"user";
  //   return this.httpClient.post<{text:any,token:any}>(url,body)
  // }
  // currentUser(){
  //   this.getToken()
  //   const url = this.url+"ping";
  //   return this.httpClient.get(url,{headers:this.headers});
  // }
  // //---------------------------- PAYMENTS ----------------------------
  // getWeeklyPayments() {
  //   this.getToken()
  //   const url = this.url+"weekly_payments";
  //   return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  // }
  // getWeeklyCustomerPayments() {
  //   this.getToken()
  //   const url = this.url+"weekly_customer_payments";
  //   return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  // }
  // getWeeklyCustomerNotPayments() {
  //   this.getToken()
  //   const url = this.url+"weekly_customer_not_payments";
  //   return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  // }
  // getPaymentsGroupedByDays(type:string, year:number, month:number) {
  //   this.getToken()
  //   const url = this.url+"payments_grouped_by_days/"+type+"/"+year+"/"+month;
    
  //   return this.httpClient.get<Payment[]>(url,{headers:this.headers})
  // }
  // getPaymentsGroupedByMonth(type:string, year:number) {
  //   this.getToken()
  //   const url = this.url+"payments_grouped_by_month/";
  //   return this.httpClient.get<Payment[]>(url+type+"/"+year,{headers:this.headers})
  // }
  // getCustomerWhoPaid(type:string, year:any, month:any) {
  //   this.getToken()
  //   const url = this.url+"customer_who_paid/";
  //   return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month,{headers:this.headers})
  // }
  // getCustomerWhoNotPaid(type:string, year:any, month:any) {
  //   this.getToken()
  //   const url = this.url+"customer_who_not_paid/";
  //   return this.httpClient.get<Payment[]>(url+type+"/"+year+"/"+month,{headers:this.headers})
  // }
  // getPayments(id:any) {
  //   this.getToken()
  //   const url = this.url+"payments/";
  //   return this.httpClient.get<Payment[]>(url+id,{headers:this.headers})
  // }
  // addPayment(body:any) {
  //   this.getToken()
  //   const url = this.url+"payments";
  //   return this.httpClient.post(url,body,{headers:this.headers})
  // }
  // deletePayment(id:any) {
  //   this.getToken()
  //   const url = this.url+"payments/";
  //   return this.httpClient.delete<Payment[]>(url+id,{headers:this.headers})
  // }

  // // ----------------------- PAYMENTS LOG ------------------------
  // searchPaymentLog(search:any) {
  //   this.getToken()
  //   const url = this.url+"payment_logs/search/";
  //   return this.httpClient.get<PaymentLog[]>(url+search,{headers:this.headers})
  // }
  // getPaymentLogs() {
  //   this.getToken()
  //   const url = this.url+"payment_logs";
  //   return this.httpClient.get<PaymentLog[]>(url,{headers:this.headers})
  // }
  // getPaymentLog(id:any) {
  //   this.getToken()
  //   const url = this.url+"payment_logs/";
  //   return this.httpClient.get<PaymentLog[]>(url+id,{headers:this.headers})
  // }
  // addPaymentLog(body:any){
  //   this.getToken()
  //   const url = this.url+"payment_logs";
  //   return this.httpClient.post(url,body,{headers:this.headers})
  // }
  // updatePaymentLog(id:any,body:any){
  //   this.getToken()
  //   const url = this.url+"payment_logs/"+id;
  //   return this.httpClient.patch<PaymentLog[]>(url,body,{headers:this.headers})
  // }
  // deletePaymentLog(id:any){
  //   this.getToken()
  //   const url = this.url+"payment_logs/"+id;
  //   return this.httpClient.delete(url,{headers:this.headers})
  // }
 
  
}
