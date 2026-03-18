import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any[]=[];
  total:number=0;

  constructor(
    private cartService:CartService,
    private router:Router
  ){}

  ngOnInit(){

    this.cartItems = this.cartService.getCart();

    
    this.cartItems.forEach(x=>{
      if(!x.quantity){
        x.quantity = 1;
      }
    });

    this.calculateTotal();

  }

  calculateTotal(){

    this.total = 0;

    this.cartItems.forEach(x=>{
      this.total += x.price * x.quantity;
    });

  }

  increaseQty(item:any){
    item.quantity++;
    this.calculateTotal();
  }

  decreaseQty(item:any){
    if(item.quantity > 1){
      item.quantity--;
      this.calculateTotal();
    }
  }

  removeItem(index:number){
    this.cartItems.splice(index,1);
    this.calculateTotal();
  }
placeOrder(){

if(this.cartItems.length === 0){
  alert("Cart is empty ❌");
  return;
}

this.router.navigate(['/payment'],{
  queryParams:{ total:this.total }
});

}

}