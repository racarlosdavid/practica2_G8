import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  //Datos para la tabla
  name = ['Us1', 'Us2', 'Us3'];
  cor = ['Cor', 'Cor2', 'Cor3'];
  cont = ['Con1', 'Con2', 'Con3'];


  constructor() { }

  ngOnInit(): void {
  }

  //Método para agregar datos
  addData(newName, newCorreo, newContra)
    {
        //Agregar los datos a la lista
        this.name.push(newName.value);
        this.cor.push(newCorreo.value);
        this.cont.push(newContra.value);
        
        //Limpiar el input
        newName.value = '';
        newCorreo.value = '';
        newContra.value = '';

        //Para que no se refresque la página
        return false
    }

}
