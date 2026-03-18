import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://localhost:7200/api/Auth";

  constructor(private http: HttpClient) {}

  login(data:any){
    return this.http.post(this.baseUrl + "/login", data);
  }

}