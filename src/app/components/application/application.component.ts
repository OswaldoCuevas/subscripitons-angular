import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { StatusSubscriptions } from 'src/app/interfaces/StatusSubscriptions.interface';
import { Subscription } from 'src/app/interfaces/Subscription.interface';
import { Application } from 'src/app/interfaces/Application.interface';
import { Payment } from 'src/app/interfaces/Payment.interface';
import { error } from 'jquery';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements AfterViewInit{
  payments_full = 0;
  Application !: Application;
  months:Array<string> = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
  date:Date = new Date();
  year:number =this.date.getFullYear();
  numberMonth:number = this.date.getMonth()
  month:string = this.months[this.numberMonth];
  dateSelected:String =""+this.year+" "+this.month;
  message: string = "Hola Mundo!"
  typeDate !: any;
  application_id !: any;
  userSelected !: any;
  subscriptionSelected !: any;
  PaymentsUser !: Array<Subscription>;
  Payments!: Array<Subscription>;
  StatusSubscriptions !: Array<StatusSubscriptions>;
  // grafica
  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
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

  constructor(private dataService:DataService, private route: ActivatedRoute){
    this.typeDate = "month";
    this.application_id = this.route.snapshot.paramMap.get('id');
    this.reload();
   
   }
  ngAfterViewInit(): void {
    $(".filtrar-chart").children("span").on('click', function(){
      $(".filtrar-chart").children("span").removeClass("active-filter");
      $(this).addClass('active-filter');
  });
  $(".nav-options-user").children("span").on('click', function(){
      $(this).parent('.nav-options-user').children("span").removeClass("active");
      $(this).addClass('active');
  });
  }
   incrementMonth(){
    this.numberMonth++;
    if(this.numberMonth >= 12){
        this.year++;
        this.numberMonth=0;
    }
    this.month = this.months[this.numberMonth];
    this.dateSelected =""+this.year+" "+this.month;
    this.getPayments();
  }
  decreaseMonth(){
    this.numberMonth--;
    if(this.numberMonth < 0){
        this.year--;
        this.numberMonth=11;
        
    }
    this.month = this.months[this.numberMonth];
    this.dateSelected=""+this.year+" "+this.month;
    this.getPayments();
    
  }
  getPayments(){
    switch (this.typeDate){
      case "month": this.getSubscriptionAppForMonth(this.application_id,this.numberMonth + 1,this.year); break;
      case "year": this.getSubscriptionAppForYear(this.application_id,this.year); break;
      case "all": this.getSubscriptionApp(this.application_id); break
    }
   
  }
  changeTypeDate(type:string){
  this.typeDate = type;
  this.getPayments();
  }
  showPopup(id:string) {   
    $("#"+id).css("display","flex");  
 
  }
  
  // Cerrar la ventana emergente
 closePopup(id:string) {
    $("#"+id).css("display","none");  
  }
  showPaymentsUser(id_user:any,id_application:any) { 
    this.dataService.getSubscriptionsUserApp(id_user,id_application).subscribe(data => {
      this.PaymentsUser = data;
    })
    $("#info").css("display","flex");  

  }
  
  // Cerrar la ventana emergente
 closePaymentsUser(id_user:any) {
  $("#info").css("display","none");  
  }
  getStatusSubscriptions(id:any){
    this.dataService.getStatusSubscriptions(id).subscribe(data => {
      this.StatusSubscriptions = data;
    });
  }
  getSubscriptionAppForMonth(id_application:any, month:any, year:any) {
    this.dataService.getSubscriptionAppForMonth(id_application, month, year).subscribe(data => {
      this.Payments = data;
    });
    this.getPaymentsMonth(this.application_id,this.numberMonth + 1,this.year); 
  }
  getSubscriptionAppForYear(id_application:any,  year:any) {
    this.dataService.getSubscriptionAppForYear(id_application, year).subscribe(data => {
      this.Payments = data;
    });
    this.getPaymentsYear(this.application_id,this.year); 
  }
  getSubscriptionApp(id_application:any) {
    this.dataService.getSubscriptionApp(id_application).subscribe(data => {
      this.Payments = data;
      
    });
    this.getPaymentsAll(this.application_id); 

  }
  getPaymentsMonth(id_application:any, month:any, year:any){
    
    this.dataService.getPaymentsMonth(id_application, month, year).subscribe(data => {
      this.printGraph(data)
      
    }) ;
   
  }
  getPaymentsYear(id_application:any, year:any){
    
    this.dataService.getPaymentsYear(id_application,year).subscribe(data => {
      this.printGraph(data)
      
    }) ;
  }
  getPaymentsAll(id_application:any){
    
    this.dataService.getPayments(id_application).subscribe(data => {
      this.printGraph(data)
      
    }) ;
  }
  formatDate(dateString:string){
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours() + 1;
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours > 12 ? hours - 12 : hours;
    const hoursText = hours12.toString().padStart(2, "0");
    const minutesText = minutes.toString().padStart(2, "0");
    return`${day}/${months[date.getMonth()]}/${year} a las ${hoursText}:${minutesText} ${amOrPm}`;
    
    
  }
  getApplication(id:any) {
    this.dataService.getapplication(id).subscribe(data =>  
      {
        this.Application = data[0]
      }
      )
  }
  printGraph(data: Array<Payment>){
    this.payments_full=0;
    const payments = data.map( payment => {
      this.payments_full += payment.payments;
      return payment.payments
    })
    const amount = data.map( payment => {
      return payment.number_payments;
    })
    const labels = data.map( payment => {
      return payment.day;
    })
    this.lineChartData.datasets[0].data = payments
    this.lineChartData.datasets[1].data = amount
    this.lineChartData.labels = labels
    this.chart?.update();
  }
  showActive(id:any){
    this.userSelected = id;
    this.showPopup("Active"); 
  }
  
  ActiveSubscription(){

    const id_application = this.application_id;
    const id_user = this.userSelected;
    this.dataService.addSubscription({id_user,id_application}).subscribe(data => {
    this.reload();
    this.closePopup("Active");
    })
 
  }
  executeCancel(){
    $("#message-cancel").hide();
    $(".status-progress").show();
    $(".progress-bar").show();
    $("#btn-cancel").hide();
    $(".close").prop('disabled', true);
    let count = 1; // inicializa el contador en 1
    $("#cancelNot").show();
   
const intervalId = setInterval(() => {
  count++; // incrementa el contador en 1
  
  $(".progress-bar-loading").css("width",count+"%")
  if (count > 100) {
   
    this.closeCancel()
    this.dataService.deleteSubscriptionsUserActive(this.userSelected,this.application_id).subscribe(data => {
      this.reload();
    })
    clearInterval(intervalId); // detiene el ciclo después de 10 segundos
  }
}, 30); // establece un intervalo de 1000ms (1 segundo)
$("#cancelNot").on('click', function(){
  clearInterval(intervalId);
  $("#message-cancel").hide();
  $("#btn-cancel").hide();
  $(".load-danger").show();
  $("#closeWindow").show();
  $("#cancelNot").hide();
  $(".status-progress").hide();
    $(".progress-bar").hide();
});
  }
  cleanCancel(){
    $("#message-cancel").show();
    $("#btn-cancel").show();
    $(".status-progress").hide();
    $(".progress-bar").hide();
    $(".progress-bar-loading").css("width","0%")
    $(".close").prop('disabled', false);
    $(".load-success").hide();
    $(".load-danger").hide();
    $("#cancelNot").hide();
    $("#closeWindow").hide();
  }
  showCancel(id:any){
    this.userSelected = id;
    this.showPopup("Cancel");
    this.cleanCancel();
  }
 
  closeCancel(){
    this.closePopup("Cancel");
  }
  reload(){
    this.getStatusSubscriptions(this.application_id)
    this.getApplication(this.application_id);
    this.getPayments();
  }
}
