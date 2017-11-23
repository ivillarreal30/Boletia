import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';

import { Comision } from '../../models/comision';
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

  constructor(fb: FormBuilder) {
    this.organizadores = new Array<Organizador>();
    this._localStorage = new LocalStorageWorker();
    this.comisiones = new Array<any>();

    this.eventForm = fb.group({
      'nombre': ['', Validators.required],
      'fecha': ['', Validators.required],
      'lugar': ['', Validators.required],
      'horario': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.organizadores = this.getOrganizadores();
    this.getComisionesDefault();
  }

  saveEvent() { }

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

  onChange(id) {
    let organizador = this.organizadores.filter(organizador=>{
      return organizador.id_organizador === parseInt(id);
    });
  }
}
