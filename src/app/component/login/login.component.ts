import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/component/register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  LoginForm = new FormGroup({ 
    email: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required), 
    }) 
    register() 
    { 
    console.warn("loginned!",this.LoginForm.value); 
    alert("login succseful");
    var message =("welcome "+this.LoginForm.value.lastname);
   alert( message );
   
    this.LoginForm.reset(); 
  
    } 
    constructor() { }

  ngOnInit(): void {
  }

}
