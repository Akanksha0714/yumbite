import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foods = [
    { name: 'Pizza', price: 250, image: 'assets/images/pizza.jpg', rating: 4.5 },
    { name: 'Burger', price: 120, image: 'assets/images/burger.jpg', rating: 4.2 },
    { name: 'Pasta', price: 200, image: 'assets/images/pasta.jpg', rating: 4.4 },
    { name: 'Sandwich', price: 90, image: 'assets/images/sandwich.jpg', rating: 4.1 },
    { name: 'French Fries', price: 80, image: 'assets/images/french-fries.jpg', rating: 4.3 },
    { name: 'Paneer Pizza', price: 300, image: 'assets/images/paneer-pizza.jpg', rating: 4.6 },
    { name: 'Coffee', price: 70, image: 'assets/images/coffee.jpg', rating: 4.2 },
    { name: 'Hot Coffee', price: 90, image: 'assets/images/hot-coffee.jpg', rating: 4.3 },
    { name: 'Cold Coffee', price: 110, image: 'assets/images/cold-coffee.jpg', rating: 4.5 },
    { name: 'Juice', price: 60, image: 'assets/images/juice.jpg', rating: 4.1 },
    { name: 'Cake', price: 150, image: 'assets/images/cake.jpg', rating: 4.6 }
  ];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {}

  // ✅ ADD TO CART + SAVE IMAGE
  addToCart(item: any) {

  // ✅ MUST
  this.cartService.addToCart(item);

  // payment साठी
  localStorage.setItem("foodName", item.name);
  localStorage.setItem("foodImage", item.image);

    alert(item.name + " added to cart 🛒");

    // optional redirect
    this.router.navigate(['/cart']);
  }

}