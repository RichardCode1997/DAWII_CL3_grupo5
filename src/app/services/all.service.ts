import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Horario } from '../models/horario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  usuarios: Usuario[] = [
    {
      "idUsuario": 1,
      "nombre": "Carlos R",
      "apellido": "Campos",
      "dni": "43888888",
      "correo": "carlos@gmail.com",
      "direccion": "Av La Paz cdra 19, San Miguel",
      "celular": "960114225",
      "rol": {
        "idRol": 1,
        "nombreRol": "Administrador"
      }
    },
    {
      "idUsuario": 2,
      "nombre": "María",
      "apellido": "Gomez",
      "dni": "12345679",
      "correo": "ventas@ejemplo.com",
      "direccion": "Av La Paz cdra 19, San Miguel",
      "celular": "960114225",
      "rol": {
        "idRol": 2,
        "nombreRol": "Supervisor"
      }
    },
    {
      "idUsuario": 3,
      "nombre": "Pedro",
      "apellido": "Lopez",
      "dni": "12345670",
      "correo": "marketing@ejemplo.com",
      "direccion": "Av La Paz cdra 19, San Miguel",
      "celular": "960114225",
      "rol": {
        "idRol": 3,
        "nombreRol": "Empleado"
      }
    },
    {
      "idUsuario": 4,
      "nombre": "Ana",
      "apellido": "Ramirez",
      "dni": "12345671",
      "correo": "rrhh@ejemplo.com",
      "direccion": "Av La Paz cdra 19, San Miguel",
      "celular": "960114225",
      "rol": {
        "idRol": 3,
        "nombreRol": "Empleado"
      }
    },
    {
      "idUsuario": 5,
      "nombre": "Luiz",
      "apellido": "Ramirez",
      "dni": "12345671",
      "correo": "info@ejemplo.com",
      "direccion": "Av La Paz cdra 19, San Miguel",
      "celular": "960114225",
      "rol": {
        "idRol": 3,
        "nombreRol": "Empleado"
      }
    },
    {
      "idUsuario": 7,
      "nombre": "Fatimax",
      "apellido": "Guerra",
      "dni": "12345671",
      "correo": "ft_64@gmail.com",
      "direccion": "Av La Paz cdra 19, San Miguel",
      "celular": "960114225",
      "rol": {
        "idRol": 2,
        "nombreRol": "Supervisor"
      }
    },
    {
      "idUsuario": 8,
      "nombre": "Jesus",
      "apellido": "Eduardo",
      "dni": "76879875",
      "correo": "jisus@gmail.com",
      "direccion": "Av la paz 19",
      "celular": "987876765",
      "rol": {
        "idRol": 2,
        "nombreRol": "Supervisor"
      }
    },
    {
      "idUsuario": 9,
      "nombre": "Jimmy",
      "apellido": "Olazo",
      "dni": "43563443",
      "correo": "joalzo@gmail.com",
      "direccion": "san jose 136, San Miguel",
      "celular": "999888777",
      "rol": {
        "idRol": 2,
        "nombreRol": "Supervisor"
      }
    }
  ]

  horarios: Horario[] = [
    {
      "idHorario": 1,
      "nombre": "Horario Diurno",
      "horaEntrada": "08:00",
      "horaSalida": "18:00"
    },
    {
      "idHorario": 2,
      "nombre": "Horario Nocturno",
      "horaEntrada": "20:00",
      "horaSalida": "06:00"
    },
    {
      "idHorario": 3,
      "nombre": "Horario Especial",
      "horaEntrada": "19:00",
      "horaSalida": "01:00"
    },
    {
      "idHorario": 4,
      "nombre": "Horario Sobre Tiempo",
      "horaEntrada": "17:00",
      "horaSalida": "20:00"
    }
  ]
  constructor(private http: HttpClient
  ) { }

  listarUsuarios() {
    return this.usuarios;
    // return this.http.get<Usuario[]>('');
  }

  listarHorarios() {
    return this.horarios;
    // return this.http.get<Horario[]>('');
  }
}
