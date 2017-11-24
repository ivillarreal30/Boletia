import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { LocalStorageWorker } from '../../helpers/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  _localStorage:LocalStorageWorker;

  eventos:Array<Evento>;

  constructor() {
    this.eventos = new Array<Evento>();
    this._localStorage = new LocalStorageWorker();
   }

  ngOnInit() {
    this.eventos = this.getEventos();
  }
  
  getEventos(): any {
    if (this._localStorage.get("eventos")) {
      return this._localStorage.get("eventos");
    } else {
      return [];
    }
  }

}
