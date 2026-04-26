import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root',
})
export class CitaService {

  private _citas: Cita[] = [
    new Cita(1, "No hay que ir para atrás ni para darse impulso", "Lao Tsé"),
    new Cita(2, "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse", "Charles Baudelaire"),
    new Cita(3, "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad", "Albert Einstein")

  ]

  constructor() { }

  agregarCita(c: Cita) {
    this._citas.push(c)
  }

  obtenerCitas(): Cita[] {
    return this._citas
  }

  eliminarCita(id: number) {
    this._citas = this._citas.filter(c => c.id !== id);

    return this._citas;
  }

}
