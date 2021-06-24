import {Component, OnInit} from '@angular/core';
import {Appointment} from '../types/appointment';
import {AppointmentService} from '../service/appointment-service';

@Component({
  selector: 'app-soon-to-expire',
  templateUrl: './soon-to-expire.component.html',
  styleUrls: ['./soon-to-expire.component.css']
})
export class SoonToExpireComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) {
  }

  appointments: Appointment[] = [];

  displayedColumns: string[] = ['expirationDate', 'made', 'model', 'licenceNo', 'clientName', 'phone', 'email'];

  ngOnInit(): void {
    this.appointmentService.getAllSoonToExpireAppointments().subscribe((response: Appointment[]) => {
      this.appointments = response;
    });
  }

}
