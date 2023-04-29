import { AfterViewInit, Component } from '@angular/core';
import { data, error } from 'jquery';
import { DataService } from 'src/app/data.service';
import { Application } from 'src/app/interfaces/Application.interface';
import { FormApplication } from 'src/app/interfaces/FormApplication.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit{
     // ------------------ Variable ----------------
      optionCRUD !: string // se usa para poder seleccionar que operacion quiero hacer
      popup =  document.getElementById("alertCRUD") as HTMLElement;   
      selectedFile !: File;
      formData !: FormApplication
      Applications !: Array<Application>;
      idUpdate !: any;
      constructor( private dataService:DataService){
       this.getApplications();
      }
  ngAfterViewInit(): void {
  
    $("input").on("keyup", function(){
      const id = $(this).attr("id");
      $("#"+id+"-error").hide();
      });
      $("input").click(function(e) {
        let id = $(this).attr("id");
        let label = $('label[for="'+id+'"]');
        label.addClass("floating");
        $("input").focusout(function() {
            if($("#"+id).val() == ""){
                label.removeClass("floating");
            }
      });
      })
      $("#btn-logo-app").on('click', function(){
        $("#logo-app").click();
        });
     
  }
  
getApplications() {
  this.dataService.getapplications().subscribe(data =>  
    
    {
      this.Applications = data
    }

    )
}

validity(){
this.cleanError();
let success = true;
console.log($("#logo-app").val());
if($("#logo-app").val() == "" && this.optionCRUD == "Register"){
  $("#logo-app-error").show();
  success = false;
}else{
  if(this.validityPNG() == false){
    $("#logo-app-error2").show();
  success = false;
  }
}
if( $("#price").val() == ""){
  $("#price-error").show();
  success = false;
}
if($("#name").val() == ""){
  $("#name-error").show();
  success = false;
}
if($("#code").val() == ""){
  $("#code-error").show();
  success = false;
}
return success;
}
 submit(logo : any, name : any , price : any, code:any){
  if(this.validity()){
    const formData = new FormData();
    const img = logo.files[0] === undefined ? null : logo.files[0]
    formData.append('logo', img); // 'file' es la variable que contiene la imagen
    formData.append('name', name.value); // 'name' es el nombre de la aplicación
    formData.append('price', price.value); // 'price' es el precio de la aplicación
    formData.append('code', code.value); // 'price' es el precio de la aplicación
  if(this.optionCRUD == "Register"){
    this.dataService.addapplication(formData).subscribe( data => {
      this.getApplications();
    })
  }else{
    this.dataService.updateApplication(this.idUpdate,formData).subscribe(
      data => {
        this.getApplications();
      });
  }
  this.closePopup();
  
}

return false;
}


 validityPNG(){
const inputFile = document.getElementById('logo-app') as HTMLInputElement;
 if(inputFile.files != null ){
  if(inputFile.files.length > 0){
    const file = inputFile.files[0];
    return file.type === 'image/png';
  }else{
    return true;
  }
 }
 return false;


} 
 cleanAll(){
    $("input").val("");
    $("label").removeClass("floating");
    var imagen = $("#img-logo");
    imagen.attr("src", "#");
    $("#logo-app").val("");
    $("#img-logo").hide();
    $("#span-logo").show();
    this.cleanError();
  }
cleanError(){
    $("#logo-app-error").hide();
    $("#logo-app-error2").hide();
    $("#price-error").hide();
    $("#name-error").hide();
    $("#code-error").hide();
  }
   showPopup() {   
 
    $(".popup").css("display", "flex");
   
   }
   // Cierra la ventana emergente
   closePopup() {
    $(".popup").css("display", "none");
   }
  showRegister(){
    this.optionCRUD = "Register";
   $("#title-alert").html("Registrando aplicación");
   this.showPopup();
   this.cleanAll();
  }
  showUpdate(event: any,id:any){
    
    event.stopPropagation();
    this.optionCRUD = "Update";
    this.idUpdate = id;
    $("#title-alert").html("Actualizando aplicación");
    this.cleanAll();

    this.dataService.getapplication(id).subscribe(data => {
      $("#price").val(data[0].price);
      $('label[for="price"]').addClass("floating");
      $("#name").val(data[0].name);
      $('label[for="name"]').addClass("floating");
      $("#code").val(data[0].code);
      $('label[for="code"]').addClass("floating");
      $("#span-logo").hide();
      $("#img-logo").show();
      $("#img-logo").attr("src", data[0].url_img);
    });
    this.showPopup();
  }

 readFile(event:any){
  const imagen = $("#img-logo");
 
  if (this.validityPNG() != false) {
    imagen.attr("src", URL.createObjectURL(event.target.files[0]));
    this.selectedFile = event.target.files[0];
    $("#img-logo").show();
    $("#span-logo").hide();
    $("#logo-app-error").hide();
    $("#logo-app-error2").hide();
  }else{
    $("#logo-app-error2").show();
    $("#logo-app-error").hide();
  }
 }
 formatDate(dateString : string){
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString();

return day+ " de "+ months[date.getMonth()] + " de "+ year;
 }

}
