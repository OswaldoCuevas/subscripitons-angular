import { Component } from '@angular/core';

@Component({
  selector: 'app-table-payment-logs',
  templateUrl: './table-payment-logs.component.html',
  styleUrls: ['./table-payment-logs.component.scss']
})
export class TablePaymentLogsComponent {
  paymentLogs !: Array<any>;
  printTable(paymentLogs : Array<any>){
    this.paymentLogs = paymentLogs;
  }
  date(date:any){
     const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
     const splitDate = date.split("T");
     date = splitDate[0].split("-");
     const year =  date[0];
     const month:number =  date[1];
     const day =  date[2];
    return ""+day+" de "+ months[month-1] + " del " + year;
  }
}
