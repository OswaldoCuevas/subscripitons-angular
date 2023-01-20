import { Component,Output, EventEmitter, ViewChild  } from '@angular/core';
import { Data } from '@angular/router';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Payment } from 'src/app/interfaces/payment.interface';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {
  //variables
  payments_full = 0;
  months:Array<string> = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
  date:Date = new Date();
  year:number =this.date.getFullYear();
  numberMonth:number = this.date.getMonth()
  month:string = this.months[this.numberMonth];
  dateSelected:String =""+this.year+" "+this.month;
  message: string = "Hola Mundo!"
  typeDate = "week";
  constructor(private dataService:DataService){
   this.typeDate = "week"
   this.getData()
  }


  @Output() messageEvent = new EventEmitter<object>();

 
  // grafica
  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Monto',
        backgroundColor: 'rgba(54, 223, 59,0.1)',
        borderColor: 'rgba(54, 223, 59,1)',
        pointBackgroundColor: 'rgba(54, 223, 59,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 223, 59,0.8)',
        fill: 'origin',
      },
      {
        
      
        data: [ 1, 4, 7, 9, 10, 7, 4 ],
        label: 'Cantidad',
        yAxisID: 'y1',
        backgroundColor: 'rgb(148,159,177,0.2)',
        borderColor: 'rgba(115, 143, 223,1)',
        pointBackgroundColor: 'rgba(115, 143, 223,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(115, 143, 223,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
 // Eventos de activar
 clicked = (event:any) => {
  var elementos:any= document.getElementsByClassName("option-dates");
  for(const element of elementos) {
    element.className = "option-dates";
  }

  event.target.classList.add('active-filter'); // To ADD
  this.getWeeklyPayments()
  this.typeDate = event.target.id
  this.getData()
}
// mostrar fecha
incrementMonth(){
  this.numberMonth++;
  if(this.numberMonth >= 12){
      this.year++;
      this.numberMonth=0;
  }
  this.month = this.months[this.numberMonth];
  this.dateSelected =""+this.year+" "+this.month;
  this.getData()
}
decreaseMonth(){
  this.numberMonth--;
  if(this.numberMonth < 0){
      this.year--;
      this.numberMonth=11;
      
  }
  this.month = this.months[this.numberMonth];
  this.dateSelected=""+this.year+" "+this.month;
  this.getData()
  
}


//recibir datos del server
getData(){
if(this.typeDate == "week"){
  this.getWeeklyPayments()
}else{
  this.getPaymentsGroupedByDays()
}
this.messageEvent.emit({type:this.typeDate,month:this.numberMonth,year:this.year})
}
//imprimir grafica con datos del server
getWeeklyPayments(){
  this.dataService.getWeeklyPayments().subscribe(data => {
    this.printGraph(data)
  });
}
getPaymentsGroupedByDays(){
  this.dataService.getPaymentsGroupedByDays(this.typeDate, this.year, this.numberMonth).subscribe(data => {
    this.printGraph(data)
  });
}
printGraph(data: Array<Payment> ){
  this.payments_full=0;
  const payments = data.map( payment => {
    this.payments_full += payment.full_payment
    return payment.full_payment
  })
  const amount = data.map( payment => {
    return payment.amount_of_payments;
  })
  const labels = data.map( payment => {
    return payment._day;
  })
  this.lineChartData.datasets[0].data = payments
  this.lineChartData.datasets[1].data = amount
  this.lineChartData.labels = labels
  this.chart?.update();
}
}

