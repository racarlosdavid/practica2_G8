import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/Habitacion.model'

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
  HABITACIONES: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  insertarHabitacion() {
    let auxhabit = new Habitacion(this.HABITACION.tipo_habitacion,this.HABITACION.caracteristicas,this.HABITACION.estado
      ,this.HABITACION.numero_habitacion,this.HABITACION.piso_habitacion,this.HABITACION.precio_habitacion);
    if(auxhabit.verificarcampos()){
      this.HABITACIONES.push(auxhabit);
    }
  }

}
