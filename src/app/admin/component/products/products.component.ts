import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/productModel';
import { AdminService } from "../../services/admin.service";
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loading = false;
  products : Product[] = [];
  categories : string[] = [];
  Form !: FormGroup;
  base64!: any;
  alert = false;
  productAdjust = false;
  productCategory !: string;
  adjust!: string;

  constructor(private productService:AdminService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getallproducts();
    this.getALlCategories();
    this.formGroup();
  }

    getallproducts(){
    this.loading = true;
    this.productService.getALlProducts().subscribe((res : any) => {
      this.products = res;
      this.loading = false;
      console.log(res)},
      (error) => {
        this.loading = false;
        alert(error.message);
        }
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

  formGroup() {
    this.Form = this.fb.group({
    title: ['', Validators.required],
    price: ['',Validators.required],
    image: ['',Validators.required],
    description: ['',Validators.required],
    category: ['',Validators.required]
    })
  }

onSubmit(Form: FormGroup) {
  const model = Form.value;
  this.productService.creatproducts(model).subscribe(res =>{
    this.alert = true;
    this.Form.reset();
    this.base64 = '';
    setTimeout(() => {this.alert = false}, 3000)})
}


getimage(event : any) {
     const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.base64 = reader.result
    }
}


updateItems(item: any) {
  this.productAdjust = true;
  this.Form.patchValue({
    title: item.title,
    price: item.price,
    Image: this.base64,
    description: item.description,
    })
  this.base64 = item.image;
  this.productCategory = item.category;
}

// updatingProduct() {
//   const model = this.Form.value;
//   this.productService.updateItems(item.id, model).subscribe();
// }
}
