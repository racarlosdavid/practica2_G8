export class Reserva{
    public tipo_habitacion: string;
    public fecha_ingreso:string;
    public fecha_salida: string;
    public cantidad_personas: number;
    public habitacion: number
    constructor(ti_habitacio?:string,fecha_ing?:string,fecha_sal?:string,cantidad?:number,habita?:number){
        this.tipo_habitacion=ti_habitacio;
        this.fecha_ingreso=fecha_ing;
        this.fecha_salida=fecha_sal;
        this.cantidad_personas=cantidad;
        this.habitacion=habita;
    }

    veficarcampos():boolean{
        if(this.tipo_habitacion != "" && this.fecha_salida!="" && this.cantidad_personas!=0 && this.habitacion!=0)return true;
        return false;
    }

    verificarfechas():boolean{
        let anio_ing:number = +this.fecha_ingreso.substring(0,4);
        let mes_ing:number = +this.fecha_ingreso.substring(5,7);
        let day_ing:number =+this.fecha_ingreso.substring(8,10);
        let anio_sal:number = +this.fecha_salida.substring(0,4);
        let mes_sal:number = +this.fecha_salida.substring(5,7);
        let day_sal:number =+this.fecha_salida.substring(8,10);
        if(anio_sal >= anio_ing){
          if(anio_sal > anio_ing){
            return true
          }else {
            if(mes_sal>=mes_ing){
              if(mes_sal > mes_ing){
                return true;
              }else{
                if(day_sal > day_ing) return true;
                return false;
              }
            }else{
              return false;
            }
          }
        }else{
          return false;
        }
    }

    verificarCantidadPersonas():number{
        if(this.cantidad_personas >0){
          return this.cantidad_personas;
        }
        return 0;
    }
}