import { Trainer } from './trainer';
import { VirtualMachine } from './virtual-machine';


export class TrainingSession {
    id:number;
    sessionName:String;
    startDate:Date;
    duration:number;
    maxParticipants:number;
    ifsApplicationVersion:String;
    bufferTime:number;
    managerComment:String;
    deliveryMethod:String;
    virtualMachines : VirtualMachine[];
    trainers : Trainer[];
    vmIds :number[];
    trainerids :number[];
    type:string;

}
