import { Component } from '@angular/core';
import { LocalStorageWorker } from './helpers/local-storage';
import { Comision } from './models/comision';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _localStorage: LocalStorageWorker;

  constructor() {
    this._localStorage = new LocalStorageWorker();
    if(!this._localStorage.get("comisiones")){
      let _comision = new Comision(1,"Comision boletia",7,0);
      this._localStorage.add("comisiones",[_comision]);
    }
  }

}
