import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RegistrationModel } from './registration/registrationModel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegisterUserService {

  constructor(private http: HttpClient) { }  

   verifyUserCount():any
  {
     return this.http.get("http://localhost:54088/api/register/validator").pipe(catchError(this.handleError('count')));
  }

   registerUser(registerDetails:RegistrationModel):Observable<any>
   {
     return this.http.post("http://localhost:54088/api/account/register",registerDetails,httpOptions).pipe(catchError(this.handleError('registerUser')));;
   }

   handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
 }
}
