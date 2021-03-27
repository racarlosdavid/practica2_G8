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

  //Variables de control para el login
  correo: string = '';
  contra: string = '';
  tipouser: string = '';
  opselected: string = '0';

  //En el constructor se designa el router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Obtener el dato del selector de tipos de usuario
  Capturatipo()
  {
    //Se tiene el tipo de usuario
    this.tipouser = this.opselected;
  }

  //Obtener los datos de usuario
  Capturadatos(correo, contra)
  {
    //Enviar datos a las variables
    this.correo = correo.value;
    this.contra = contra.value;

    //Dependiendo del usuario se redirige a otra pestaña
    if(this.correo == '' || this.contra == '')
    {
      alert('Debe completar todos los campos')
    }
    else
    {
      //Ruta Admin
      if(this.tipouser == '2')
      {
        this.router.navigate(['/screen2']);
      }
    }    
  }
}
