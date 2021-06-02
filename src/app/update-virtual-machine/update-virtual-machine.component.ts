import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualMachine } from '../class/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-update-virtual-machine',
  templateUrl: './update-virtual-machine.component.html',
  styleUrls: ['./update-virtual-machine.component.css']
})
export class UpdateVirtualMachineComponent implements OnInit {

  id:number;
  virtualMachine: VirtualMachine = new VirtualMachine();

  constructor(private virtualMachineService:VirtualMachineService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.virtualMachineService.getVirtualMachinebyId(this.id).subscribe(data=>{
      this.virtualMachine = data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.virtualMachineService.updateVirtualMachine(this.id,this.virtualMachine).subscribe(data=>{
      this.goToVirtualMachineList();
    },error =>console.log(error));
  }

  goToVirtualMachineList(){
    this.router.navigate(['/virtualMachines']);
  }

}
