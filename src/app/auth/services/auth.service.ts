import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get(environment.baseApi + 'users')
  }

  creatAccount(m: any) {
    return this.http.post(environment.baseApi + 'users', m)
  }
}
