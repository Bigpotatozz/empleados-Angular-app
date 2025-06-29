import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
import { CreateEmpleado } from '../interfaces/create-empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url: string = "https://localhost:7290/api/empleadoes";

  constructor( private httpClient: HttpClient) {}


  getEmpleados(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.url}/`);
  }

  postEmpleados(empleado: CreateEmpleado): Observable<Empleado>{

    return this.httpClient.post<Empleado>(`${this.url}/`, empleado);

  }


}
