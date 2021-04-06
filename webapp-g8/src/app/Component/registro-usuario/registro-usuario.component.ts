import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: user = {        
    cui : undefined,              
    nombre : '',          
    apellido : '',         
    fecha_nacimiento : null,
    correo : '',
    contrasenia : ''
  };
  elUsuarioExiste = false;
  elCUIesNumero = false;

  constructor() { }

  ngOnInit(): void {
  }
 
  validarCorreo():number{
    console.log("Validar el correo -> ",this.usuario.correo)
    var res = this.usuario.correo.match('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
   
    if ( res != null && res.length > 0 ) 
      return res.length;
    return 0;
  }

  comprobarNingunCampoVacio():boolean{
    console.log("Data user ",this.usuario)
    var bandera = false;
    if(this.usuario.cui != undefined && this.usuario.nombre  != '' && this.usuario.apellido  != '' && this.usuario.fecha_nacimiento  != null && this.usuario.correo  != '' && this.usuario.contrasenia  != '' ){
      bandera = true;
    }
    return bandera;
  }

  comprobarUsuarioYaRegistrado(){
    return this.elUsuarioExiste;
  }

  comprobarCUIesNumero(){
    console.log("Validar el cui -> ",this.usuario.cui)
    if (isNaN(this.usuario.cui)) {
    
    }else{
      this.elCUIesNumero = true;
    }
    return this.elCUIesNumero;
  }
 

}
