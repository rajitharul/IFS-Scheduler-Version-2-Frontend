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
  private tainerbyNameURL = "http://localhost:8080/api/trainerByname";




  constructor(private httpClient: HttpClient) { }

  getUserList():Observable<SignupInfo[]>{
    return this.httpClient.get<SignupInfo[]>(`${this.baseURL}`)
  }

  getAvailableTrainerList(type : string , date:Date , duration:number):Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${this.tainerURL}/${type}/${date}/${duration}`)
  }


  addTrainer(trainer:Trainer):Observable<Object>{
    return this.httpClient.post(`${this.tainerURL}`, trainer);
  }



  getTrainerbyId( trainerId: number):Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.tainerURL}/${trainerId}`)
  }

  getTrainerbyName( trainerName : string):Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.tainerbyNameURL}/${trainerName}`)
  }

}
