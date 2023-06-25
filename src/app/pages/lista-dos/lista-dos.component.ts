import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario.model';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-lista-dos',
  templateUrl: './lista-dos.component.html',
  styleUrls: ['./lista-dos.component.css']
})
export class ListaDosComponent implements OnInit {

  horarios: Horario[] = [];

  constructor(private allService: AllService) { }


  ngOnInit(): void {
    this.listarHorarios();
  }


  listarHorarios() {
    this.horarios = this.allService.listarHorarios();

    // this.allService.listarHorarios().subscribe((resp) => {
    //   this.usuarios = resp;
    // });
  }
}
