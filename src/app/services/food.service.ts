import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  apiUrl = "https://localhost:7200/api/Food";

  constructor(private http: HttpClient) {}

  getFoods(){
    return this.http.get(this.apiUrl);
  }

}