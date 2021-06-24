import {Component, OnInit} from '@angular/core';
import {Appointment} from '../types/appointment';
import {AppointmentService} from '../service/appointment-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-future-appointments-list',
  templateUrl: './future-appointments-list.component.html',
  styleUrls: ['./future-appointments-list.component.css']
})
export class FutureAppointmentsListComponent implements OnInit {

  constructor(private appointmentService: AppointmentService,
              private router: Router) {
  }

  appointments: Appointment[] = [];

  displayedColumns: string[] = ['licenceNo', 'clientName', 'appointmentDate', 'hour',
    'expirationDate', 'results', 'comments', 'actions'];

  ngOnInit(): void {
    this.appointmentService.getAllFutureAppointments().subscribe((response: Appointment[]) => {
      this.appointments = response;
    });
  }

  btnClickAdd(): void {
    this.router.navigateByUrl('appointments/add');
  }

  onEdit(id: number): void {
    this.router.navigate(['appointments/update', id]);
  }

  onDelete(id: number): void {
    if (confirm('Esti sigur ca vrei sa stergi programarea?')) {
      this.appointmentService.deleteAppointment(id).subscribe();
      window.location.reload();
    }
  }
}
