import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router){

  }
  async canActivate(): Promise<boolean>{
   //const promise =  this.dataService.currentUser().toPromise()
      //promise.then((data)=>{}).catch((error)=>{
      //this.router.navigate(['/login'])
    //});
   
   return true;
      
       
  }
  
}
