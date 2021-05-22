import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { VirtualMachine } from '../class/virtual-machine';
import { Router } from '@angular/router';
import { VirtualMachineService } from '../services/virtual-machine.service';
import {SortRequestVirtualMachine} from '../class/sort-request-virtual-machine';


interface Info{
  token: string;
  username: string;
  authorities: string[];
}


@Component({
  selector: 'app-virtual-machine-list',
  templateUrl: './virtual-machine-list.component.html',
  styleUrls: ['./virtual-machine-list.component.css']
})
export class VirtualMachineListComponent implements OnInit {

  info: Info;

  filterForm: FormGroup;
  product?: String;
  version?: String;
  region?: String;

  requestBody: SortRequestVirtualMachine;
  virtualMachines: any;
  sortedVirtualMachines: SortRequestVirtualMachine = new SortRequestVirtualMachine();

  authority :string;

  constructor(private virtualMachineService:VirtualMachineService, private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {

    const token = this.token.getToken();
    const username = this.token.getUsername();
    const authorities = this.token.getAuthorities();
    this.info = {
      token: token,
      username: username,
      authorities: authorities
    };

    this.getVirtualMachines();
  }

   getVirtualMachines(){

    this.info.authorities.every(role => {
      if (role['authority'] === 'ROLE_MANAGER') {
        this.authority ='manager' ;
      }
    });


    this.virtualMachineService.getVirtualMachineList().subscribe(data=>{
      this.virtualMachines = data;
    })
  }

  virtualMachineDetails(id: number) {
    this.router.navigate(['virtual-machine-details', id]);
  }

  updateVirtualMachine(id: number) {
    this.router.navigate(['update-virtual-machine', id]);
  }

  deleteVirtualMachine(id: number) {
    this.virtualMachineService.deleteVirtualMachine(id).subscribe(data => {
      console.log(data);
      this.getVirtualMachines();
    })
  }


  onSubmit() {
    this.requestBody= {
      product:this.product,
      version:this.version,
      region:this.region
    };

    console.log(this.requestBody);
    this.virtualMachineService.getSortedVirtualMachines(this.requestBody).subscribe(data => {
      this.virtualMachines = [];
      this.virtualMachines = data;
    })

  }

}
