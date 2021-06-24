import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../service/appointment-service';
import {Appointment} from '../types/appointment';

@Component({
  selector: 'app-past-appointments-list',
  templateUrl: './past-appointments-list.component.html',
  styleUrls: ['./past-appointments-list.component.css']
})
export class PastAppointmentsListComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) {
  }

  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.appointmentService.getAllPastAppointments().subscribe((response: Appointment[]) => {
      this.appointments = response;
    });
  }
}

