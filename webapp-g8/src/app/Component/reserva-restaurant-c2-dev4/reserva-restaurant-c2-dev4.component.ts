import { Component, OnInit } from '@angular/core';
import { ReservaRestaurant } from '../../models/reserva-restaurant';

@Component({
  selector: 'app-reserva-restaurant-c2-dev4',
  templateUrl: './reserva-restaurant-c2-dev4.component.html',
  styleUrls: ['./reserva-restaurant-c2-dev4.component.css']
})
export class ReservaRestaurantC2Dev4Component implements OnInit {

  cubiertos:number;
  dia:number;
  mes:number;
  anio:number;
  hora:string;

  constructor() { }

  reservacion:ReservaRestaurant={
    cubiertos:null,
    dia:null,
    mes:null,
    anio:null,
    hora:''
  };

  ngOnInit(): void {
  }

  verificarCubiertos(valor:string){
    if(valor == 'Seleccione'){
      alert('Debe seleccionar la cantidad de cubiertos en la mesa!')
    }
    else{
      this.cubiertos = Number(valor)
    }
  }
  verificarDia(valor:string){
    if(valor == 'Día'){
      alert('Debe seleccionar un día!')
    }
    else{
      this.dia = Number(valor)
    }
  }
  verificarMes(valor:string){
    if(valor == 'Mes'){
      alert('Debe seleccionar un mes!')
    }
    else{
      this.mes = Number(valor)
    }
  }
  verificarAnio(valor:string){
    if(valor == 'Año'){
      alert('Debe seleccionar el año!')
    }
    else{
      this.anio = Number(valor)
    }
  }
  verificarHora(valor:string){
    if(valor == 'Seleccione'){
      alert('Debe seleccionar la hora!')
    }
    else{
      this.hora = valor
    }
  }
  reservar(){
    if(this.verificarCampos()){
      this.reservacion.cubiertos = this.cubiertos
      this.reservacion.dia = this.dia
      this.reservacion.mes = this.mes
      this.reservacion.anio = this.anio
      this.reservacion.hora = this.hora
      alert("Su reservación ha sido realizada.")
    }
    else{
      alert("Debe llenar todos los campos!")
    }
    
  }
  verificarCampos():boolean{

    if(!this.cubiertos || !this.dia || !this.mes || !this.anio || !this.hora){
      return false
    }else{
      return true
    }
  }

}
