import { VirtualMachine } from './virtual-machine';


export class TrainingSession {
    id:number;
    sessionName:String;
    startDate:Date;
    duration:number;
    maxParticipants:number;
    ifsApplicationVersion:string;
    bufferTime:number;
    managerComment:String;
    deliveryMethod:String;
    virtualMachines : VirtualMachine[];
    vmIds :number[];
    trainerids :number[];
    type:string;

}
