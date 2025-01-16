import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Class/patient';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private httpClient :HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1/patients"

   getPatientList():Observable<Patient[]>{
     return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
   }

   delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
   }

   createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}`,patient);
   }
}
