import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingRoomComponent } from './add-training-room.component';

describe('AddTrainingRoomComponent', () => {
  let component: AddTrainingRoomComponent;
  let fixture: ComponentFixture<AddTrainingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
