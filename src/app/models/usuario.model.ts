import { Rol } from "./rol.model";

export interface Usuario {
    idUsuario: number;
    nombre: string;
    apellido: string;
    dni: string;
    correo: string;
    direccion: string;
    celular: string;
    rol: Rol;
}