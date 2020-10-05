import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products',component :ProductsComponent},
  {path:'orders',component :OrdersComponent},
  {path:'admin/products',component :AdminProductsComponent},
  {path:'admin/oreders',component :AdminOrdersComponent},
  {path:'shoppingCart',component :ShoppingCartComponent},
  {path:'login',component :LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
