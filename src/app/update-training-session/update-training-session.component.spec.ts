import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingSessionComponent } from './update-training-session.component';

describe('UpdateTrainingSessionComponent', () => {
  let component: UpdateTrainingSessionComponent;
  let fixture: ComponentFixture<UpdateTrainingSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrainingSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
