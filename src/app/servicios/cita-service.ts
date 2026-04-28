import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root',
})
export class CitaService {

  private STORAGE_KEY = 'citas';

  private _citas: Cita[] = [
    new Cita(1, "No hay que ir para atrás ni para darse impulso", "Lao Tsé"),
    new Cita(2, "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse", "Charles Baudelaire"),
    new Cita(3, "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad", "Albert Einstein")
  ];

  constructor() { }

  async cargarCitas() {
    const { value } = await Preferences.get({
      key: this.STORAGE_KEY
    });

    if (value) {
      const data = JSON.parse(value);

      this._citas = data.map(
        (c: any) => new Cita(
          c.id,
          c.cita,
          c.autor
        )
      );
    } else {
      await this.guardarCitas();
    }
  }

  async guardarCitas() {
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(this._citas)
    });
  }

  async agregarCita(c: Cita) {

    c.id = Date.now();

    this._citas.push(c);

    await this.guardarCitas();
  }

  obtenerCitas(): Cita[] {
    return this._citas;
  }

  async eliminarCita(id: number) {

    this._citas = this._citas.filter(
      c => c.id !== id
    );

    await this.guardarCitas();

    return this._citas;
  }

}