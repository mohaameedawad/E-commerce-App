import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/productModel';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

    products:Product[] = [];
    categories:string[] = [];
    cartProducts:Product[] = [];
    loading = false;


  ngOnInit(): void {
    this.getallproducts(),
    this.getALlCategories()
  }

  getallproducts(){
    this.loading = true;
    this.productService.getALlProducts().subscribe((res : any) => {
      this.products = res;
      this.loading = false;
      console.log(res)}
      )
  }

  getALlCategories(){
    this.loading = true;
    this.productService.getALlCategories().subscribe((res: any) => {
      this.categories = res;
      this.loading = false;
      console.log(res)}
      )
  }

  filterCategories(catg: any) {
    let val = catg.target.value;
    console.log(val)
     if (val == "All categories") {
      this.getallproducts()
     } else {
       this.loading = true;
       this.productService.filterCategory(val).subscribe((res :any) => {
         this.products = res;
         this.loading = false;
       });
     }
  }

  addtocart(event: any){
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((item: any) => item.item.id == event.item.id)
      if(exist) {
        alert('this product is already exist in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    } else{
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }


}
