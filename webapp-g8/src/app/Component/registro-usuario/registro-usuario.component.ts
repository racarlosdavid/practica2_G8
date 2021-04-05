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
  
  setUser(Usu:user){
    this.usuario = Usu;
  }

  registrarUsuario(){
    console.log("El usuario ", this.usuario.nombre," se ha registrado con exito")
  }

  validarCorreo():number{
    console.log("Validar el correo -> ",this.usuario.correo)
    var res = this.usuario.correo.match('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
    console.log(res+" "+res.length);
    
    if ( res != null && res.length > 0 ) 
      return res.length;
    return 0;
  }

  validadCampoVacio(email:string):boolean{
    if(email != undefined){
      return false;
    }else {
      return true;
    }
  }

  comprobarNingunCampoVacio():boolean{
    var bandera = true;
    if(this.usuario.cui == undefined || this.usuario.nombre  == undefined || this.usuario.apellido  == undefined 
      || this.usuario.fecha_nacimiento  == undefined || this.usuario.correo  == undefined || this.usuario.correo  == undefined ){
      bandera = false;
    }
    return bandera;
  }

  comprobarUsuarioYaRegistrado(){
    return this.elUsuarioExiste;
  }

  comprobarCUIesNumero(){
    console.log("Validar el cui -> ",this.usuario.cui)
    if (isNaN(this.usuario.cui)) {
      this.elCUIesNumero = false;
    }else{
      this.elCUIesNumero = true;
    }
    return this.elCUIesNumero;
  }
 

}
