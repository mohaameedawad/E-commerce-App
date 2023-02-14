import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/products/services/product.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  Carts:any[] = [];
  Products:any[] = [];
  details:any;
  total: number = 0;
  Form!: FormGroup;

  constructor(private adminservice: AdminService, private fb:FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCarts();
    this.formgorup();
  }

  formgorup() {
    this.Form = this.fb.group({
      start: '',
      end: ''
    })
  }

  getAllCarts() {
    this.adminservice.getAllCarts().subscribe((res: any) =>
      this.Carts = res );
  }

  filterCarts(){
    const value = this.Form.value;
    this.adminservice.fliterCarts(value).subscribe((res: any) =>
      this.Carts = res
    );
  }

  deletecart(id:number) {
    this.adminservice.deletecart(id).subscribe((res: any) =>
      this.getAllCarts
    )
  }

  view(id: number) {
    this.Products = [];
    this.details = this.Carts[id].products;
    console.log('details',this.details)
    for (let i =0; i < this.details.length; i++)
    {
      this.productService.singleProduct(this.details[i].productId).subscribe((res : any) => {
        console.log('details[i]',this.details[i])
        console.log(res)


      this.Products.push({item: res, quantity: this.details[i].quantity} );
      this.totalamout()
    })
    };
  }

   totalamout() {
    this.total = 0;
    for(let i in this.Products) {
      this.total += (this.Products[i].item.price * this.Products[i].quantity);
    } }
  }
