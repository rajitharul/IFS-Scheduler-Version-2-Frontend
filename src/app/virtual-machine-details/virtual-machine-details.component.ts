import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { VirtualMachine } from '../class/virtual-machine';
import { TrainingSessionService } from '../services/training-session.service';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-virtual-machine-details',
  templateUrl: './virtual-machine-details.component.html',
  styleUrls: ['./virtual-machine-details.component.css']
})
export class VirtualMachineDetailsComponent implements OnInit {

  id:number;
  virtualMachine: VirtualMachine;
  trainingSessions: TrainingSession[]=[];



  constructor(private route:ActivatedRoute, private trainingSessionService: TrainingSessionService, private virtualMachineService: VirtualMachineService, private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    //this.start_Date=this.route.snapshot.params['startDate'];

    this.virtualMachine= new VirtualMachine();
    this.virtualMachineService.getVirtualMachinebyId(this.id).subscribe( data=>{
      this.virtualMachine= data;
    });
  }

}
