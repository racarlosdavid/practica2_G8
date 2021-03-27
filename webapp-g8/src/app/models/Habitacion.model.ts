export class Habitacion{
    public tipo_habitacion:string;
    public caracteristicas:string;
    public estado:string;
    public numero_habitacion:number;
    public piso_habitacion:number;
    public precio_habitacion:number;

    constructor(
        ti_habita?:string,
        caracteristis?:string,
        esta?:string,
        num_habita?:number,
        piso_habita?:number,
        precio_habita?:number
    ){
        this.tipo_habitacion=ti_habita;
        this.caracteristicas=caracteristis;
        this.estado=esta;
        this.numero_habitacion=num_habita;
        this.piso_habitacion=piso_habita;
        this.precio_habitacion=precio_habita;
    }

    verificarcampos():boolean{
        if(this.tipo_habitacion!="" && this.caracteristicas!=""&&this.estado!=""&&this.numero_habitacion>0&&this.piso_habitacion>0 && this.precio_habitacion>0)
        return true;
        return false;
    }

    getestadohabitacion():string{
        return "Habitacion en:"+this.estado;
    }
    correlativoEstado(estad:string):number{
        if(estad.localeCompare("libre") ===0){
            return 1;
        }else if(estad.localeCompare("ocupado")===0){
            return 2;
        }else if(estad.localeCompare("limpieza")){
            return 3;
        }else{
            return 0;
        }
    }
}