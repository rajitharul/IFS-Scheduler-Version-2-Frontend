import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualMachine } from '../class/virtual-machine';
import { Observable } from 'rxjs';
import { SortRequestVirtualMachine } from '../class/sort-request-virtual-machine';

@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {

  private baseURL ="http://localhost:8080/api/virtualMachines";
  private availableVMs ="http://localhost:8080/api/availableVirtualMachines";
  private availableVMsForTS ="http://localhost:8080/api/virtualMachines-trainingSession";
  private sortedVirtualMachineURL ="http://localhost:8080/api/sort/virtualMachines";


  constructor(private httpClient: HttpClient) { }

  addVirtualMachine(virtualMachine:VirtualMachine):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, virtualMachine);
  }

  getVirtualMachineList():Observable<VirtualMachine[]>{
    return this.httpClient.get<VirtualMachine[]>(`${this.baseURL}`)
  }


  getSortedVirtualMachines(sortedVirtualMachine: SortRequestVirtualMachine):Observable<Object>{
    return this.httpClient.post(`${this.sortedVirtualMachineURL}`, sortedVirtualMachine);
  }

  getVirtualMachinebyId( virtualMachineId: number):Observable<VirtualMachine>{
    return this.httpClient.get<VirtualMachine>(`${this.baseURL}/${virtualMachineId}`)
  }


  
  getVirtualMachinebyName( virtualMachineName: number):Observable<VirtualMachine>{
    return this.httpClient.get<VirtualMachine>(`${this.baseURL}/${virtualMachineName}`)
  }

  getAvailableVirtualMachineList(startDate:Date , version:String , duration:number):Observable<VirtualMachine[]>{


       return this.httpClient.get<VirtualMachine[]>(`${this.availableVMs}/${startDate}/${version}/${duration}`)
  
  
      }

      // getAvailableVirtualMachineListFiltered(startDate:Date):Observable<VirtualMachine[]>{


      //   return this.httpClient.get(`${this.availableVMs}/${startDate}`).map((response : Response) => response.json())
   
   
      //  }

      
  getVirtualMachineByTrainingSessions(trainingSessionId: number):Observable<VirtualMachine[]>{
    return this.httpClient.get<VirtualMachine[]>(`${this.availableVMsForTS}/${trainingSessionId}`)
  }

  updateVirtualMachine(id:number, virtualMachine: VirtualMachine):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,virtualMachine);
  }



      deleteVirtualMachine(id:number):Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
      }


}
