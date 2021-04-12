import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveInfo } from '../auth/Manage-leaveInfo';

@Injectable({
    providedIn: 'root'
})
export class LeaveMService {

    private baseURL = "http://localhost:8080/api/v1/leave/all";

    constructor(private httpClient: HttpClient) { }

    getLeaves(): Observable<LeaveInfo[]> {
        return this.httpClient.get<LeaveInfo[]>(`${this.baseURL}`)
    }
}
