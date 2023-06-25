import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AllService } from '../../services/all.service';

@Component({
  selector: 'app-lista-uno',
  templateUrl: './lista-uno.component.html',
  styleUrls: ['./lista-uno.component.css']
})
export class ListaUnoComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private allService: AllService) { }


  ngOnInit(): void {
    this.listarUsuarios();
  }


  listarUsuarios() {
    this.usuarios = this.allService.listarUsuarios();
    console.log(this.usuarios);

    // this.allService.listarUsuarios().subscribe((resp) => {
    //   this.usuarios = resp;
    // });
  }
}
