import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindev2',
  templateUrl: './logindev2.component.html',
  styleUrls: ['./logindev2.component.css']
})
export class Logindev2Component implements OnInit {

  //Variables para saber el nombre del proyecto
  title = 'Login1';

  //Variables de control
  opselected: string = '0';
  findtips: string [];

  //Variables para recepción
  correo: string = '';
  contra: string = '';
  tipouser: string = '';
  busqueda: string = '';

  //Variables auxiliares
  valdatos: boolean;
  valtipuser: boolean;
  valadmin: boolean;

  //En el constructor se designa el router para redirigir
  constructor(private router: Router) 
  {
    //Inicializar los tips
    this.findtips = ['planes', 'beneficios', 'contacto', 'ayuda', 'viajes', 'registro', 'usuario'];
  }

  ngOnInit(): void {
  }

  //---------Métodos de captura de datos
  //Obtener el dato del selector de tipos de usuario
  Capturatipo()
  {
    //Se tiene el tipo de usuario
    this.tipouser = this.opselected;
  };
  //Obtener los datos de usuario
  Capturadatos(correo, contra)
  {
    //Enviar datos a las variables
    this.correo = correo.value;
    this.contra = contra.value;

    //Llamado a verificadoras de contenido
    this.valdatos = Verifcamposllenos(this.correo, this.contra);
    this.valtipuser = Veriftipousuario(this.tipouser);

    //Si ambas variables son verdaderas se redirige a la ruta respectiva
    if(this.valdatos == true && this.valtipuser == true)
    {
      if(this.tipouser == '1')
      {
        this.router.navigate(['/userpg']);
      }
      else
      {
        //Se verifica que los datos del admin sean los correctos
        this.valadmin = Verifadmi(this.correo, this.contra);

        if(this.valadmin == true)
        {
          this.router.navigate(['/screen2']);
        }
      }      
    }
  };
  //Obtener la búsqueda
  Capturafind(tip)
  {
    //Se busca el string en el array
    this.busqueda = this.Verificarbusqueda(tip);
    alert(this.busqueda);
  };
  //Verificar resultados
  Verificarbusqueda(tipbusqueda)
  {
    //Se asigna a una variable para conversión a minúsculas
    let source = tipbusqueda.value;
    let res: string = 'Búsqueda fallida';

    //Se busca en todo el arreglo
    for(let i = 0; i<this.findtips.length; i++)
    {
      if(source.toLowerCase() == this.findtips[i])
      {
        res = 'Búsqueda exitosa';
      }
    }

    return res;
  }
  //Ir a registrar usuario
  IraRegistrarUsuario()
  {
    this.router.navigate(['/registrarUsuario']);
  }
}

//---------Funciones de verificación
//Función de verificación de campos
function Verifcamposllenos(correo:string, contra:string): boolean
{
  //Campos deben ser distintos de null
  if(correo == '' || contra == '')
  {
    alert('Es necesario llenar todos los campos');
    return false;
  }
  else
  {
    return true;
  }
};
//Función de verificacion de usuario
function Veriftipousuario(tipousuario:string): boolean
{
  //El tipo usuario debe ser 1 o 2
  if(tipousuario =='1' || tipousuario == '2')
  {
    return true;
  }
  else
  {
    alert("Debe seleccionar un tipo de usuario");
    return false;
  }
};
//Función de verificación de admin
function Verifadmi(correo:string, contra:string): boolean
{
  if(correo == 'admin' && contra == '1234')
  {
    return true;
  }
  else
  {
    alert("No coinciden los datos");
    return false;
  }
};