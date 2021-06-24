import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../service/appointment-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../types/vehicle';
import {DataService} from '../service/data.service';
import {Client} from '../types/client';
import {ClientService} from '../service/client-service';
import {Appointment} from '../types/appointment';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService,
              private router: Router,
              private vehicleService: DataService,
              private clientService: ClientService) {
  }

  minDate = new Date();
  vehicles: Vehicle[] = [];
  clients: Client[] = [];

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    vehicle: new FormControl(null, Validators.required),
    client: new FormControl(null, Validators.required),
    appointmentDate: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    expirationDate: new FormControl(''),
    results: new FormControl(''),
    comments: new FormControl('')
  });

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((response: Vehicle[]) => {
      this.vehicles = response;
    });
    this.clientService.getAllClients().subscribe((response: Client[]) => {
      this.clients = response;
    });
  }

  onSubmit(): void {
    var appointment: Appointment = {};
    let auxDate: Date = this.form.value.appointmentDate;
    auxDate.setDate(auxDate.getDate() + 1);
    appointment.client = this.form.value.client;
    appointment.vehicle = this.form.value.vehicle;
    appointment.id = this.form.value.id;
    appointment.appointmentDate = auxDate.toJSON().slice(0, 10);
    appointment.hour = this.form.value.hour;
    appointment.results = this.form.value.results;
    appointment.comments = this.form.value.comments;
    if (this.form.value.expirationDate === '') {
      appointment.expirationDate = 'nespecificat';
    } else {
      auxDate = this.form.value.expirationDate;
      auxDate.setDate(auxDate.getDate() + 1);
      appointment.expirationDate = auxDate.toJSON().slice(0, 10);
    }
    this.appointmentService.addAppointment(appointment).subscribe();
    this.router.navigateByUrl('appointments');
  }
}
