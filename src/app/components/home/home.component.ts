import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { TableUserPaymentsComponent } from '../tables/table-user-payments/table-user-payments.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(TableUserPaymentsComponent) child: any;

  @Input() messageEventTable = new EventEmitter<string>();
  
  object={"type":"week","year":"","month":""};
  constructor(){
  
  }
  receiveMessage(object: any) {
    this.object = object;
    this.child.printTable(object);
  }

  payments = (event:any) => {
    this.child.userPayment = true
    this.clicked (event)
  }
  notPayments = (event:any) => {
    this.child.userPayment = false
    this.clicked (event)
  }
  clicked = (event: any) => {
    var elementos:any= document.getElementsByClassName("option");
    for(const element of elementos) {
      element.className = "option";
    }
    event.target.classList.add('active'); // To ADD
    this.child.printTable(this.object);
  }
}
