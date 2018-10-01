import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from '../register-user.service';
import { RegistrationModel } from './registrationModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private reguserService:RegisterUserService, private router: Router, private registerService:RegisterUserService) { }
  
  count:Number = 0;

  ngOnInit() {
    var counterValue = this.reguserService.verifyUserCount().subscribe(x=>{
      this.count = x;
      if(x>0)
      {
       // this.router.navigate(['/login']);
      }
    });
   

  }
 
  registerForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.minLength(6)),
    ConfirmPassword:new FormControl('', Validators.minLength(6))
  });
   
  registrationDetails:RegistrationModel;
  registerUser()
  {
    this.registrationDetails = this.registerForm.value;
    this.registerService.registerUser(this.registrationDetails).subscribe(x=>console.log(x));
  }
}
