import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupInfo } from '../auth/signup-info';
import { Observable } from 'rxjs';
import { Trainer } from '../class/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseURL ="http://localhost:8080/api/users";
  private tainerURL = "http://localhost:8080/api/trainers";

  constructor(private httpClient: HttpClient) { }

  getAllTrainerList():Observable<SignupInfo[]>{
    return this.httpClient.get<SignupInfo[]>(`${this.tainerURL}`)
  }

  getAvailableTrainerList(type : string , date:Date):Observable<Trainer[]>{
    console.log(this.httpClient.get<Trainer[]>(`${this.tainerURL}/${type}/${date}`));
    return this.httpClient.get<Trainer[]>(`${this.tainerURL}/${type}/${date}`)
  }



}
