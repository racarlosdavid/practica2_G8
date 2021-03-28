import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { user } from '../../models/user';

function verificarCampos(valor1:number, valor2:string,valor3:string,valor4:string): boolean {
  if (
    (valor1==0)||(valor2=="")||(valor3=="")||(valor4=="")
  ){
    return false;
  }else{
    return true;
  }
  
}

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

//mostrar los datos del usuario abajo del boton
  usuario: user = {        
    cui : 2505311230101,              
    nombre : 'Juan',          
    apellido : 'Perez',         
    fecha_nacimiento : new Date("1988-03-16"),
    correo : 'juanp88@gmail.com',
    contrasenia : ''
  };

  cui2:number=0;
  nombre2:string="";
  apellido2:string="";
  correo2:string="";
  

  constructor() { }

  ngOnInit(): void {
  }


  editarUsuario(){
    var verificar:boolean = verificarCampos(this.cui2,this.nombre2,this.apellido2,this.correo2);
    if (verificar){
      this.usuario.cui=this.cui2;
      this.usuario.nombre=this.nombre2;
      this.usuario.apellido=this.apellido2;
      this.usuario.correo=this.correo2;
    }else{
      alert('Ingrese todos los campos');
    }
  }

  
}

