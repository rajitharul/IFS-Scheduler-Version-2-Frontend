import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SignupInfo } from '../auth/signup-info';
import { Trainer } from '../class/trainer';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: any = {};
  signupInfo: SignupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  trainer : Trainer = new Trainer();
  trainerQualification : string;
  trainerQualifications : string[] = [];
  

  constructor(private authService: AuthService, private router:Router , private trainerService : TrainerService) { }

  ngOnInit(): void {}

  onSubmit(){

    console.log(this.form);
 
    this.signupInfo = new SignupInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);
 
      this.trainer.name = this.signupInfo.name;
      this.trainer.qualifications =  this.trainerQualifications;
      this.trainer.type = this.form.type;


        
      this.trainerService.addTrainer(this.trainer).subscribe(data=>{
        console.log(data);
        console.log('trainer Added')
      },
      error => console.error(error));


    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );

    this.router.navigate(['/trainerlist']);
  }

  
  
  addTrainerQualification(){

      this.trainerQualifications.push(this.trainerQualification);
      console.log(this.trainerQualifications)

      
  }





}
