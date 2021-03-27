import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-habitacion',
  templateUrl: './registro-habitacion.component.html',
  styleUrls: ['./registro-habitacion.component.css']
})
export class RegistroHabitacionComponent implements OnInit {

  HABITACION: any = {
    tipo_habitacion: "",
    caracteristiacas:"",
    estado: "",
    numero_habitacion: 0,
    piso_habitacion: 0,
    precio_habitacion:0.0
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
  insertarHabitacion() {
  }

}
