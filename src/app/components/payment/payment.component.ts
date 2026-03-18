import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  total: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.total = params['total'] || 0;
    });
  }

  
  payNow() {

    const userId = Number(localStorage.getItem("userId"));

    const order = {
      orderId: Date.now(), 
      userId: userId,
      foodName: localStorage.getItem("foodName") || '',
      foodImage: localStorage.getItem("foodImage") || '',
      totalAmount: this.total,
      status: "Pending"
    };

    console.log("Order saving:", order);

   
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order placed successfully ✅");

    localStorage.removeItem("foodName");
    localStorage.removeItem("foodImage");

    this.router.navigate(['/orders']);
  }
}