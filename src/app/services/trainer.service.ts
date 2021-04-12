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

  getUserList():Observable<SignupInfo[]>{
    return this.httpClient.get<SignupInfo[]>(`${this.baseURL}`)
  }

  getAvailableTrainerList(type : string , date:Date):Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${this.tainerURL}/${type}/${date}`)
  }


  addTrainer(trainer:Trainer):Observable<Object>{
    return this.httpClient.post(`${this.tainerURL}`, trainer);
  }



  getTrainerbyId( trainerId: number):Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.tainerURL}/${trainerId}`)
  }


}
