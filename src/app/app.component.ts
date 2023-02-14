import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-Commerce-app';
  admin: boolean = true ;
  experience = '';

  constructor (private router:Router) {};

  ngOnInit(): void {
    this.getexperience()
  }


  getexperience(): void {
      if (this.admin) {
        this.experience = 'admin'
        this.admin = !this.admin;
        this.router.navigate(['allProducts']);
      } else {
        this.experience = 'user'
        this.admin = !this.admin;
        this.router.navigate(['carts']);
      }
    }

}
