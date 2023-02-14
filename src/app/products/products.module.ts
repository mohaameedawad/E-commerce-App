import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { OneProductComponent } from './components/one-product/one-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    OneProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductsModule { }
