import { TrainingSession } from "./training-session";

export class VirtualMachine {
    virtualMachineId: number;
    product: String;
    name: String;
    version:String;
    region:String;
    status:String;
    trainingSessions: TrainingSession[]=[];

}
