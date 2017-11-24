import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';

import { Comision } from '../../models/comision';
import { Evento } from '../../models/evento';

import { LocalStorageWorker } from '../../helpers/local-storage';
import { Organizador } from '../../models/organizador';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventForm: FormGroup;
  _localStorage: LocalStorageWorker;
  organizadores: Array<Organizador>;
  comisiones: Array<any>;
  eventos: Array<Evento>;
  model: Evento;

  constructor(fb: FormBuilder) {
    this.organizadores = new Array<Organizador>();
    this._localStorage = new LocalStorageWorker();
    this.comisiones = new Array<any>();
    this.eventos = new Array<Evento>();
    this.model = new Evento(null, 0, "", null, "", null, null,null);

    this.eventForm = fb.group({
      'nombre': ['', Validators.required],
      'fecha': ['', Validators.required],
      'lugar': ['', Validators.required],
      'horario': ['', Validators.required],
      'id_organizador': ['', Validators.required],
      'costo': ['',Validators.required]
    });
  }

  ngOnInit() {
    this.organizadores = this.getOrganizadores();
    this.eventos = this.getEventos();
    this.getComisionesDefault();
  }

  saveEvent() {
    if (this.eventForm.dirty && this.eventForm.valid) {
      let new_comisiones = [];
      for (let comision of this.comisiones) {
        if (comision.active) {
          new_comisiones.push(comision.comision);
        }
      }
      this.model.id_evento = this.eventos.length + 1;
      
      this.model.comisiones = new_comisiones;

      this.eventos.push(new Evento(this.model.id_evento, 
        this.model.id_organizador, 
        this.model.descripcion, 
        this.model.fecha, 
        this.model.lugar, 
        this.model.horario, 
        this.model.comisiones,
        this.model.costo));

      this._localStorage.add("eventos", this.eventos);
      this.eventForm.reset();
      this.getComisionesDefault();
    }
  }

  getOrganizadores(): any {
    if (this._localStorage.get("organizadores")) {
      return this._localStorage.get("organizadores")
    } else {
      return []
    }
  }

  getComisionesDefault() {
    let comisiones = this.getComisiones();
    this.comisiones = new Array<any>();
    if (comisiones.length > 0) {
      for (let comision of comisiones) {
        this.comisiones.push({ active: true, comision: comision });
      }
    }
  }

  getComisiones(): any {
    if (this._localStorage.get("comisiones")) {
      return this._localStorage.get("comisiones");
    } else {
      return [];
    }
  }

  getEventos(): any {
    if (this._localStorage.get("eventos")) {
      return this._localStorage.get("eventos");
    } else {
      return [];
    }
  }

  onChange(id) {
    let organizador = this.organizadores.filter(organizador => {
      return organizador.id_organizador === parseInt(id);
    });
    this.comisiones = [];
    if (organizador.length > 0) {
      for (let comision of organizador[0].comisiones) {
        this.comisiones.push({ active: true, comision: comision });
      }
    } else {
      this.getComisionesDefault();
    }

  }
}
