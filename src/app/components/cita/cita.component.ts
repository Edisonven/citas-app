import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IonCard, IonCardContent, IonButton, IonIcon, IonItem } from '@ionic/angular/standalone';
import { Cita } from 'src/app/modelo/cita';
import { CitaService } from 'src/app/servicios/cita-service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { ConfigurationService } from 'src/app/servicios/configuration-service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, CommonModule, IonButton, IonIcon, IonItem]
})
export class CitaComponent implements OnInit {

  citaAleatoria!: Cita;

  constructor(
    private citaService: CitaService,
    public configurationService: ConfigurationService
  ) {

    addIcons({ trash });
  }

  ngOnInit() {
    this.mostrarCitaAleatoria();
  }

  mostrarCitaAleatoria() {
    const citas = this.citaService.obtenerCitas()
    const indiceRandom = Math.floor(Math.random() * citas.length);
    this.citaAleatoria = citas[indiceRandom];
  }

  eliminarCita() {
    this.citaService.eliminarCita(this.citaAleatoria.id);
    this.mostrarCitaAleatoria();
  }

}

