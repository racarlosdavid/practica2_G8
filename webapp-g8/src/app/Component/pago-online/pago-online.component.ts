import { Component, OnInit } from '@angular/core';
import { pago } from '../../models/pago';

@Component({
  selector: 'app-pago-online',
  templateUrl: './pago-online.component.html',
  styleUrls: ['./pago-online.component.css']
})
export class PagoOnlineComponent implements OnInit {

  procesarPago: pago = {           
    total:null,              
    numeroTarjeta:null,              
    nombreTitularTarjeta: '',         
    fechaVencimiento: '',  
    cvv: null,  
  };

  constructor() { }

  ngOnInit(): void {
  }

  realizarPago(){
    
    console.log(this.procesarPago.total, this.procesarPago.nombreTitularTarjeta)

  }

}
