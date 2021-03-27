import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  insertarUsuario() {
    console.log(this.RESERVA.fecha_ingreso);
    console.log(this.date.toDateString());
    console.log(this.date.toISOString().substring(0,10));
  }

}
