
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { TrainingSession } from '../class/training-session';
import { Event } from '../class/event';
import { VirtualMachine } from '../class/virtual-machine';
import { TrainingSessionService } from '../services/training-session.service';
import { VirtualMachineService } from '../services/virtual-machine.service';

import {

  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};



@Component({
  selector: 'app-virtual-machine-details',
  templateUrl: './virtual-machine-details.component.html',
  providers: [],
  styleUrls: ['./virtual-machine-details.component.css']
})
export class VirtualMachineDetailsComponent implements OnInit {

   @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;




  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: Event;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();



  activeDayIsOpen: boolean = true;




  id:number;
  virtualMachine: VirtualMachine = new VirtualMachine();
  trainingSessions: TrainingSession[]=[];

  events: Event[]=[];


  temp: Event = new Event();



  constructor(private modal: NgbModal, private route:ActivatedRoute, private trainingSessionService: TrainingSessionService, private virtualMachineService: VirtualMachineService, private router:Router) {
    this.events = new Array();
   }

  ngOnInit(): void {


    this.id=this.route.snapshot.params['id'];
    //this.start_Date=this.route.snapshot.params['startDate'];

    this.virtualMachine= new VirtualMachine();
    this.virtualMachineService.getVirtualMachinebyId(this.id).subscribe( data=>{
      this.virtualMachine= data;
      console.log(this.virtualMachine.trainingSessions);
    });





    console.log(this.events);


  }

  showEvents(){

   // var tempEvents: CalendarEvent[]=new Array(this.virtualMachine.trainingSessions.length);







   /* for(let i = 0; i<this.virtualMachine.trainingSessions.length-1; i++){



      this.temp.id = this.virtualMachine.trainingSessions[i].id;
      this.temp.start = this.virtualMachine.trainingSessions[i].startDate;
      this.temp.end = this.virtualMachine.trainingSessions[i].endDate;
      this.temp.title = this.virtualMachine.trainingSessions[i].sessionName;

      this.temp.allDay=true;
     // this.temp.resizable.afterEnd=true;
     // this.temp.resizable.beforeStart=true;
      this.temp.draggable=true;
      this.temp.color= colors.green;
      this.temp.actions=this.actions;

      this.events[i]=this.temp;
    }

    console.log(this.events);
    console.log(this.events.length);*/

   this.events = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        color: colors.red,
        actions: this.actions,
        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
      {
        start: startOfDay(new Date()),
        title: 'An event with no end date',
        color: colors.yellow,
        actions: this.actions,
      },
      {
        start: subDays(endOfMonth(new Date()), 3),
        end: addDays(endOfMonth(new Date()), 3),
        title: 'A long event that spans 2 months',
        color: colors.blue,
        allDay: true,
      },
      {
        start: addHours(startOfDay(new Date()), 2),
        end: addHours(new Date(), 2),
        title: 'A draggable and resizable event',
        color: colors.yellow,
        actions: this.actions,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
    ];

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
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

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  setView(view: CalendarView) {
    this.view = view;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
