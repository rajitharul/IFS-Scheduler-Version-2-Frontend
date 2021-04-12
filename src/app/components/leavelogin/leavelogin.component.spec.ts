import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveloginComponent } from './leavelogin.component';

describe('LeaveloginComponent', () => {
  let component: LeaveloginComponent;
  let fixture: ComponentFixture<LeaveloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
