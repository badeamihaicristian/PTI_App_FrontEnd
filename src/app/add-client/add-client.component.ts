import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../types/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private service: ClientService,
              private router: Router) {
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    cardNo: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', Validators.email)
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    const client: Client = {
      id: this.form.value.id,
      name: this.form.value.name,
      cardNo: this.form.value.cardNo,
      phone: this.form.value.phone,
      email: this.form.value.email
    };
    this.service.addClient(client).subscribe();
    this.router.navigateByUrl('clients');
  }
}
