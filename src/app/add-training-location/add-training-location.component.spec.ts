import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingLocationComponent } from './add-training-location.component';

describe('AddTrainingLocationComponent', () => {
  let component: AddTrainingLocationComponent;
  let fixture: ComponentFixture<AddTrainingLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
