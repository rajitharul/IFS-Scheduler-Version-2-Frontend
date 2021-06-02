import { Trainer } from './trainer';
import { VirtualMachine } from './virtual-machine';

import { Location } from './location';

import { TrainingRoom } from './training-room';
import { TrainingCordinator } from './training-cordinator';

export class TrainingSession {
    id:number;
    sessionName:string;
    startDate:Date;
    duration:number;
    endDate: Date;
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
    location : Location;
    trainingRoom : TrainingRoom;
    trainingCordinator  :TrainingCordinator;


}
