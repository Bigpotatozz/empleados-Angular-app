import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../interfaces/empleado';
import { CreateEmpleado } from '../interfaces/create-empleado';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nombre: string = "";
  correo: string = "";
  telefono: string = "";
  fechaNacimiento: string = "";
  sexo:string = ""

  

  constructor(private empleadoService: EmpleadoService){}


  registrarEmpleado(name: string, email: string, phone: string, birthdate: string, gender:string){

    const empleado: CreateEmpleado = {
      nombre: name,
      correo: email,
      telefono: phone,
      fechaNacimiento: birthdate,
      sexo: gender
    }

    console.log(empleado);

    this.empleadoService.postEmpleados(empleado).subscribe({

      next: (res) => {
        console.log("Empleado insertado")
      },
      error: (e) => {
        console.log(e);
      }
    });
    
  }


}
