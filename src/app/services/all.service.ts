import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Horario } from '../models/horario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  url: string = 'https://22b9-2001-1388-13a7-978c-19c9-31cc-b16c-d56b.sa.ngrok.io';

  constructor(private http: HttpClient) { }

  listarUsuarios() {
    return this.http.get<Usuario[]>(`${this.url}/usuarios`);
  }

  listarHorarios() {
    return this.http.get<Horario[]>(`${this.url}/horarios`);
  }
}
