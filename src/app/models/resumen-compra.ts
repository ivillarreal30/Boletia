import { Evento } from './evento';
import { BoletosPedido } from './boletos-pedido';

export class ResumenCompra {
	subtotal: number = 0;
	comisiones: number = 0;
	total_venta: number = 0;
	num_boletos: number = 0;
	id_event: number;

	constructor(evento: Evento, boletos: Array<BoletosPedido>) {
		if (evento !== null && boletos !== null) {
			let cantidadTotal = 0;	
			for (let boleto of boletos) {
				cantidadTotal = cantidadTotal + boleto.cantidad;
				this.subtotal = this.subtotal + (boleto.cantidad * boleto.costo);
				this.num_boletos = this.num_boletos + boleto.cantidad;
			}
			let totalComisiones = 0;
			for (let comision of evento.comisiones) {
				if ( parseInt(comision.porcentaje.toString()) > 0) {
					totalComisiones = totalComisiones + (this.subtotal * (parseFloat(parseFloat(comision.porcentaje.toString()).toFixed(2)) / 100));
				} else if ( parseInt(comision.cantidad.toString()) > 0) {
					totalComisiones = totalComisiones + (cantidadTotal *  parseInt(comision.cantidad.toString()));
				}
			}
			debugger
			if (totalComisiones) {
				this.comisiones = parseFloat(totalComisiones.toFixed(2));
			}
			this.total_venta = this.comisiones + this.subtotal;
			this.id_event = evento.id_evento;
		}
	}
}
