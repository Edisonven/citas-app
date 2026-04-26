import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash, addOutline, trashOutline } from 'ionicons/icons';
import { Cita } from 'src/app/modelo/cita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButton, IonIcon, CommonModule]
})
export class CitasListComponent implements OnInit {
  @Input() citas: Cita[] = [];

  @Output() borrarCita = new EventEmitter<number>();

  constructor(

  ) {
    addIcons({ trashOutline, addOutline, trash });
  }

  ngOnInit() { }

  deleteCita(id: number) {
    this.borrarCita.emit(id);

  }
}
