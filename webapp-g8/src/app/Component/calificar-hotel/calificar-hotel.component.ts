import { Component, OnInit } from '@angular/core';

function verificarCampos(valor1,valor2): boolean {
  if (
    (valor1==null)||(valor2==null)||(valor2=='')
  ){
    return false;
  }else{
    return true;
  }
}

function crearCalificacion(x1:number,x2:string):Calificacion{
  return new Calificacion(x1,x2);
}

@Component({
  selector: 'app-calificar-hotel',
  templateUrl: './calificar-hotel.component.html',
  styleUrls: ['./calificar-hotel.component.css']
})

export class CalificarHotelComponent {
  puntaje=null;
  opinion=null;

  calificacion=null;

  calificar(){
    var verificar:boolean=verificarCampos(this.puntaje,this.opinion);
    if (verificar){
      alert('Calificacion: '+this.puntaje+' estrellas\n\n'
        +this.opinion);
      
        this.calificacion=crearCalificacion(this.puntaje,this.opinion);
        
    }else{
      alert('Debe ingresar una calificacion entre 1 y 5 entrellas, y debe dejar una opinion sobre el hotel');
    }
  }
}
export class Calificacion {
  constructor(public punteo: number, public comentario: string) {
  }
}

