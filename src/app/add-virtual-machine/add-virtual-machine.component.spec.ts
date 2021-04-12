import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVirtualMachineComponent } from './add-virtual-machine.component';

describe('AddVirtualMachineComponent', () => {
  let component: AddVirtualMachineComponent;
  let fixture: ComponentFixture<AddVirtualMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVirtualMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVirtualMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
