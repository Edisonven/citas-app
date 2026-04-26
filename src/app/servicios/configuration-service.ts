import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  permitirEliminarInicio: boolean = false;

  constructor() {
    this.cargarConfiguracion();
  }

  async cargarConfiguracion() {
    const { value } = await Preferences.get({
      key: 'permitirEliminarInicio'
    });

    if (value !== null) {
      this.permitirEliminarInicio = JSON.parse(value);
    }
  }

  async guardarConfiguracion(valor: boolean) {
    this.permitirEliminarInicio = valor;

    await Preferences.set({
      key: 'permitirEliminarInicio',
      value: JSON.stringify(valor)
    });
  }

}