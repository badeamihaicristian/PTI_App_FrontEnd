import {Client} from './client';
import {Vehicle} from './vehicle';

export interface Appointment {
  id?: number;
  vehicle?: Vehicle;
  client?: Client;
  appointmentDate?: string;
  hour?: string;
  expirationDate?: string;
  results?: string;
  comments?: string;
}
