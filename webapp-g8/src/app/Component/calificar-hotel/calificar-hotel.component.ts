import { Component, OnInit } from '@angular/core';

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
    var verificar:boolean=this.verificarCampos(this.puntaje,this.opinion);
    if (verificar){
        this.calificacion=this.crearCalificacion(this.puntaje,this.opinion);
        alert('Calificacion: '+this.calificacion.punteo+' estrellas\n\n'
        +this.calificacion.comentario);  
    }else{
      alert('Debe ingresar una calificacion entre 1 y 5 entrellas, y debe dejar una opinion sobre el hotel');
    }
  }

  verificarCampos(valor1,valor2): boolean {
    if (
      (valor1==null)||(valor2==null)||(valor2=='')
    ){
      return false;
    }else{
      return true;
    }
  }
  
  crearCalificacion(x1:number,x2:string):Calificacion{
    return new Calificacion(x1,x2);
  }
}
export class Calificacion {
  constructor(public punteo: number, public comentario: string) {
  }
}

