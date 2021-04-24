import { Trainer } from './trainer';
import { VirtualMachine } from './virtual-machine';


export class TrainingSession {
    id:number;
    sessionName:string;
    startDate:Date;
    duration:number;
    endDate: Date;
    maxParticipants:number;
    ifsApplicationVersion:string;
    bufferTime:number;
    managerComment:String;
    deliveryMethod:String;
    virtualMachines : VirtualMachine[];
    vmIds :number[];
    trainerids :number[];
    trainers: Trainer[];
    type:string;

  // constructor(){
  //   this.endDate.setDate(this.startDate.getDate() + this.duration);
  // }

}
