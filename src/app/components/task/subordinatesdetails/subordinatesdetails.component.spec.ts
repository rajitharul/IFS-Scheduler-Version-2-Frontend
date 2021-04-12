import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinatesdetailsComponent } from './subordinatesdetails.component';

describe('SubordinatesdetailsComponent', () => {
  let component: SubordinatesdetailsComponent;
  let fixture: ComponentFixture<SubordinatesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubordinatesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordinatesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
