import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

title = 'food-ordering-ui';

isLoggedIn=false;

ngOnInit(){
if(localStorage.getItem("token")){
this.isLoggedIn=true;
}
}

}