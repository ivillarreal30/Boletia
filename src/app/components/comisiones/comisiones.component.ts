import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comision } from '../../models/comision';
import { LocalStorageWorker } from '../../helpers/local-storage';

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent implements OnInit {

  comisiones: Array<Comision>;
  _localStorage: LocalStorageWorker;
  comisionForm: FormGroup;
  model: Comision;


  constructor(fb: FormBuilder) {
    this._localStorage = new LocalStorageWorker();
    this.getComisiones();
    this.model = new Comision(this.comisiones ? this.comisiones.length + 1 : 1, "", null, null);

    this.comisionForm = fb.group({
      'descripcion': ['', Validators.required],
      'porcentaje': ['', Validators.required],
      'cantidad': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  saveComision() {
    if (this.comisionForm.dirty && this.comisionForm.valid) {
      debugger
      if(!this.comisiones){
        this.comisiones = new Array<Comision>();
      }
      this.comisiones.push(this.model);
      this._localStorage.add("comisiones", this.comisiones);
      this.model = new Comision(this.comisiones.length + 1, "", null, null);
      this.comisionForm.reset();
    }
  }
  getComisiones(): void {
    if (this._localStorage.get("comisiones")) {
      this.comisiones = this._localStorage.get("comisiones");
    } else {
      this.comisiones = null
    }
  }
}
