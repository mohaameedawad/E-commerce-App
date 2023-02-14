import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  array: any = [];
  constructor(private service:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(f : NgForm) {
    this.service.login().subscribe((res : any) => {
     this.array = res;
     let exist = this.array.findIndex( (item : any) => item.email == f.value.email && item.password == f.value.password )
     if (exist == -1){
       alert('this account is not exist')
      }else {
        console.log(this.array);
        this.router.navigate(['/cart']);
      }
    })
    }
}
