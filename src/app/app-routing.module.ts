import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './admin/component/carts/carts.component';
import { ProductsComponent } from './admin/component/products/products.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [
  {path: "", redirectTo: 'allProducts', pathMatch: 'full'},
  {path: "allProducts", component: AllProductsComponent},
  {path: "details/:id", component: ProductsDetailsComponent},
  {path: "cart", component: CartComponent},
  {path: "Login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "carts", component: CartsComponent},
  {path: "products", component: ProductsComponent},
  {path: "**", redirectTo: 'allProducts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// E-commerce-App
