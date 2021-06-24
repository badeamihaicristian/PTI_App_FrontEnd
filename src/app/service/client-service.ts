import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../types/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  public getAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('http://localhost:8080/clients/all');
  }

  public getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>('http://localhost:8080/clients/getById/' + id);
  }

  public addClient(client: Client): Observable<void> {
    return this.httpClient.post<void>('http://localhost:8080/clients/add', client);
  }

  public updateClient(id: number, client: Client): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8080/clients/update/' + id, client);
  }

  public deleteClient(id: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/clients/delete/' + id);
  }
}
