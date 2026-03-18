import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private auth: AuthService, private router: Router) {}

  


  login(){

this.auth.login({
  email: this.email,
  password: this.password
}).subscribe((res:any)=>{

  console.log("FULL RESPONSE:", res);

  localStorage.setItem("token", res.token);
  localStorage.setItem("username", this.email);

  // 🔥 FIX
  localStorage.setItem("userId", res.userId || "1");

  this.router.navigate(['/menu']);

});

}

}