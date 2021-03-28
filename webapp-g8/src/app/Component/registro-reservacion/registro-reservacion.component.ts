import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../models/Reserva.model'

@Component({
  selector: 'app-registro-reservacion',
  templateUrl: './registro-reservacion.component.html',
  styleUrls: ['./registro-reservacion.component.css']
})
export class RegistroReservacionComponent implements OnInit {

  date : Date = new Date();
  RESERVA: any = {
    tipo_habitacion: "",
    fecha_ingreso:this.date.toISOString().substring(0,10),
    fecha_salida: "",
    cantidad_personas: 0,
    habitacion: 0
  }
  HABITACIONES: any = 
  [
  {numero:0,nombre:"habitacion1"},
  {numero:12,nombre:"habitacion12"},
  {numero:34,nombre:"habitacion34"}
  ];
  RESERVACIONES:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  insertarReserva() {
    let auxreserva = new Reserva(this.RESERVA.tipo_habitacion,this.RESERVA.fecha_ingreso,this.RESERVA.fecha_salida,this.RESERVA.cantidad_personas,this.RESERVA.habitacion);
    if(auxreserva.veficarcampos() && auxreserva.verificarfechas() && auxreserva.verificarCantidadPersonas()>0){
      this.RESERVACIONES.push(auxreserva);
    }
  }

}
