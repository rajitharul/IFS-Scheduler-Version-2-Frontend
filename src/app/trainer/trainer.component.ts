import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getTrainerBoard().subscribe(
      data=>{
        this.board=data;
        console.log(data);
      },
      error=>{
        this.errorMessage =`${error.status}:${JSON.parse(error.error).message}`
      }
    );
  }

}
