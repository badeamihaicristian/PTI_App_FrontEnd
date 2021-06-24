import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../types/vehicle';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) {
  }

  vehicles: Vehicle[] = [];

  displayedColumns: string[] = ['licenceNo', 'chassisNo', 'category', 'owner',
    'made', 'model', 'color', 'year', 'drivetrain', 'fuelType', 'actions'];

  ngOnInit(): void {
    this.dataService.getAllVehicles().subscribe((response: Vehicle[]) => {
      this.vehicles = response;
    });
  }

  onAdd(): void {
    this.router.navigateByUrl('vehicles/add');
  }

  onEdit(id: number): void {
    this.router.navigate(['vehicles/update', id]);
  }

  onDelete(id: number): void {
    if (confirm('Esti sigur ca vrei sa stergi vehiculul?')) {
      this.dataService.deleteVehicle(id).subscribe(() => {
          window.location.reload();
        },
        error => {
          alert('Vehiculul nu se poate sterge deoarece este asociat unei/unor programari');
        });
    }
  }
}
