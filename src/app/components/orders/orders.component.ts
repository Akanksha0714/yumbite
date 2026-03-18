import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  ngOnInit(): void {

    const userId = Number(localStorage.getItem("userId"));

    let allOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    this.orders = allOrders.filter((o: any) => o.userId === userId);

    console.log("Orders:", this.orders);
  }
}