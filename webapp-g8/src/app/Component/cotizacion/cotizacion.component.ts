import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})

export class CotizacionComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar','subtotal'];

  datos: Articulo[] = [
    new Articulo("Habitacion doble 1 noche", 250,1,this.calcularsubTotal(250,1)),
    new Articulo("Bebida gaseosa 600 mL", 8,2,this.calcularsubTotal(8,2)),
    new Articulo("Uso de gimnsaio 1 dia", 55,1,this.calcularsubTotal(55,1))
  ];

  articuloselect: Articulo = new Articulo("", 0,0,0);

  @ViewChild(MatTable) tabla1: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    var verificar:boolean=this.verificarCampos(this.articuloselect.nombre,this.articuloselect.precio,this.articuloselect.cantidad);
    if (verificar){
      this.datos.push(new Articulo(this.articuloselect.nombre, this.articuloselect.precio, this.articuloselect.cantidad, this.calcularsubTotal(this.articuloselect.precio, this.articuloselect.cantidad)));
      this.tabla1.renderRows();
      this.articuloselect = new Articulo("", 0,0,0);  
    }else{
      alert('Debe llenar todos los campos');
    }
  }

  mostrarTotal(){
    alert('El total es de Q'+this.sumaSubtotales(this.datos));
  }

  verificarCampos(valor1,valor2,valor3): boolean {
    if (
      (valor1==null)||(valor2==null)||(valor3==null)||(valor1=='')||(valor2==0)||(valor3==0)
    ){
      return false;
    }else{
      return true;
    }
  }

  calcularsubTotal(valor1:number, valor2:number): number {
    return valor1*valor2;
  }

  sumaSubtotales(datos: Articulo[]):number{
    var resultado:number=0;
    for (let i in datos) {
      resultado+=datos[i].subtotal;
    }
    return resultado;
  }


}

export class Articulo {
  constructor(public nombre: string, public precio: number, public cantidad:number, public subtotal:number) {
  }
}
