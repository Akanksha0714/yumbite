import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

{ path: 'home', component: LoginComponent },

{ path: 'login', component: LoginComponent },

{ path: 'menu', component: MenuComponent, canActivate:[AuthGuard] },

{ path: 'cart', component: CartComponent, canActivate:[AuthGuard] },

{ path: 'orders', component: OrdersComponent, canActivate:[AuthGuard] },

{ path: 'payment', component: PaymentComponent },

{ path: '', redirectTo:'login', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }