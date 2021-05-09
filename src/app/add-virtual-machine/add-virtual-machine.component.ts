import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualMachine } from '../class/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-virtual-machine',
  templateUrl: './add-virtual-machine.component.html',
  styleUrls: ['./add-virtual-machine.component.css']
})
export class AddVirtualMachineComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  virtualMachine: VirtualMachine = new VirtualMachine();
  tempProduct: String;
  status1: String ="working";
  status2: String ="repairing";



  constructor(private formBuilder: FormBuilder, private virtualMachineService:VirtualMachineService, private router:Router) { }



  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      vm: this.formBuilder.group({
        virtualMachineName:new FormControl('', [Validators.required, Validators.minLength(2)]),
        product:new FormControl('', [Validators.required /*Validators.minLength(2)]*/]),
        version: new FormControl('', [Validators.required]),
        region: new FormControl('', [Validators.required]),
        status: new FormControl('', [Validators.required])
      })});


  }

  saveVirtualMachine(){
    this.virtualMachine.virtualMachineName=this.checkoutFormGroup.get('vm').value.virtualMachineName.name;
    this.virtualMachine.product=this.checkoutFormGroup.get('vm').value.product;
    this.virtualMachine.version=this.checkoutFormGroup.get('vm').value.version;
    this.virtualMachine.region=this.checkoutFormGroup.get('vm').value.region;
    this.virtualMachine.status=this.checkoutFormGroup.get('vm').value.status;
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

    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();

    }

    if(this.checkoutFormGroup.valid) {
      /* write your code here */
      this.saveVirtualMachine();
      console.log(this.virtualMachine);
    }

  //  console.log(this.virtualMachine);
    // this.saveVirtualMachine();


  }

  get virtualMachineName(){ return this.checkoutFormGroup.get('vm.virtualMachineName'); }
  get product(){ return this.checkoutFormGroup.get('vm.product'); }
  get version(){ return this.checkoutFormGroup.get('vm.version'); }
  get region(){ return this.checkoutFormGroup.get('vm.region'); }


}
