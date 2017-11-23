import { Evento } from './evento';
import { BoletosPedido } from './boletos-pedido';

export class ResumenCompra {
	subtotal: number = 0;
	comisiones: number = 0;
	total_venta: number = 0;
	num_boletos: number = 0;
	id_event: number;

	constructor(evento: Evento, boletos: Array<BoletosPedido>) {
		for(let boleto of boletos){
			this.subtotal = this.subtotal + (boleto.cantidad * boleto.costo); 
			this.num_boletos = this.num_boletos + boleto.cantidad;
		}
		let totalComisiones = 0;
		for(let comision of evento.comisiones){
			if(comision.porcentaje){
				totalComisiones = this.subtotal * comision.porcentaje;
			}else if(comision.cantidad){
				totalComisiones = comision.cantidad;
			}	
		}
		if(totalComisiones){
			this.comisiones = totalComisiones;
		}
		this.total_venta = this.comisiones = this.subtotal;
		this.id_event = evento.id_evento;
	}
}
