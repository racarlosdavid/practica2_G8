import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent implements OnInit {

  usermail: "";
  constructor() { }

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
