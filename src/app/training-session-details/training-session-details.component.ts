import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { VirtualMachine } from '../class/virtual-machine';
import { TrainingSessionService } from '../services/training-session.service';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-training-session-details',
  templateUrl: './training-session-details.component.html',
  styleUrls: ['./training-session-details.component.css']
})
export class TrainingSessionDetailsComponent implements OnInit {

  id:number;
  trainingSession: TrainingSession;
  tentativeVirtualMachines: any;
  freeVirtualMachines:any;
  start_Date: Date;

  virtualMachineId :number = 0;
  virtualMachineIds :number[] = [];
  virtualMachines : VirtualMachine[]=[];

  tempvm: VirtualMachine;

  tempProduct: string;

  constructor(private route:ActivatedRoute, private trainingSessionService: TrainingSessionService, private virtualMachineService: VirtualMachineService, private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    //this.start_Date=this.route.snapshot.params['startDate'];

    this.trainingSession= new TrainingSession();
    this.trainingSessionService.getTrainingSessionById(this.id).subscribe( data=>{
      this.trainingSession= data;
    });

    this.virtualMachineService.getVirtualMachineByTrainingSessions(this.id).subscribe( data=>{
      this.tentativeVirtualMachines= data;

    });

    this.start_Date=this.trainingSession.startDate;




  }

  saveTrainingSession(){
    this.trainingSessionService.updateTrainingSessionVm(this.id,this.trainingSession).subscribe(data=>{
      console.log(data);
      this.goToTrainingSessionList();
    },
    error => console.error(error));
  }

  goToTrainingSessionList(){
    this.router.navigate(['/trainingSessions']);
  }

  addVm(){


     this.virtualMachineService.getVirtualMachinebyId(this.virtualMachineId).subscribe(data=>{
      this.virtualMachineIds.push(this.virtualMachineId);
      this.tempvm=data;
      this.virtualMachines.push(this.tempvm);
      this.trainingSession.virtualMachines.push(this.tempvm);
      console.log(data);
      console.log("virtual machines Ids"  + this.virtualMachineIds);
    },
    error => console.error(error));

  }

  getAvailableVM(){

    this.tempProduct = this.trainingSession.ifsApplicationVersion;

    for (var i = 0; i < this.tempProduct.length; i++) {
      //this.trainingSession.ifsApplicationVersion.charAt(i))
      if(this.tempProduct.charAt(i)===" "){
        this.tempProduct= this.tempProduct.replace(this.tempProduct.charAt(i), "-");
      }

    }
    console.log(this.tempProduct);


    console.log( this.trainingSession.startDate)

         this.virtualMachineService.getAvailableVirtualMachineList(this.trainingSession.startDate,this.tempProduct).subscribe(data=>{
          this.freeVirtualMachines=data;

        },
        error => console.error(error));


      }



      allocateVMs(){
        console.log(this.virtualMachineIds);
        console.log(this.trainingSession.virtualMachines);

        this.trainingSession.vmIds = this.virtualMachineIds;
        this.trainingSession.virtualMachines=this.virtualMachines;
       // this.trainingSession.virtualMachines=this.
        console.log(this.trainingSession.vmIds);
        console.log(this.trainingSession.virtualMachines);


        this.saveTrainingSession();
      //  console.log(this.trainingSession);

      }

}
