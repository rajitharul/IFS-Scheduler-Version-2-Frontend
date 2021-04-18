import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualMachine } from '../class/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';

@Component({
  selector: 'app-add-virtual-machine',
  templateUrl: './add-virtual-machine.component.html',
  styleUrls: ['./add-virtual-machine.component.css']
})
export class AddVirtualMachineComponent implements OnInit {

  virtualMachine: VirtualMachine = new VirtualMachine();
  tempProduct: String;
  constructor(private virtualMachineService:VirtualMachineService, private router:Router) { }


  ngOnInit(): void {
  }

  saveVirtualMachine(){
    this.tempProduct = this.virtualMachine.product;
    for (var i = 0; i < this.tempProduct.length; i++) {
      //this.trainingSession.ifsApplicationVersion.charAt(i))
      if(this.tempProduct.charAt(i)===" "){
        this.tempProduct= this.tempProduct.replace(this.tempProduct.charAt(i), "-");
      }

    }
    this.virtualMachine.product = this.tempProduct;
    console.log(this.virtualMachine.product);
    this.virtualMachineService.addVirtualMachine(this.virtualMachine).subscribe(data=>{
      console.log(data);
      this.goToVirtualMachineList();
    },error=>console.log(error));
  }

  goToVirtualMachineList(){
    this.router.navigate(['/virtualMachines']);
  }

  onSubmit(){
    console.log(this.virtualMachine);
    this.saveVirtualMachine();
  }

}
