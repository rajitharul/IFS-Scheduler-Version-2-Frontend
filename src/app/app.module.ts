import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { TrainerComponent } from './trainer/trainer.component';
import {AuthInterceptor } from './auth/auth.interceptor';
import { DepManagerComponent } from './dep-manager/dep-manager.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { CreateTrainingSessionComponent } from './create-training-session/create-training-session.component';
import { TrainingSessionListComponent } from './training-session-list/training-session-list.component';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { UpdateTrainingSessionComponent } from './update-training-session/update-training-session.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddVirtualMachineComponent } from './add-virtual-machine/add-virtual-machine.component';
import { VirtualMachineListComponent } from './virtual-machine-list/virtual-machine-list.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeavehomeComponent } from './components/leavehome/leavehome.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/task/list/list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddComponent } from './components/task/add/add.component';
import { MailComponent } from './components/task/mail/mail.component';
import { MaterialModule } from './material/material.module';
import { ShowComponent } from './components/task/show/show.component';
import { SubordinatesdetailsComponent } from './components/task/subordinatesdetails/subordinatesdetails.component';
import { LeavemanageComponent } from './leavemanage/leavemanage.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FooterComponent } from './footer/footer.component';
import { LeaveloginComponent } from './components/leavelogin/leavelogin.component';
import { UpdateVirtualMachineComponent } from './update-virtual-machine/update-virtual-machine.component';
import { VirtualMachineDetailsComponent } from './virtual-machine-details/virtual-machine-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManagerComponent,
    TrainerComponent,
    DepManagerComponent,
    AddTrainerComponent,
    ViewTrainerComponent,
    CreateTrainingSessionComponent,
    TrainingSessionListComponent,
    TrainingSessionDetailsComponent,
    UpdateTrainingSessionComponent,
    TrainerListComponent,
    AddVirtualMachineComponent,
    VirtualMachineListComponent,
    LeaveApplicationComponent,
    LeavehomeComponent,
    ListComponent,
    NavigationComponent,
    AddComponent,
    MailComponent,
    ShowComponent,
    SubordinatesdetailsComponent,
    LeavemanageComponent,
    FooterComponent,
    LeaveloginComponent,
    UpdateVirtualMachineComponent,
    VirtualMachineDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPermissionsModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  exports: [RouterModule, ChartsModule, AppRoutingModule, ReactiveFormsModule,],
  providers: [{provide :HTTP_INTERCEPTORS,useClass : AuthInterceptor, multi :true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SharedModule { }
