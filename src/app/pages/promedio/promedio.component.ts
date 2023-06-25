import { Component } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent {
  resultado: string = '';
  calificacion1: number | null = null;
  calificacion2: number | null = null;
  calificacion3: number | null = null;

  calcularPromedio() {
    if (this.calificacion1 !== null && this.calificacion2 !== null && this.calificacion3 !== null) {
      const promedio = (this.calificacion1 + this.calificacion2 + this.calificacion3) / 3;
      this.resultado = 'El promedio es: ' + promedio.toFixed(2);
    } else {
      this.resultado = 'Por favor, ingrese todas las calificaciones.';
    }
  }
}
