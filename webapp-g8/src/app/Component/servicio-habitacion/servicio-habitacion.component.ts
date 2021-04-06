import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-habitacion',
  templateUrl: './servicio-habitacion.component.html',
  styleUrls: ['./servicio-habitacion.component.css']
})

export class ServicioHabitacionComponent {
  habitacion=null;
  cantidad=null;
  notas=null;
  total=null;

  habitacion2='Habitacion:';
  cantidad2='Cantidad:';
  producto2='Producto/Servicio';
  precio2='Precio unitario Q:';
  total2='Total Q:';
  notas2='Notas: Ninguno';

  

  productos = [
    {nombre:'Bebida coca cola 600 mL', precio:9},
    {nombre:'Bebida fanta naranja 600Ml', precio:9},
    {nombre:'Bebida sprite 600Ml', precio:9},
    {nombre:'Ensalada de frutas', precio:25},
    {nombre:'Hamburguesa doble', precio:20},
    {nombre:'Hamburguesa sencilla', precio:20},
    {nombre:'Jabon protex 125 g', precio:10},
    {nombre:'Masage de cuello', precio:50},
    {nombre:'Papas fritas', precio:10},
    {nombre:'Pizza personal jamon', precio:25},
    {nombre:'Pizza personal peperonni', precio:25},
    {nombre:'Servicio de limpieza (sin costo adicional)', precio:0},
    {nombre:'Sabanas extra', precio:30},
    {nombre:'Shampoo head and shoulder sobrecito 10 ml', precio:2},
    {nombre:'Shampoo Sedal sobrecito 10 ml', precio:2},
    {nombre:'Sandwich de pollo', precio:15},
    {nombre:'Sandwich de jamon', precio:15},
    {nombre:'Toallas extra', precio:20},
  ];
  seleccionada2: string = this.productos[0].nombre;

  realizarPedido(){
    var verificar:boolean=this.verificarCampos(this.habitacion,this.cantidad);
    if (verificar){
      this.actualizarDatos();
    }else{
      alert('Debe ingresar habitacion y una cantidad');
    }

  }

  verificarCampos(valor1,valor2): boolean {
    if (
      (valor1==null)||(valor2==null)||(valor1=='')||(valor2==0)
    ){
      return false;
    }else{
      return true;
    }
  }
  
  totalPedido(valor1:number, valor2:number): number {
    return valor1*valor2;
  }

  actualizarDatos(){
    for (var _i = 0; _i < this.productos.length; _i++){
      if (this.productos[_i].nombre==this.seleccionada2){
        this.producto2='Producto: '+this.productos[_i].nombre;
        this.precio2='Precio Q: '+this.productos[_i].precio;
        this.total=this.totalPedido(this.productos[_i].precio,this.cantidad);
      }
    }
    
    this.habitacion2='Habitacion: '+this.habitacion;
    this.cantidad2='Cantidad: '+this.cantidad;
    this.total2='Total Q: '+this.total;
    if (this.notas!=null){
      this.notas2='Detalles: '+this.notas;
    }
    alert('Total de Q'+this.total);
  }


}
