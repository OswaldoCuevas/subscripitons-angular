import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-add-payment-log',
  templateUrl: './add-payment-log.component.html',
  styleUrls: ['./add-payment-log.component.scss']
})
export class AddPaymentLogComponent {
  constructor (private router:Router, private route: ActivatedRoute,private dataService:DataService){

  };
  addPaymentLog(producto:any, payment_logs_num:any,  customer:any, price:any, product_quantity:any, start_date_payment_logs:any){
    producto = producto.value;
    payment_logs_num = payment_logs_num.value;
    customer = customer.value;
    price = price.value;
    product_quantity = product_quantity.value
    start_date_payment_logs = start_date_payment_logs.value
    const user_id = "1";
    const body = {producto,payment_logs_num,customer,price,product_quantity,start_date_payment_logs,user_id}
    console.log(body)
    this.dataService.addPaymentLog(body).subscribe(data => { 
      swal.fire('', "Registro exitoso...", 'success').then((result) =>{ this.router.navigate(['/payments-logs']);;});
     
    });
    
    return false;
    return false
  }
}
