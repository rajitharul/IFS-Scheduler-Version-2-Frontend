import { HttpClient } from '@angular/common/http';
import { Component, OnInit,HostListener } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;
  title = 'IFS Trainer Scheduler';
  roles: string[];
  authority: string;

  constructor(private tokenStorage: TokenStorageService, private permissionsService: NgxPermissionsService, private http: HttpClient) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role['authority'] === 'ROLE_MANAGER') {
          this.authority = 'manager';
        } else if (role['authority'] === 'ROLE_DEPMANAGER') {
          this.authority = 'depmanager';
        }
        else {
          this.authority = 'trainer';
        }

      });
    }
    this.checkScroll();

  }

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}

