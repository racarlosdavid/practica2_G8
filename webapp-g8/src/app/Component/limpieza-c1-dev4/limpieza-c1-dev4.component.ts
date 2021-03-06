import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limpieza-c1-dev4',
  templateUrl: './limpieza-c1-dev4.component.html',
  styleUrls: ['./limpieza-c1-dev4.component.css']
})
export class LimpiezaC1Dev4Component implements OnInit {

  checkboxValue:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(){
    console.log(this.checkboxValue)
    if(this.checkboxValue == true){
      (<HTMLSelectElement>document.getElementById("empleado")).disabled = true;
      return true
    }else{
      (<HTMLSelectElement>document.getElementById("empleado")).disabled = false;
      return false
    }
  }
  asignarEmpleado(valor:string){
    if(this.checkboxValue && valor != "Seleccione"){
      alert("La habitación ya se encuentra limpia.")
      return false
    }else if(!this.checkboxValue && valor == "Seleccione"){
      alert("Debe seleccionar un empleado")
      return false
    }else{
      alert("Asignado correctamente.")
      return true
    }
  }
}
