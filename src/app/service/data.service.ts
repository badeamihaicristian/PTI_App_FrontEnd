import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../types/vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>('http://localhost:8080/vehicles/all');
  }

  public getVehicleById(id: number): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>('http://localhost:8080/vehicles/getById/' + id);
  }

  public addVehicle(vehicle: Vehicle): Observable<void> {
    return this.httpClient.post<void>('http://localhost:8080/vehicles/add', vehicle);
  }

  public updateVehicle(id: number, vehicle: Vehicle): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8080/vehicles/update/' + id, vehicle);
  }

  public deleteVehicle(id: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/vehicles/delete/' + id);
  }
}
