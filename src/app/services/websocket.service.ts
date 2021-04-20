import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  private notificationURL = "http://localhost:8080/api/notification";

  constructor() { }
}
