import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class CitaService {



  sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)

  constructor() { }

  private async _iniciarPluginWeb(): Promise<void> {
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if (jeepSqliteEl != null) {
      await this.sqlite.initWebStore()
    }
  }

  agregarCita(c: Cita) {

  }

  obtenerCitas(): Cita[] {
    return []
  }

  eliminarCita(id: number) {

  }

}
