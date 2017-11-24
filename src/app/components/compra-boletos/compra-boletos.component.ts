import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageWorker } from '../../helpers/local-storage';
import { Evento } from '../../models/evento';
import { BoletosPedido } from '../../models/boletos-pedido';
import { Comision } from '../../models/comision';
import { ResumenCompra } from '../../models/resumen-compra';

@Component({
  selector: 'app-compra-boletos',
  templateUrl: './compra-boletos.component.html',
  styleUrls: ['./compra-boletos.component.css']
})
export class CompraBoletosComponent implements OnInit {
  eventos: Array<Evento>;
  _localStorage: LocalStorageWorker;
  evento: Evento;
  boletosTotal: BoletosPedido;
  cantidadBoletos: number = 1;
  comisiones: Array<Comision>;
  comision_boletia: Comision;
  resumen_compra: ResumenCompra;
  comision_forma_pago: Comision;
  show:boolean = false;

  constructor(private route: ActivatedRoute, private redirect: Router) {
    this._localStorage = new LocalStorageWorker();
    this.eventos = new Array<Evento>();
    this.comisiones = new Array<Comision>();
    this.evento = new Evento(0, 0, "", null, "", null, null, 0);
    this.comision_boletia = new Comision(0, "", 0, 0);
    this.resumen_compra = new ResumenCompra(null, null);
  }

  ngOnInit() {
    this.eventos = this.getEventos();
    this.eventos[0].comisiones.map(comision => {
      if (comision.descripcion.indexOf("boletia") < 0) {
        this.comisiones.push(comision);
      } else {
        this.comision_boletia = comision;
      }
    });
    this.route.params.subscribe(params => {
      let id = params["id"];
      let evento = this.eventos.filter(evento => {
        return evento.id_evento == parseInt(id);
      });
      if (evento.length > 0) {
        this.evento = evento[0];
      } else {
        alert("No existe el evento");
        this.redirect.navigate(['/home']);
      }
    });
  }

  getEventos(): any {
    if (this._localStorage.get("eventos")) {
      return this._localStorage.get("eventos");
    } else {
      return [];
    }
  }
  changeCantidad(cantidad): void {
    this.show = false;
    this.cantidadBoletos = parseInt(cantidad);
  }

  calcBoletos() {
    this.boletosTotal = new BoletosPedido(this.cantidadBoletos, this.evento.costo);
    this.evento.comisiones = new Array<Comision>(this.comision_boletia);
    this.resumen_compra = new ResumenCompra(this.evento, new Array<BoletosPedido>(this.boletosTotal));
    this.show = true;
    this.comision_forma_pago = null;
  }

  changeFormaPago(id) {
    if (id == "null") {
      this.comision_forma_pago = null;
    } else {
      this.comision_forma_pago = new Comision(null, null, null, null);
      let comisiones = this.comisiones.filter(comision => {
        return comision.id_comision == parseInt(id);
      });
      this.comision_forma_pago = comisiones[0];
      this.evento.comisiones = [];
      this.evento.comisiones.push(this.comision_forma_pago);
      this.evento.comisiones.push(this.comision_boletia);
      this.resumen_compra = new ResumenCompra(this.evento, new Array<BoletosPedido>(this.boletosTotal));
    }
  }

}
