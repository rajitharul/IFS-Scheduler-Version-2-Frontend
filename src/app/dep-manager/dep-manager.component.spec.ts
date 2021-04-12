import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepManagerComponent } from './dep-manager.component';

describe('DepManagerComponent', () => {
  let component: DepManagerComponent;
  let fixture: ComponentFixture<DepManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
