import { Component, OnInit } from '@angular/core';
import { VirtualMachine } from '../class/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-virtual-machine-list',
  templateUrl: './virtual-machine-list.component.html',
  styleUrls: ['./virtual-machine-list.component.css']
})
export class VirtualMachineListComponent implements OnInit {

  virtualMachines: VirtualMachine[];
  constructor(private virtualMachineService:VirtualMachineService) { }

  ngOnInit(): void {
    this.getVirtualMachines();
  }
  private getVirtualMachines(){
    this.virtualMachineService.getVirtualMachineList().subscribe(data=>{
      this.virtualMachines = data;
    })
  }

}
