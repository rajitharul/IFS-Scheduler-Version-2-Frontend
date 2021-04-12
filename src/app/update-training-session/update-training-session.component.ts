import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../class/trainer';
import { TrainingSession } from '../class/training-session';
import { VirtualMachine } from '../class/virtual-machine';
import { TrainerService } from '../services/trainer.service';
import { TrainingSessionService } from '../services/training-session.service';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-update-training-session',
  templateUrl: './update-training-session.component.html',
  styleUrls: ['./update-training-session.component.css']
})
export class UpdateTrainingSessionComponent implements OnInit {

  id:number;
  trainingSession: TrainingSession = new TrainingSession();
  virtualMachineIds :number[] = [];
  trainerIds :number[] = [];
  trainerId :number = 0;
  trainers : Trainer[];
  virtualMachines : VirtualMachine[];


  virtualMachineId :number = 0;

  constructor(private trainingSessionService:TrainingSessionService, private route:ActivatedRoute,
    private router:Router ,   private virtualMachineService:VirtualMachineService , private trainerService:TrainerService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.trainingSessionService.getTrainingSessionById(this.id).subscribe(data=>{
      this.trainingSession = data;
      console.log(this.trainingSession);
    },error=>console.log(error));
  }

  onSubmit(){
    
    this.trainingSession.vmIds = this.virtualMachineIds;
    this.trainingSession.trainerids = this.trainerIds;
    console.log(this.trainingSession);

    this.trainingSessionService.updateTrainingSession(this.id,this.trainingSession).subscribe(data=>{
      this.goToTrainingSessionList();
    },error =>console.log(error));
  }

  goToTrainingSessionList(){
    this.router.navigate(['/trainingSessions']);
  }


  saveTrainingSession(){
    this.trainingSessionService.createTrainingSession(this.trainingSession).subscribe(data=>{
      console.log(data);
      this.goToTrainingSessionList();
    },
    error => console.error(error));
  }


  addVm(){

    if(this.trainingSession.ifsApplicationVersion !=null){      console.log("IFS Version is ......" + this.trainingSession.ifsApplicationVersion)
  }else{
    alert("Please enter the ifsApplicationVersion before checking for the VMs");
  }


    this.virtualMachineService.getVirtualMachinebyId(this.virtualMachineId).subscribe(data=>{

      this.virtualMachineIds.push(this.virtualMachineId);
      console.log(data);
      console.log(this.virtualMachineIds)
    },
    error => console.error(error));

  }

  getAvailableVM(){

console.log( this.trainingSession.startDate)

     this.virtualMachineService.getAvailableVirtualMachineList(this.trainingSession.startDate).subscribe(data=>{
      console.log(data);
      this.virtualMachines = data;
    },
    error => console.error(error));

  }


  getAvailableTrainers(){

    console.log('getting available Trainers')
    
          let type  = this.trainingSession.type;

          this.trainerService.getAvailableTrainerList(type ,this.trainingSession.startDate ).subscribe(data=>{
            this.trainers = data;
            
            console.log( this.trainers);
          },
          error => console.error(error));
    
      }
    
    



  addTrainer(){

    this.trainerIds.push(this.trainerId);   
      console.log("Trainer Id pushed" + this.trainerId);
      console.log("Trainer Ids"  + this.trainerIds);


  }




}


