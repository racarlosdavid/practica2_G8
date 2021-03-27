import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: user = {
                
    cui : null,              
    nombre : '',          
    apellido : '',         
    fecha_nacimiento : null,
    correo : '',
    contrasenia : '',      
  };

  constructor() { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    
    console.log(this.usuario.id, this.usuario)

  }

}
