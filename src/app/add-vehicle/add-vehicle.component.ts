import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../service/data.service';
import {Vehicle} from '../types/vehicle';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  constructor(private service: DataService,
              private router: Router) {
  }

  vehicles: Vehicle[] = [];

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    licenceNo: new FormControl('', Validators.required),
    chassisNo: new FormControl(''),
    category: new FormControl(''),
    owner: new FormControl(''),
    made: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    year: new FormControl(''),
    drivetrain: new FormControl(''),
    fuelType: new FormControl('')
  });

  ngOnInit(): void {
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
    this.service.addVehicle(vehicle).subscribe();
    this.router.navigateByUrl('vehicles');
  }
}
