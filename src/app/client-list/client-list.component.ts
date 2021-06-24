import {Component, OnInit} from '@angular/core';
import {Client} from '../types/client';
import {ClientService} from '../service/client-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService,
              private router: Router) {
  }

  clients: Client[] = [];

  displayedColumns: string[] = ['name', 'cardNo', 'phone', 'email', 'actions'];

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((response: Client[]) => {
      this.clients = response;
    });
  }

  btnClickAdd(): void {
    this.router.navigateByUrl('clients/add');
  }

  onEdit(id: number): void {
    this.router.navigate(['clients/update', id]);
  }

  onDelete(id: number): void {
    if (confirm('Esti sigur ca vrei sa stergi clientul?')) {
      this.clientService.deleteClient(id).subscribe(() => {
          window.location.reload();
        },
        error => {
          alert('Clientul nu se poate sterge deoarece este asociat unei/unor programari');
        });
    }
  }
}
