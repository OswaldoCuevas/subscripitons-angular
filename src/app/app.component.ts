

import { AfterViewInit, Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
  title = 'mobEmmanuel';

  constructor( private router:Router){
    
  }
  ngAfterViewInit() {
    const limitWidth = 750
    var showItems = false;
    resize()
    onclick()

    $(window).resize((e) => {
            resize()
            onclick()
    })
    function onclick(){
        $(".nav").on('click', function(){
            $(".nav").children().removeClass("active");
            $(this).children().addClass("active");
        })
        $(".nav-item").on('click', function(){
            const id = $(this).children().attr("id");
            $(".content-primary").load(id+".html")
        })
        $(".nav-item-full").on('click', function(){
            const id = $(this).children().attr("id");
            $(".dashboard-nav-items-full").hide()
            $(".content-primary").load(id+".html")
            $(".show-items").show()
            $(".hide-items").hide()
            showItems = false;
            
        })
        $(".show-items").on('click', function(){
            $(".dashboard-nav-items-full").css("display","flex");
            $(".show-items").hide()
            $(".hide-items").show()
            showItems = true;
        })
        $(".hide-items").on('click', function(){
            $(".dashboard-nav-items-full").css("display","none");
            $(".show-items").show()
            $(".hide-items").hide()
            showItems = false;
        })
}
    function resize(){
        const windowWidth = window.innerWidth;
        if(windowWidth < limitWidth){
            movil()
        }else{
            web()
             }
    }
    function movil(){
        $(".nav-item").removeClass("nav-item").addClass("nav-item-full");; 
        $(".dashboard-nav-items").removeClass("dashboard-nav-items").addClass("dashboard-nav-items-full"); 
        
        if(!showItems){
            $(".dashboard-nav-items-full").hide()
            $(".show-items").show();
        }else{
            $(".dashboard-nav-items-full").css("display","flex");
            $(".show-items").hide();
        }
        
    }
    function web(){
        $(".nav-item-full").removeClass("nav-item-full").addClass("nav-item");; 
        $(".dashboard-nav-items-full").removeClass("dashboard-nav-items-full").addClass("dashboard-nav-items"); 
        $(".dashboard-nav-items").css("display","flex");
        $(".bars").hide()
        showItems = false;
     
    }
  }

 //---------------------------cerrar sesión------------
logout(){
  localStorage.removeItem('token')
  this.router.navigate(['/login']);
}

}
