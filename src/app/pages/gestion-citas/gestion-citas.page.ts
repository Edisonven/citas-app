import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonBackButton
} from '@ionic/angular/standalone';
import { CitasListComponent } from 'src/app/components/citas-list/citas-list.component';
import { AddCitaComponent } from 'src/app/components/add-cita/add-cita.component';
import { CitaService } from 'src/app/servicios/cita-service';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, IonButtons, IonBackButton
    , CitasListComponent, AddCitaComponent]
})
export class GestionCitasPage implements OnInit {

  citasList: Cita[] = []

  constructor(
    private citaService: CitaService
  ) { }

  ngOnInit() {

    this.citasList = this.citaService.obtenerCitas();
  }

  eliminarCita(id: number) {
    this.citasList = this.citaService.eliminarCita(id);
  }

  agregarCita(cita: Cita) {
    this.citaService.agregarCita(cita);
    this.citasList = this.citaService.obtenerCitas();
  }

}
