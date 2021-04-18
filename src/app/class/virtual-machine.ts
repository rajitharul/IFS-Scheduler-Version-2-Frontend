import { TrainingSession } from "./training-session";

export class VirtualMachine {
    virtualMachineId: number;
    virtualMachineName: string;
    product: String;
    version:String;
    region:String;
    trainingSessions: TrainingSession[];

}
