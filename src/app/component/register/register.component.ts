import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 RegisterForm = new FormGroup({ 
 lastname: new FormControl('', Validators.required), 
 firstname: new FormControl('', Validators.required),
 Phone: new FormControl('', Validators.required),
 Email: new FormControl('', Validators.required), 
 Password: new FormControl('', Validators.required), 
 }) 
 register() 
 { 
 console.warn("Registered!",this.RegisterForm.value); 
 alert("registration succseful");
 var message =("welcome "+this.RegisterForm.value.lastname);
alert( message );

 this.RegisterForm.reset(); 
 } 
getname(){
  return (this.RegisterForm.value.firstname+this.RegisterForm.value.lastname);
}
getphone(){
  return this.RegisterForm.value.Phone;
}
getemail(){
  return this.RegisterForm.value.Email;
}
getpassword(){
  return this.RegisterForm.value.Password;
}
details(){
  var name= (this.RegisterForm.value.firstname+this.RegisterForm.value.lastname);
  var phone=this.RegisterForm.value.Phone;
  var email=this.RegisterForm.value.Email;
  var password=this.RegisterForm.value.Password;
}

  ngOnInit(): void {
  }

}

