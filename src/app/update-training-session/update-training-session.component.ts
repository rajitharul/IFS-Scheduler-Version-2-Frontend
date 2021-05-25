import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../class/trainer';
import { TrainingSession } from '../class/training-session';
import { VirtualMachine } from '../class/virtual-machine';
import { TrainerService } from '../services/trainer.service';
import { TrainingSessionService } from '../services/training-session.service';
import { VirtualMachineService } from '../services/virtual-machine.service';
import { TrainingCordinator } from '../class/training-cordinator';
import { TrainingRoom } from '../class/training-room';
import {GeneralService} from '../services/general.service';
import { Location } from '../class/location';



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
  trainerId :number ;
  availableTrainers : Trainer[];
  availableVirtualMachines : VirtualMachine[];

  availablelocations : Location[];
  availabletrainingCordinators : TrainingCordinator[];
  availabletrainingRooms  : TrainingRoom[];
  virtualMachineId :number;


  tempTrainer : Trainer = new Trainer();
  tempVirtualMachine : VirtualMachine = new VirtualMachine();;



  constructor(private generalService:GeneralService , private trainingSessionService:TrainingSessionService, private route:ActivatedRoute,
    private router:Router ,   private virtualMachineService:VirtualMachineService , private trainerService:TrainerService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.trainingSessionService.getTrainingSessionById(this.id).subscribe(data=>{
      this.trainingSession = data;
      console.log(this.trainingSession);
    },error=>console.log(error));

    this.generalService.getAlllocations().subscribe(data=>{
      this.availablelocations = data;
      console.log(data);
    },
    error => console.error(error));

    this.generalService.getAlltrainerCordinators().subscribe(data=>{
      this.availabletrainingCordinators = data;
      console.log(data);

    },
    error => console.error(error));

    this.generalService.trainingRooms().subscribe(data=>{
      this.availabletrainingRooms = data;
      console.log(data);

    },
    error => console.error(error));


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

    console.log('Virtual that was added is ' + this.virtualMachineId);

      this.virtualMachineService.getVirtualMachinebyId(this.virtualMachineId).subscribe(data=>{

      this.trainingSession.virtualMachines.push(data);
    },
    error => console.error(error));

    console.log('Training Session Virtual Machines are ' + this.trainingSession.virtualMachines);

  }

  getAvailableVM(){


     this.virtualMachineService.getAvailableVirtualMachineList(this.trainingSession.startDate , this.trainingSession.ifsApplicationVersion , this.trainingSession.duration).subscribe(data=>{
      console.log(data);
      this.availableVirtualMachines = data;
    },
    error => console.error(error));

  }


  getAvailableTrainers(){

    console.log('getting available Trainers')
    
          let type  = this.trainingSession.type;

          this.trainerService.getAvailableTrainerList(type ,this.trainingSession.startDate , this.trainingSession.duration ).subscribe(data=>{
            this.availableTrainers = data;
            
            console.log( this.availableTrainers);
          },
          error => console.error(error));
    
      }
    
    



  addTrainer(){

    console.log('Trainer that was added is ' + this.trainerId);

    
   

    this.trainerService.getTrainerbyId(this.trainerId).subscribe(data=>{

      this.trainingSession.trainers.push(data);
    },
    error => console.error(error));


    console.log('Training Session Trainers are ' + this.trainingSession.trainers)

  }


  removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  removeVirtualMachineID(tempVm : VirtualMachine ){

    const index: number = this.trainingSession.virtualMachines.indexOf(tempVm);
    if (index !== -1) {
        this.trainingSession.virtualMachines.splice(index, 1);
    }     


  }


  removeTrainer(tempTrainer : Trainer ){

    const index: number = this.trainingSession.trainers.indexOf(tempTrainer);
    if (index !== -1) {
        this.trainingSession.trainers.splice(index, 1);
    }     

  }


}


