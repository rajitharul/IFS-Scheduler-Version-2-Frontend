import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVirtualMachineComponent } from './update-virtual-machine.component';

describe('UpdateVirtualMachineComponent', () => {
  let component: UpdateVirtualMachineComponent;
  let fixture: ComponentFixture<UpdateVirtualMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVirtualMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVirtualMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
