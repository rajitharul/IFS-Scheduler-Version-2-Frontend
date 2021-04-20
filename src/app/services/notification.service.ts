import { Injectable, Injector} from '@angular/core';
import {StompSubscription} from '@stomp/stompjs';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Notification} from '../class/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: Notification[] = [];

  constructor(private http: HttpClient,private injector: Injector) { }
}
