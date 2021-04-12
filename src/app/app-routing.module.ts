import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { TrainerComponent } from './trainer/trainer.component';
import { DepManagerComponent } from './dep-manager/dep-manager.component';
import { SignupComponent } from './signup/signup.component';
import { CreateTrainingSessionComponent } from './create-training-session/create-training-session.component';
import { TrainingSessionListComponent } from './training-session-list/training-session-list.component';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { UpdateTrainingSessionComponent } from './update-training-session/update-training-session.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddVirtualMachineComponent } from './add-virtual-machine/add-virtual-machine.component';
import { VirtualMachineListComponent } from './virtual-machine-list/virtual-machine-list.component';
import { AuthGuard } from './services/auth.guard';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeavehomeComponent } from './components/leavehome/leavehome.component';
import { AddComponent } from './components/task/add/add.component';
import { MailComponent } from './components/task/mail/mail.component';
import { SubordinatesdetailsComponent } from './components/task/subordinatesdetails/subordinatesdetails.component';
import { LeavemanageComponent } from './leavemanage/leavemanage.component';
import { LeaveloginComponent } from './components/leavelogin/leavelogin.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'trainerlist', component: TrainerListComponent },
  { path: 'depmanager', component: DepManagerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-training-session', component: CreateTrainingSessionComponent, canActivate: [AuthGuard] },
  { path: 'trainingSessions', component: TrainingSessionListComponent },
  { path: 'training-session-details/:id', component: TrainingSessionDetailsComponent },
  { path: 'update-training-session/:id', component: UpdateTrainingSessionComponent },
  { path: 'add-virtual-machines', component: AddVirtualMachineComponent },
  { path: 'virtualMachines', component: VirtualMachineListComponent },
  { path: 'leavedetails', component: LeavemanageComponent },
  {
    path: 'leavemanagement', component: LeaveApplicationComponent,
    children: [
      { path: '', component: LeaveloginComponent, },
      { path: 'home', component: LeavehomeComponent, },
      {
        path: 'task',
        children: [
          {
            path: 'add',
            component: AddComponent,
          },
          {
            path: '',
            redirectTo: '/',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'task',
        children: [
          {
            path: 'mail',
            component: MailComponent,
          },
        ],
      },
      {
        path: 'task',
        children: [
          {
            path: 'subordinates',
            component: SubordinatesdetailsComponent,
          },
        ],
      },

    ],
  },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
