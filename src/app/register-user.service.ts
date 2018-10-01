import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationModel } from './registration/registrationModel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegisterUserService {

  constructor(private http: HttpClient) { }

  verifyUserCount():Observable<Number>
  {
     return this.http.get<Number>("http://localhost:54088/api/register/validator",httpOptions);
  }

   registerUser(registerDetails:RegistrationModel):Observable<any>
   {
     debugger;
     return this.http.post("http://localhost:54088/api/account/register",registerDetails,httpOptions);
   }
}
