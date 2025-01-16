import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Class/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

     private baseUrl = "http://localhost:8080/api/v2";

     getAllAppointments():Observable<Appointment[]>{

        return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)
     }

     delete(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/appointment/${id}`);
     }

     createAppointment(appointment:Appointment):Observable<Appointment>{
      return this.httpClient.post<Appointment>(`${this.baseUrl}/insert`,appointment);
     }
}
