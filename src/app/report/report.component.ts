import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Report} from '../types/report';
import {AppointmentService} from '../service/appointment-service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) {
  }

  maxDate = new Date();
  report?: Report;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  ngOnInit(): void {
  }

  generateReport(): void {
    this.appointmentService.getReport(this.range.value.start.toJSON().slice(0, 10), this.range.value.end.toJSON().slice(0, 10))
      .subscribe(response => {
      this.report = response;
    });
  }
}
