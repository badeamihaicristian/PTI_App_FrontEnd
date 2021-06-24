import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../types/client';
import {ClientService} from '../service/client-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  constructor(private service: ClientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  clientId!: number;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    cardNo: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', Validators.email)
  });

  ngOnInit(): void {
    var client: Client = {};
    this.clientId = this.activatedRoute.snapshot.params.id;
    this.service.getClientById(this.clientId).subscribe(response => {
      client = response;
      this.populateForm(client);
    });
  }

  populateForm(client: Client): void {
    this.form.setValue({
      id: client.id,
      name: client.name,
      cardNo: client.cardNo,
      phone: client.phone,
      email: client.email
    });
  }

  onSubmit(): void {
    const client: Client = {
      id: this.form.value.id,
      name: this.form.value.name,
      cardNo: this.form.value.cardNo,
      phone: this.form.value.phone,
      email: this.form.value.email
    };
    this.service.updateClient(this.clientId, client).subscribe();
    this.router.navigateByUrl('clients');
  }
}

