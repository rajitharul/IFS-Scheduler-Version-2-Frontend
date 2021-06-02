import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineDetailsComponent } from './virtual-machine-details.component';

describe('VirtualMachineDetailsComponent', () => {
  let component: VirtualMachineDetailsComponent;
  let fixture: ComponentFixture<VirtualMachineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualMachineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
