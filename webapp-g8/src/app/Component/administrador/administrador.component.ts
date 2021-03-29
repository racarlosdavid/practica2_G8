import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  title = 'TheAdmin';

  //Variables para recepción
  nombre: string = '';
  correo: string = '';
  contra: string = '';
  contra2: string = '';
  nombrecliente: string = ''
  clientdatos: string = '';

  res_id: string[];
  res_cliente: string[];
  res_numh: string[];
  res_tiempo: string[];
  res_costo: string[];

  //Variables auxiliares
  valdatos: boolean;
  valcontra: number;
  valadmin: boolean;
  valuser: number;

  //Datos para la tabla
  list_nom = ['Us1', 'Us2', 'Us3'];
  list_cor = ['Cor', 'Cor2', 'Cor3'];
  list_cont = ['Con1', 'Con2', 'Con3'];
  list_cont2 = ['Con1', 'Con2', 'Con3'];

  //En el constructor se designa el router para redirigir
  constructor(private router: Router) 
  {
    //Inicializar los tips
    this.res_id = ['1', '2', '5', '8', '15'];
    this.res_cliente = ['Amelia', 'Gabriel', 'John', 'Spyke', 'Gabriel'];
    this.res_numh = ['2', '3', '4', '1', '2'];
    this.res_tiempo = ['8', '4', '2', '5', '5'];
    this.res_costo = ['900', '1100', '1500', '300', '500'];  
  }

  ngOnInit(): void {
  }

  //---------Métodos de captura de datos
  //Método para agregar usuarios
  addData(newName, newCorreo, newContra, newContra2)
  {
    //Enviar datos a las variables
    this.nombre = newName.value;
    this.correo = newCorreo.value;
    this.contra = newContra.value;
    this.contra2 = newContra2.value;

    //Llamado a verificadoras de contenido
    this.valdatos = this.Verifcamposllenos(this.nombre, this.correo, this.contra, this.contra2);
    this.valcontra = this.Verifcontra(this.contra, this.contra2);

    //Si ambas variables son verdaderas se capturan los valores
    if(this.valdatos == true && this.valcontra == 1)
    {
      //Agregar los datos a la lista
      this.list_nom.push(newName.value);
      this.list_cor.push(newCorreo.value);
      this.list_cont.push(newContra.value);
      this.list_cont2.push(newContra2.value);
      
      //Limpiar el input
      /*newName.value = '';
      newCorreo.value = '';
      newContra.value = '';
      newContra2.value = '';*/
    }
    
    //Para que no se refresque la página
    return false
  }
  //Método para ver reservaciones
  VerReserva(vercliente)
  {
    //Enviar datos a la variable
    this.clientdatos = vercliente.value;

    //Verificadora de contenido
    this.valuser = this.Verifnuser(this.clientdatos);

    //Si es verdadero es porque si se llenaron las cajas
    if(this.valuser == 2)
    {
      let existe = false;

      //El primer ciclo for verifica que el usuario exista
      for (let j = 0; j < this.res_id.length; j++) 
      {
        if(vercliente.value == this.res_cliente[j])
        {
          existe = true;
        }
      }

      if(existe == true)
      {
        for(let i = 0; i<this.res_id.length; i++)
        {
          if(vercliente.value != this.res_cliente[i])
          {
            this.res_id.splice(i, 1);
            this.res_cliente.splice(i, 1);
            this.res_numh.splice(i, 1);
            this.res_tiempo.splice(i, 1);
            this.res_costo.splice(i, 1);
            i--;
          }
        }
      }
      else
      {
        alert("No se encontró el cliente");
      }      
    }
  }
  //Método para regresar al login
  Cerrarsesion()
  {
    this.router.navigate(['']);
  }
  //---------Funciones de verificación
  //Función de verificación de campos
  Verifcamposllenos(nombre:string, correo:string, contra:string, contra2:string): boolean
  {
    //Campos deben ser distintos de null
    if(nombre == '' || correo == '' || contra == '' || contra2 == '')
    {
      alert('Es necesario llenar todos los campos');
      return false;
    }
    else
    {
      return true;
    }
  };
  //Función para comparar las contraseñas
  Verifcontra(contra:string, contra2:string): number
  {
    //Deben ser iguales
    if(contra == contra2)
    {
      return 1;
    }
    else
    {
      alert("Las contraseñas no coinciden")
      return 3;
    }
  };
  //Función para verificar campo nombre
  Verifnuser(nom:string): number
  {
    //Debe ser distinto de null
    if(nom == '')
    {
      alert("Debe ingresar un nombre");
      return 0;
    }
    else
    {
      return 2;
    }
  };
}

