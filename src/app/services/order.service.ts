import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // ⚠️ Swagger madhun exact port ghya
 apiUrl = 'https://localhost:7200/api/orders';

  constructor(private http: HttpClient) {}

  placeOrder(order:any){

    const token = localStorage.getItem("token");

    return this.http.post(this.apiUrl, order, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });

  }

  getUserOrders(userId:any){

    const token = localStorage.getItem("token");

    return this.http.get(`${this.apiUrl}/user/${userId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });

  }

}