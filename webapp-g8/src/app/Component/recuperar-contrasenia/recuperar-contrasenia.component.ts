import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent implements OnInit {

  usermail: "";
  constructor() { }

  validarCorreo(correo:string):number{
    var res = correo.match('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
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

  enviarPassPorEmail(){
    if(this.usermail != undefined){
      alert("Se enviara una contrasenia temporal a "+this.usermail);
      /*
      return this.userService.sendEmail(this.usermail).subscribe(
        res => {
          if (res.mensaje == "contraseña enviada con exito" ) {
            this.router.navigate(['/']);
          } 
         
        },
        err => {
          console.error(err)
        }
        
      );
        */
    }else {
      alert("Ingrese correo para recuperar la contraseña");
    }
  
  }

  ngOnInit(): void {
  }

}
