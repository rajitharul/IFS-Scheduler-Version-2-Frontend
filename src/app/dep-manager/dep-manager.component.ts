import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dep-manager',
  templateUrl: './dep-manager.component.html',
  styleUrls: ['./dep-manager.component.css']
})
export class DepManagerComponent implements OnInit {

  board:string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getdepManagerBoard().subscribe(
      data=>{
        this.board = data;
      },
      error=>{
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

}
