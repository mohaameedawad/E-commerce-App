import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

getALlProducts(){
  return this.http.get(environment.baseApi + 'products')
}

getALlCategories(){
  return this.http.get(environment.baseApi + 'products/categories')
}

filterCategory(catg: string){
  return this.http.get(environment.baseApi + 'products/category/' + catg)
}

singleProduct(id: any){
  return this.http.get(environment.baseApi + 'products/' + id)
}


}
