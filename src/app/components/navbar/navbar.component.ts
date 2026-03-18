import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

username:any;
isLoggedIn:boolean = false;

constructor(private router: Router){}

ngOnInit(){

this.checkLogin();

this.router.events.subscribe(event => {
  if(event instanceof NavigationEnd){
    this.checkLogin();
  }
});

}

checkLogin(){

this.username = localStorage.getItem("username") || "User";

if(localStorage.getItem("token")){
  this.isLoggedIn = true;
}else{
  this.isLoggedIn = false;
}

}

logout(){

localStorage.removeItem("token");
localStorage.removeItem("username");

this.isLoggedIn = false;
this.username = null;

this.router.navigate(['/home']);

}

}