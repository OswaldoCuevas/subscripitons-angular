import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/interfaces/userPayment.interface';
@Component({
  selector: 'app-table-user-payments',
  templateUrl: './table-user-payments.component.html',
  styleUrls: ['../tables.component.scss']
})
export class TableUserPaymentsComponent {
Users!:Array<any>;
userPayment=true;
type:any
month :any
year:any
constructor(private dataService:DataService){
  this.userPayment = true;
  this.printTable({type:"week",year:"",month:""})
}
 printTable(object:any) {
  if(this.userPayment == true){
  this.type  = object.type;
  this.month = object.month;
  this.year  = object.year
  if( this.type  == "week" ){
    this.dataService.getWeeklyCustomerPayments().subscribe(data => {
      this.Users = data;
      console.log(this.Users);
    });
    
  }else{
    this.dataService.getCustomerWhoPaid(this.type, this.year, this.month).subscribe(data => {
      this.Users = data;
      console.log(this.Users);
    });
  }
 
}else {
  this.type  = object.type;
  this.month = object.month;
  this.year  = object.year
  if( this.type  == "week" ){
    this.dataService.getWeeklyCustomerNotPayments().subscribe(data => {
      this.Users = data;
      console.log(this.Users);
    });
    
  }else{
    this.dataService.getCustomerWhoNotPaid(this.type, this.year, this.month).subscribe(data => {
      this.Users = data;
      console.log(this.Users);
    });
  }
}
}
}
