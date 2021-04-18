import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

interface Info{
  token: string;
  username: string;
  authorities: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  info: Info;
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    const token = this.token.getToken();
    const username = this.token.getUsername();
    const authorities = this.token.getAuthorities();
    this.info = {
      token: token,
      username: username,
      authorities: authorities
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
