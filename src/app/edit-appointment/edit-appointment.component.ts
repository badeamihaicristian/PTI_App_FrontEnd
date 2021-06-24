import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment} from '../types/appointment';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentService} from '../service/appointment-service';
import {Vehicle} from '../types/vehicle';
import {Client} from '../types/client';
import {DataService} from '../service/data.service';
import {ClientService} from '../service/client-service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private appointmentService: AppointmentService,
              private router: Router,
              private vehicleService: DataService,
              private clientService: ClientService) {
  }

  appointmentID!: number;
  minDate = new Date();
  vehicles: Vehicle[] = [];
  clients: Client[] = [];

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    vehicle: new FormControl('', Validators.required),
    client: new FormControl('', Validators.required),
    appointmentDate: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    expirationDate: new FormControl('', Validators.required),
    results: new FormControl('', Validators.required),
    comments: new FormControl('')
  });

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((response: Vehicle[]) => {
      this.vehicles = response;
    });
    this.clientService.getAllClients().subscribe((response: Client[]) => {
      this.clients = response;
    });
    var appointment: Appointment = {};
    this.appointmentID = this.activatedRoute.snapshot.params.id;
    this.appointmentService.getAppointmentById(this.appointmentID).subscribe((response: Appointment) => {
      appointment = response;
      this.populateForm(appointment);
    });
  }

  populateForm(appointment: Appointment): void {
    this.form.setValue({
      id: appointment.id,
      vehicle: appointment.vehicle,
      client: appointment.client,
      appointmentDate: appointment.appointmentDate,
      hour: appointment.hour,
      expirationDate: appointment.expirationDate,
      results: appointment.results,
      comments: appointment.comments
    });
  }

  onSubmit(): void {
    let auxDate: Date = this.form.value.appointmentDate;
    auxDate.setDate(auxDate.getDate() + 1);
    let appointment: Appointment = {
      id: this.form.value.id,
      vehicle: this.form.value.vehicle,
      client: this.form.value.client,
      hour: this.form.value.hour,
      results: this.form.value.results,
      comments: this.form.value.comments,
      appointmentDate: auxDate.toJSON().slice(0, 10)
      // appointmentDate: this.form.value.appointmentDate.toJSON().slice(0, 10)
    };
    if (this.form.value.expirationDate == null || this.form.value.expirationDate === '' || this.form.value.expirationDate === 'nespecificat') {
      appointment.expirationDate = 'nespecificat';
    } else {
      auxDate = this.form.value.expirationDate;
      auxDate.setDate(auxDate.getDate() + 1);
      appointment.expirationDate = auxDate.toJSON().slice(0, 10);
    }
    this.appointmentService.updateAppointment(this.appointmentID, appointment).subscribe();
    this.router.navigateByUrl('appointments');
  }

  onFinalize(): void {
    let auxDate: Date = this.form.value.appointmentDate;
    auxDate.setDate(auxDate.getDate() + 1);
    let appointment: Appointment = {
      id: this.form.value.id,
      vehicle: this.form.value.vehicle,
      client: this.form.value.client,
      hour: this.form.value.hour,
      results: this.form.value.results,
      comments: this.form.value.comments,
      appointmentDate: auxDate.toJSON().slice(0, 10)
    };
    if (this.form.value.expirationDate == null || this.form.value.expirationDate === '' || this.form.value.expirationDate === 'nespecificat') {
      appointment.expirationDate = 'nespecificat';
    } else {
      auxDate = this.form.value.expirationDate;
      auxDate.setDate(auxDate.getDate() + 1);
      appointment.expirationDate = auxDate.toJSON().slice(0, 10);
    }
    this.appointmentService.finalizeAppointment(this.appointmentID, appointment).subscribe();
  }
}
