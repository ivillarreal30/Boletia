import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';

import { Comision } from '../../models/comision';
import { LocalStorageWorker } from '../../helpers/local-storage';
import { Organizador } from '../../models/organizador';


@Component({
  selector: 'app-organizadores',
  templateUrl: './organizadores.component.html',
  styleUrls: ['./organizadores.component.css']
})
export class OrganizadoresComponent implements OnInit {

  organizadorForm: FormGroup;
  _localStorage: LocalStorageWorker;


  comisionesOrg: Array<any>;

  organizadores: Array<Organizador>;

  name: string = "";

  constructor(fb: FormBuilder) {
    this._localStorage = new LocalStorageWorker();
    this.organizadores = new Array<Organizador>();

    this.organizadorForm = fb.group({
      'name': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getComisionesDefault();
    this.organizadores = this.getOrganizadores();
  }

  saveOrganizador() {
    if (this.organizadorForm.dirty && this.organizadorForm.valid) {
      let comisiones = [];
      for (let comisionOrg of this.comisionesOrg) {
        if (comisionOrg.active) {
          comisiones.push(comisionOrg.comision);
        }
      }
      this.organizadores.push(new Organizador(this.organizadores.length + 1, this.name, comisiones));
      this._localStorage.add("organizadores", this.organizadores);
      this.organizadorForm.reset();
      this.getComisionesDefault();
    }
  }
  getComisionesDefault() {
    let comisiones = this.getComisiones();
    this.comisionesOrg = new Array<any>();
    if (comisiones.length > 0) {
      for (let comision of comisiones) {
        this.comisionesOrg.push({ active: true, comision: comision });
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

  getOrganizadores(): any {
    if (this._localStorage.get("organizadores")) {
      return this._localStorage.get("organizadores")
    } else {
      return []
    }
  }
}
