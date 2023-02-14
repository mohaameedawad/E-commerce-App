import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthServiceService) { }

  ngOnInit(): void {
    this.buildingform();
  }
  buildingform() {
    this.userForm =  this.fb.group ({
    'name': ['', Validators.required],
    'email': ['',Validators.required, Validators.email],
    'Password': ['',Validators.required],
    'confirmPassword': ['',Validators.required]
    })
  }

  onSubmit(u : FormGroup) {
    let value = u.value;
    let model ={
          email:value.email,
          username:value.name,
          password:value.password,
          name:{
              firstname:value.name,
              lastname:''
          },
           address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                lat:'-37.3159',
                long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
    };
    this.service.creatAccount(model).subscribe(res => {
      this.userForm.reset();
      alert('your account has been created successfully')
    }

    );
        }
  }


