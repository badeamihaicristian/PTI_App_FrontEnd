import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAppointmentsListComponent } from './past-appointments-list.component';

describe('PastAppointmentsListComponent', () => {
  let component: PastAppointmentsListComponent;
  let fixture: ComponentFixture<PastAppointmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastAppointmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastAppointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
