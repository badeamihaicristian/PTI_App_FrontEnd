import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {Vehicle} from '../types/vehicle';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  constructor(private service: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  vehicleId!: number;

  form = new FormGroup({
    id: new FormControl(null),
    licenceNo: new FormControl('', Validators.required),
    owner: new FormControl(''),
    made: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    chassisNo: new FormControl(''),
    color: new FormControl(''),
    category: new FormControl(''),
    drivetrain: new FormControl(''),
    fuelType: new FormControl('')
  });

  ngOnInit(): void {
    var vehicle: Vehicle = {};
    this.vehicleId = this.activatedRoute.snapshot.params.id;
    this.service.getVehicleById(this.vehicleId).subscribe(response => {
      vehicle = response;
      this.populateForm(vehicle);
    });
  }

  populateForm(vehicle: Vehicle): void {
    this.form.setValue({
      id: vehicle.id,
      licenceNo: vehicle.licenceNo,
      owner: vehicle.owner,
      made: vehicle.made,
      model: vehicle.model,
      year: vehicle.year,
      chassisNo: vehicle.chassisNo,
      color: vehicle.color,
      category: vehicle.category,
      drivetrain: vehicle.drivetrain,
      fuelType: vehicle.fuelType
    });
  }

  onSubmit(): void {
    const vehicle: Vehicle = {
      id: this.form.value.id,
      licenceNo: this.form.value.licenceNo,
      chassisNo: this.form.value.chassisNo,
      category: this.form.value.category,
      owner: this.form.value.owner,
      made: this.form.value.made,
      model: this.form.value.model,
      color: this.form.value.color,
      year: this.form.value.year,
      drivetrain: this.form.value.drivetrain,
      fuelType: this.form.value.fuelType,
    };
    this.service.updateVehicle(this.vehicleId, vehicle).subscribe();
    this.router.navigateByUrl('vehicles');
  }
}
