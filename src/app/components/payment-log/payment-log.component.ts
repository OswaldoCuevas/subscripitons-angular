import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-payment-log',
  templateUrl: './payment-log.component.html',
  styleUrls: ['./payment-log.component.scss']
})
export class PaymentLogComponent  {
  paymentLog !: any;
  payments!:Array<any>
  price!: any;
  price1!: any;
  price3!: any;
  payment_logs_id!:any;

  constructor (private route: ActivatedRoute,private dataService:DataService){
    this.payment_logs_id =this.route.snapshot.paramMap.get('id')
    this.getPaymentLog(this.payment_logs_id);

  };
  date(date:any){
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
    const splitDate = date.split("T");
    date = splitDate[0].split("-");
    const year =  date[0];
    const month:number =  date[1];
    const day =  date[2];
   return ""+day+" de "+ months[month-1] + " del " + year;
 }
 getPaymentLog(id:any){
  this.dataService. getPaymentLog(id).subscribe(data => { 
    this.paymentLog = data[0]
    this.price=this.paymentLog.price
    this.price1=this.paymentLog.price - (this.paymentLog.price *0.4)
    this.price3=this.paymentLog.price - (this.paymentLog.price *0.3)
    
    this.getPayments(id) 
  });
 }
 getPayments(id:any){
  this.dataService. getPayments(id).subscribe(data => { 
    this.payments = data;
  });
 }
addPayment(payment:any,payment_date:any){
  payment=payment.value;
  payment_date=payment_date.value;
  const body ={payment,payment_date,payment_logs_id:this.payment_logs_id}

  this.dataService.addPayment(body).subscribe(data => { 
    swal.fire('', "Registro exitoso...", 'success');
    this.getPayments( this.payment_logs_id);
  });
  
  return false;
}
}
