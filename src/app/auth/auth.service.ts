import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { LoginInfo } from './login-info';
import { SignupInfo } from './signup-info';
import { TokenStorageService } from './token-storage.service';

const httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'}),

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/add-trainer';
  roles: string[];

  constructor(private http:HttpClient, private tokenStorage: TokenStorageService) {

  }

  attemptAuth(credentials: LoginInfo):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.loginUrl,credentials,httpOptions, );
  }

  signUp(info: SignupInfo): Observable<string> {
    console.log(info);
    console.log(info.qualifications);
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  isAuthenticated() {
    // get the auth token from localStorage
  //  let token = localStorage.getItem(this.jwt.accessToken);
    this.roles = this.tokenStorage.getAuthorities();

    let flag:boolean = this.roles.every(role => {
      if (role['authority'] === 'ROLE_MANAGER') {
        return true ;
      }
        return false;


    });

    // check if token is set, then...
   if(flag){
     return true;
   }else{
     return false;
   }

}
}
