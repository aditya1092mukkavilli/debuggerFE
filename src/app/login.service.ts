import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login/LoginModel';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
 

  VerifyUser(loginDetails:LoginModel):Observable<any>
  {
    debugger;

    return this.http.post("http://localhost:54088/token", "userName=" + encodeURIComponent(loginDetails.username) +"&password=" + encodeURIComponent(loginDetails.password) +"&grant_type=password",httpOptions);
  }
}
