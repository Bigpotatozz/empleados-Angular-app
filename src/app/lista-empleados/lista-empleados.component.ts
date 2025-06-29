import { Component } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../interfaces/empleado';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-empleados',
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {

  empleados: Empleado[] = [];
  constructor(private empleadoService: EmpleadoService){
    this.getEmpleados();
  }

  getEmpleados(){

    this.empleadoService.getEmpleados().subscribe({
        next: (res: any) => {

          console.log(res);
          this.empleados = res;

         
        },
        error: (e) => {
          console.log(e);
        }

    });
  }

}
