import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveInfo } from '../auth/Manage-leaveInfo';
import { TrainingCordinator } from '../class/training-cordinator';
import { TrainingRoom } from '../class/training-room';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  private baseURLtrainerCordinators = "http://localhost:8080/generalapi/trainerCordinators";

  private baseURLlocations = "http://localhost:8080/generalapi/locations";

  private baseURLtrainingRooms = "http://localhost:8080/generalapi/trainingRooms";


  constructor(private httpClient: HttpClient) { }

  getAlltrainerCordinators(): Observable<TrainingCordinator[]> {
      return this.httpClient.get<TrainingCordinator[]>(`${this.baseURLtrainerCordinators}`)
  }

  getAlllocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(`${this.baseURLlocations}`)
}


trainingRooms(): Observable<TrainingRoom[]> {
  return this.httpClient.get<TrainingRoom[]>(`${this.baseURLtrainingRooms}`)
}


}
