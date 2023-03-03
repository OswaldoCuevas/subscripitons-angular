import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import swal from'sweetalert2';
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
  constructor(private dataService:DataService){

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
  delete(id:any,nombre:any,numero:any){
    swal.fire({
      title: 'Seguro que deseas eliminar la tarjeta de <br><h3>'+ nombre +'</h3>',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.dataService.deletePaymentLog(id).subscribe(data => { 
          this.paymentLogs = this.paymentLogs.filter(paymentLog => paymentLog.payment_logs_id != id);
          swal.fire('Eliminado!', '', 'success')
        });
      } else if (result.isDenied) {
        swal.fire('No se eliminó el registro', '', 'info')
      }
    })
    
  }
}
