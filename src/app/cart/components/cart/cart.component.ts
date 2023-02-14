import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any = [];
  total:number = 0;
  success = false;

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    this.totalamout();
  }

  getProducts() {
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
  }
  minsamount(i : any) {
    this.cartProducts[i].quantity--;
    this.totalamout();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  addamount(i : any) {
    this.cartProducts[i].quantity++
    this.totalamout();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  totalamout() {
    this.total = 0;
    for(let i in this.cartProducts) {
      this.total += (this.cartProducts[i].item.price * this.cartProducts[i].quantity);
    }
  }
  deleteItem(i: any) {
    this.cartProducts.splice(i, 1);
    this.totalamout();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
 }

 clearAllCart() {
  this.cartProducts = [];
  this.totalamout();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
 }

addToCart() {
  let products = this.cartProducts.map( (res: any) => {
    return {productId:res.item.id ,quantity: res.quantity}
  });
  let model = {
      userId:5,
      date: new Date(),
      products: products
}
console.log(model)
  this.service.addToCart(model).subscribe((res: any) => {
    this.success = true;
  });
}

}

