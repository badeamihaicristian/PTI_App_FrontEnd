import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {EditVehicleComponent} from './edit-vehicle/edit-vehicle.component';
import {ClientListComponent} from './client-list/client-list.component';
import {AddClientComponent} from './add-client/add-client.component';
import {FutureAppointmentsListComponent} from './future-appointments-list/future-appointments-list.component';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import {EditAppointmentComponent} from './edit-appointment/edit-appointment.component';
import {PastAppointmentsListComponent} from './past-appointments-list/past-appointments-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {SoonToExpireComponent} from './soon-to-expire/soon-to-expire.component';
import {ReportComponent} from './report/report.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    ClientListComponent,
    AddClientComponent,
    FutureAppointmentsListComponent,
    AddAppointmentComponent,
    EditClientComponent,
    EditAppointmentComponent,
    PastAppointmentsListComponent,
    SoonToExpireComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
