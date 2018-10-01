import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from './LoginModel';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(6))
  });

  loginDetails:any;
  
  tokenToStore:string;

  loginUser()
  {
   // this.loginForm.value.grant_type='password';
    //this.loginDetails  = this.loginForm.value;

    this.loginDetails = {username : this.loginForm.value.username, password: this.loginForm.value.password};
    this.loginDetails['grant_type'] = 'password';
    console.log(this.loginDetails);
    this.loginService.VerifyUser(this.loginDetails).subscribe(x=>console.log(x));
  }

}
