import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SignupInfo } from '../auth/signup-info';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {

  form: any = {};
  signupInfo: SignupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  trainerQualification : string;
  trainerQualifications : string[] = [];

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.form);

    this.signupInfo = new SignupInfo(
      this.form.name,
      this.form.username,
      this.form.type,
      this.trainerQualifications,
      this.form.email,
      this.form.contactNo,
      this.form.password);

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
