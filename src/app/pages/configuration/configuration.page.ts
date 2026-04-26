import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonToggle, IonItem } from '@ionic/angular/standalone';
import { ConfigurationService } from 'src/app/servicios/configuration-service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonToggle, IonItem]
})
export class ConfigurationPage implements OnInit {

  constructor(

    public configurationService: ConfigurationService
  ) { }

  ngOnInit() {
  }

  guardarConfiguracion() {
    this.configurationService.guardarConfiguracion(
      this.configurationService.permitirEliminarInicio
    );
  }

}
