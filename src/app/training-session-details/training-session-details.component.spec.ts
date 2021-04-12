import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionDetailsComponent } from './training-session-details.component';

describe('TrainingSessionDetailsComponent', () => {
  let component: TrainingSessionDetailsComponent;
  let fixture: ComponentFixture<TrainingSessionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSessionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
