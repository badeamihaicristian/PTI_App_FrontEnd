import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../types/appointment';
import {Report} from '../types/report';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  public getAllFutureAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>('http://localhost:8080/appointments/all');
  }

  public getAllPastAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>('http://localhost:8080/appointments/allPast');
  }

  public getAllSoonToExpireAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>('http://localhost:8080/appointments/allSoonToExpire');
  }

  public getAppointmentById(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>('http://localhost:8080/appointments/getById/' + id);
  }

  public addAppointment(appointment: Appointment): Observable<void> {
    return this.httpClient.post<void>('http://localhost:8080/appointments/add', appointment);
  }

  public updateAppointment(id: number, appointment: Appointment): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8080/appointments/update/' + id, appointment);
  }

  public deleteAppointment(id: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/appointments/delete/' + id);
  }

  public finalizeAppointment(id: number, appointment: Appointment): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8080/appointments/finalize/' + id, appointment);
  }

  public getReport(startDate: string, endDate: string): Observable<Report> {
    return this.httpClient.get<Report>('http://localhost:8080/appointments/report/' + startDate + endDate);
  }
}
