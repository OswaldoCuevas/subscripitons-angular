import { Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TablePaymentLogsComponent } from '../tables/table-payment-logs/table-payment-logs.component'
@Component({
  selector: 'app-payments-logs',
  templateUrl: './payments-logs.component.html',
  styleUrls: ['./payments-logs.component.scss']
})
export class PaymentsLogsComponent {
  @ViewChild( TablePaymentLogsComponent) child: any;
  paymentLogs !: Array<any>;
  constructor(private dataService:DataService){
this.getPaymentLogs()
   }
   getPaymentLogs(){
    this.dataService.getPaymentLogs().subscribe(data => { 
      this.child.printTable(data);
    });
   }
   searchPaymentLogs(search : any){
    this.dataService.searchPaymentLog(search).subscribe(data => { 
      this.child.printTable(data);
    });
   }
   keyFunc(input:any){
    const value = input.target.value
   if(value != ""){
    this.searchPaymentLogs(value)
   }else{
    this.getPaymentLogs()
   }
   }
}
