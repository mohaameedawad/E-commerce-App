import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
getALlProducts(){
  return this.http.get(environment.baseApi + 'products')
}

getALlCategories(){
  return this.http.get(environment.baseApi + 'products/categories')
}

creatproducts(model:any){
  return this.http.post(environment.baseApi + 'products', model)
}

updateItems(id: any, model: any) {
  return this.http.put(environment.baseApi + 'products/' + id, model)

}
getAllCarts() {
  return this.http.get(environment.baseApi + 'carts');
}

fliterCarts(value: any) {
  return this.http.get(`${environment.baseApi}carts?startdate=${value.start}&enddate=${value.end}`);
}


deletecart(id: number) {
  return this.http.delete(`${environment.baseApi}carts/${id}`);
  }
}
