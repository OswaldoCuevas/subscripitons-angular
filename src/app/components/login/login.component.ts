import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit{
  option="signIn";
  ngAfterViewInit(): void {
    $(".dashboard-nav-list").hide();
  }
  constructor(private dataService: DataService, private router: Router){

  }
  signIn(email:any, password:any){
    const body = {email,password}
  
    // localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2Nzc1MjQ0NjV9.5wm2rRdGEsI6L4u6IWjYE4m2allm0K1OBRE1ZDxreSw");
 
  //  this.dataService.login(body).subscribe(data => {
  //   const token = data.token;
  //   localStorage.setItem("token",token);
  //   $(".dashboard-nav-list").show();
  //   this.router.navigate(['/home'])
  //  },error => {
  //   swal.fire('Usuario o contraseña incorrecta...', '', 'warning')
    
  //  })
   
    console.log(body);
    return false;
  }
  signUp(username:any, email:any, password:any){
   
    const body = {username,email,password}
    // this.dataService.addUser(body).subscribe(data => {
    //   swal.fire("Se ha registrado con exito...", '', 'success').then((result) =>{   });
    //   this. optionSignIn()
    // }, error => {
    //   if(error.status == 500){
    //     swal.fire('Correo ya registrado...', '', 'warning')
    //   }
    // })
   
    return false;
  }
  optionSignUp(){
    this.option="signUp";
  }
  optionSignIn(){
    this.option="signIn";
  }
}
