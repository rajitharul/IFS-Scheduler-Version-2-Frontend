import { Component, OnInit ,   
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';
import {VirtualMachineService} from '../services/virtual-machine.service';
import {GeneralService} from '../services/general.service';

import {TrainerService} from '../services/trainer.service';
import { Trainer } from '../class/trainer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CalEvents } from '../class/cal-events';

import { VirtualMachine } from '../class/virtual-machine';
import { TrainingCordinator } from '../class/training-cordinator';
import { TrainingRoom } from '../class/training-room';

import {   CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView, } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns/esm';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.css']
})
export class CreateTrainingSessionComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;


  trainingSession: TrainingSession=new TrainingSession();
  virtualMachineIds :number[] = [];
  trainerIds :number[] = [];
  trainerId :number = 0;
  trainers : Trainer[];
  virtualMachines : VirtualMachine[];
  availablelocations : Location[];
  availabletrainingCordinators : TrainingCordinator[];
  availabletrainingRooms  : TrainingRoom[];

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  date: Date;
  // for calender view All Training Sessions
  allTrainingSessions : TrainingSession[];


  calEvent : CalendarEvent;
  refresh: Subject<any> = new Subject();

  //to check the filtering function
  virtualMachinesFilterd :  VirtualMachine[] ;


  virtualMachineId :number = 0;

  modalData: {
    action: string;
    event: CalendarEvent;
  };  
  
  private modal: NgbModal
  constructor( private generalService:GeneralService ,private trainingSessionService:TrainingSessionService, private router:Router ,  private virtualMachineService:VirtualMachineService , private trainerService:TrainerService ,  ) { }

  ngOnInit(): void {


    this.trainingSessionService.getTrainingSessionList().subscribe(data=>{
      this.allTrainingSessions = data;
      console.log(data);
    },
    error => console.error(error));
  
        
    this.generalService.getAlllocations().subscribe(data=>{
      this.availablelocations = data;
      console.log(data);
    },
    error => console.error(error));

    this.generalService.getAlltrainerCordinators().subscribe(data=>{
      this.availabletrainingCordinators = data;
      console.log(data);

    },
    error => console.error(error));

    this.generalService.trainingRooms().subscribe(data=>{
      this.availabletrainingRooms = data;
      console.log(data);

    },
    error => console.error(error));


  }

  saveTrainingSession(){
    this.trainingSessionService.createTrainingSession(this.trainingSession).subscribe(data=>{
      console.log(data);
      this.goToTrainingSessionList();
    },
    error => console.error(error));
  }

  goToTrainingSessionList(){
    this.router.navigate(['/trainingSessions']);
  }

  addVm(){

    if(this.trainingSession.ifsApplicationVersion !=null){      console.log("IFS Version is ......" + this.trainingSession.ifsApplicationVersion)
  }else{
    alert("Please enter the ifsApplicationVersion before checking for the VMs");
  }


    this.virtualMachineService.getVirtualMachinebyId(this.virtualMachineId).subscribe(data=>{
      this.virtualMachineIds.push(this.virtualMachineId);
      console.log(data);
      console.log("virtual machines Ids"  + this.virtualMachineIds);
    },
    error => console.error(error));

  }

  getAvailableVM(){

console.log( this.trainingSession.startDate)

     this.virtualMachineService.getAvailableVirtualMachineList(this.trainingSession.startDate , this.trainingSession.ifsApplicationVersion , this.trainingSession.duration).subscribe(data=>{
      console.log(data);
      this.virtualMachines = data;
    },
    error => console.error(error));

  }


  getAvailableTrainers(){

    console.log('getting available Trainers')
    
          let type  = this.trainingSession.type;

          this.trainerService.getAvailableTrainerList(type ,this.trainingSession.startDate  , this.trainingSession.duration).subscribe(data=>{
            this.trainers = data;
            
            console.log( this.trainers);
          },
          error => console.error(error));
    
      }
    
    



  addTrainer(){

    this.trainerIds.push(this.trainerId);   
      console.log("Trainer Id pushed" + this.trainerId);
      console.log("Trainer Ids"  + this.trainerIds);

  }

   removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  removeVirtualMachineID(tempId :number ){

    this.removeItemOnce(this.virtualMachineIds , tempId);

  }


  removeTrainer(tempId :number ){

    this.removeItemOnce(this.trainerIds , tempId);

  }


  onSubmit(){

     
    this.trainingSession.vmIds = this.virtualMachineIds;
    this.trainingSession.trainerids = this.trainerIds;
    console.log(this.trainingSession);
    this.saveTrainingSession();
  }



  setView(view: CalendarView) {
    this.view = view;
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Training event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Meeting',
    },
    
  ]

  activeDayIsOpen: boolean = true;


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
   
    console.log('Day is clicked')
   
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }



  addEvent(temptrainingSession : TrainingSession): void {
    
    //add a for loop and add the duration function as well.


    this.events = [
      ...this.events,
      {
        title: temptrainingSession.sessionName  + ' Duration ' + temptrainingSession.duration,
        start: startOfDay(new Date(temptrainingSession.startDate)),
      },
    ];
  
  }


loadTrainingSession(){

  for(let i = 0 ; i < this.allTrainingSessions.length ; i++ ){
    console.log('adding Training Session');
    this.addEvent(this.allTrainingSessions[i]);
    
  }

}

handleEvent(action: string, event: CalendarEvent): void {
  this.modalData = { event, action };
  this.modal.open(this.modalContent, { size: 'lg' });
}


eventTimesChanged({
  event,
  newStart,
  newEnd,
}: CalendarEventTimesChangedEvent): void {
  this.events = this.events.map((iEvent) => {
    if (iEvent === event) {
      return {
        ...event,
        start: newStart,
        end: newEnd,
      };
    }
    return iEvent;
  });
  this.handleEvent('Dropped or resized', event);
}



}
