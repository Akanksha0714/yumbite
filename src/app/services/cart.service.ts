import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() {}

  // ✅ ADD ITEM
  addToCart(item: any) {

    // check already exists
    const existing = this.cartItems.find(x => x.name === item.name);

    if (existing) {
      existing.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
  }

  // ✅ GET CART
  getCart() {
    return this.cartItems;
  }

  // ✅ CLEAR
  clearCart() {
    this.cartItems = [];
  }
}