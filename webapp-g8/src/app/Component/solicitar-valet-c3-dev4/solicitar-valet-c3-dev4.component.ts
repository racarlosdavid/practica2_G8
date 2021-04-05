import { Component, OnInit } from '@angular/core';
import { Valet } from '../../models/valet';

@Component({
  selector: 'app-solicitar-valet-c3-dev4',
  templateUrl: './solicitar-valet-c3-dev4.component.html',
  styleUrls: ['./solicitar-valet-c3-dev4.component.css']
})
export class SolicitarValetC3Dev4Component implements OnInit {

  numeroL:string;
  horaL:string;
  observacionesL:string;

  numeroS:string;
  horaS:string;
  observacionesS:string;

  constructor() { }

  valet:Valet={
    tipo:null, //1 = llegada y 2 = Saida
    numero:'',
    hora:'',
    observaciones:''
  };

  ngOnInit(): void {
  }

  verificarHoraLlegada(valor:string){
    if(valor == 'Seleccione'){
      alert('Debe seleccionar la hora de llegada!')
      return false
    }
    else{
      this.horaL = valor
      return true
    }
  }
  verificarHoraSalida(valor:string){
    if(valor == 'Seleccione'){
      alert('Debe seleccionar la hora de salida!')
      return false
    }
    else{
      this.horaS = valor
      return true
    }
  }
  //Solicitar valet parking al llegar
  solicitarLlegada(){
    var bandera:Boolean = this.verificarCamposLlegada()
    if(bandera){
      this.valet.tipo = 1
      this.valet.numero = this.numeroL
      this.valet.hora = this.horaL
      this.valet.observaciones = this.observacionesL
      alert("Su solicitud ha sido realizada.")
      return true
    }
    else{
      alert("Debe llenar todos los campos!")
      return false
    }
  }
  verificarCamposLlegada():boolean{
    
    if((<HTMLInputElement>document.getElementById("numeroReservacion")).value == '' || !this.horaL){
      return false
    }else{
      this.numeroL = (<HTMLInputElement>document.getElementById("numeroReservacion")).value
      this.observacionesL = (<HTMLInputElement>document.getElementById("observacionesLlegada")).value
      return true
    }
  }
  //solicitar valet parking al salir
  solicitarSalida(){
    var bandera:boolean = this.verificarCamposSalida();
    if(bandera){
      this.valet.tipo = 2
      this.valet.numero = this.numeroS
      this.valet.hora = this.horaS
      this.valet.observaciones = this.observacionesS
      alert("Su solicitud ha sido realizada.")
      return true
    }
    else{
      alert("Debe llenar todos los campos!")
      return false
    }
  }
  verificarCamposSalida():boolean{
    
    if((<HTMLInputElement>document.getElementById("numeroHabitacion")).value == '' || !this.horaS){
      return false
    }else{
      this.numeroS = (<HTMLInputElement>document.getElementById("numeroHabitacion")).value
      this.observacionesS = (<HTMLInputElement>document.getElementById("observacionesSaida")).value
      return true
    }
  }
}
