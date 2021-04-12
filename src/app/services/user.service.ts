import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private trainerUrl = 'http://localhost:8080/api/test/trainer';
  private depManagerUrl = 'http://localhost:8080/api/test/depManager';
  private managerUrl = 'http://localhost:8080/api/test/manager';

  constructor(private http:HttpClient) { }

  getTrainerBoard():Observable<string>{
    return this.http.get(this.trainerUrl,{responseType:'text'});
  }

  getdepManagerBoard(): Observable<string>{
    return this.http.get(this.depManagerUrl,{responseType:'text'});
  }

  getManagerBoard():Observable<string>{
    return this.http.get(this.managerUrl,{responseType:'text'});
  }
}
