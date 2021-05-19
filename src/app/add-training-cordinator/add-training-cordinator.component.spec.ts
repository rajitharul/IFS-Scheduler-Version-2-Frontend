import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingCordinatorComponent } from './add-training-cordinator.component';

describe('AddTrainingCordinatorComponent', () => {
  let component: AddTrainingCordinatorComponent;
  let fixture: ComponentFixture<AddTrainingCordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingCordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingCordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
