import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {EditVehicleComponent} from './edit-vehicle/edit-vehicle.component';
import {ClientListComponent} from './client-list/client-list.component';
import {AddClientComponent} from './add-client/add-client.component';
import {FutureAppointmentsListComponent} from './future-appointments-list/future-appointments-list.component';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import {EditAppointmentComponent} from './edit-appointment/edit-appointment.component';
import {PastAppointmentsListComponent} from './past-appointments-list/past-appointments-list.component';
import {SoonToExpireComponent} from './soon-to-expire/soon-to-expire.component';
import {ReportComponent} from './report/report.component';


const routes: Routes = [
  {path: '', redirectTo: 'appointments', pathMatch: 'full'},
  {path: 'vehicles', component: VehiclesListComponent},
  {path: 'vehicles/add', component: AddVehicleComponent},
  {path: 'vehicles/update/:id', component: EditVehicleComponent},
  {path: 'clients', component: ClientListComponent},
  {path: 'clients/add', component: AddClientComponent},
  {path: 'appointments', component: FutureAppointmentsListComponent},
  {path: 'appointments/add', component: AddAppointmentComponent},
  {path: 'clients/update/:id', component: EditClientComponent},
  {path: 'appointments/update/:id', component: EditAppointmentComponent},
  {path: 'past-appointments', component: PastAppointmentsListComponent},
  {path: 'soon-to-expire', component: SoonToExpireComponent},
  {path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
