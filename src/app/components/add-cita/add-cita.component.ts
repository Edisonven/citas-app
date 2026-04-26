import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonInput, IonButtons,
  IonButton, IonText, IonIcon
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList,
    IonItem, IonInput, IonButtons, IonButton, IonText, FormsModule, IonIcon]
})
export class AddCitaComponent implements OnInit {
  @Output() nuevaCita = new EventEmitter<Cita>();

  citaStr: string = ""
  autorStr: string = ""
  id = 0

  constructor() { }

  ngOnInit() { }


  addNewCita() {
    const cita = new Cita(
      Date.now(),
      this.citaStr,
      this.autorStr
    );

    this.nuevaCita.emit(cita);

    this.citaStr = "";
    this.autorStr = "";
  }
}
