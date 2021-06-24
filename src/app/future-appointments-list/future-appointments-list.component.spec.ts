import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureAppointmentsListComponent } from './future-appointments-list.component';

describe('FutureAppointmentsListComponent', () => {
  let component: FutureAppointmentsListComponent;
  let fixture: ComponentFixture<FutureAppointmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureAppointmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureAppointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
