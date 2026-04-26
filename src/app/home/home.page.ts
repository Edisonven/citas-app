import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonButton, IonIcon, IonButtons, IonItem, IonFabButton, IonTitle, IonToolbar, IonFab } from '@ionic/angular/standalone';
import { CitaService } from '../servicios/cita-service';
import { Cita } from '../modelo/cita';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { settings, add } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { CitaComponent } from '../components/cita/cita.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonToolbar, IonTitle,
    CitaComponent, IonFab, IonHeader, IonItem,
    IonContent, IonButton, IonIcon, CommonModule,
    RouterModule, IonButtons, IonFabButton,],
})
export class HomePage implements OnInit {
  citas: Cita[] = []

  constructor(
    private citaService: CitaService
  ) {

    addIcons({
      settings, add
    })

  }
  ngOnInit(): void {
    this.citas = this.citaService.obtenerCitas();
  }
}
