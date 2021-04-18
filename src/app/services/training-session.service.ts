import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingSession } from '../class/training-session';
import { SortRequestTrainingSessions } from '../class/sort-request-training-sessions';


@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  private baseURL ="http://localhost:8080/api/trainingSessions";
  private sortedTrainingSessionURL ="http://localhost:8080/api/sort/trainingSessions";
  private baseURL2 = "http://localhost:8080/api/trainingSessionByTrainer";
  private baseURL3 = "http://localhost:8080/api/trainingSessionVm";


  constructor(private httpClient:HttpClient) { }

  getTrainingSessionList():Observable<TrainingSession[]>{
    return this.httpClient.get<TrainingSession[]>(`${this.baseURL}`)
  }

  createTrainingSession(trainingSession:TrainingSession):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, trainingSession);
  }

  getTrainingSessionById(id:number):Observable<TrainingSession>{
    return this.httpClient.get<TrainingSession>(`${this.baseURL}/${id}`);
  }

  updateTrainingSession(id:number, trainingSession: TrainingSession):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,trainingSession);
  }

  updateTrainingSessionVm(id:number, trainingSession: TrainingSession):Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`,trainingSession);
  }
  deleteTrainingSession(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getSortedTrainingSessions(sortedTrainingSession: SortRequestTrainingSessions):Observable<Object>{
    return this.httpClient.post(`${this.sortedTrainingSessionURL}`, sortedTrainingSession);
  }


  getTrainingSessionListByTrainer(username : string):Observable<TrainingSession[]>{
    return this.httpClient.get<TrainingSession[]>(`${this.baseURL2}/${username}`)
  }


}
