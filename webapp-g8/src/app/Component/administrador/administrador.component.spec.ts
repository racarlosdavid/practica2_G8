import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AdministradorComponent } from './administrador.component';

//Pruebas normales
describe('AdministradorComponent', () => {
  //Instanciamos variables de control
  //ComponentFixture es un manejador para probar el entorno de nuestro componente
  let component: AdministradorComponent;
  let fixture: ComponentFixture<AdministradorComponent>;
  //Servicio de router
  let router: Router;

  //En los imports se agrega el RouterTestingModule con sus rutas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule
      ],
      declarations: [ AdministradorComponent ]
    })
    .compileComponents();
  });

  //Inicializamos las variables de control
  beforeEach(() => {
    //Indicamos a fixture el componente a manejar testeo
    fixture = TestBed.createComponent(AdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //TestBed otorga el comportamiento del router
    router = TestBed.get(Router);
  });
  //-------------Prueba para Capturadatos() .toHaveBeenCalledWith
  it('Prueba para Cerrarsesion(), se espera que router redireccione a /', () => 
  {
    //Se llama una instancia de nuestro componente
    const component = fixture.componentInstance;
    //Objeto espía para nuestro objeto router.navigate
    const routerSpy = spyOn(router, 'navigate');

    //Condiciones para que nuestro código llegue al router.navigate
    component.Cerrarsesion();

    expect(routerSpy).toHaveBeenCalledWith(['']);
  });
  //-------------Prueba para Verifnuser() .toBeGreatherThan()
  it('Caso de prueba para: Verifnuser(), se espera que el número de retorno sea mayor que 0', () =>
  {
    //Variable de prueba
    let numprueba = component.Verifnuser('Usertest');

    //Luego de la ejecución del método el número de retorno debe ser mayor que 0
    expect(numprueba).toBeGreaterThan(0);
  });
  //-------------Prueba para Verifcontra() .toBeLessThan()
  it('Caso de prueba para: Verifcontra(), se espera que el número de retorno sea menor que 3', () =>
  {
    //Variable de prueba
    let numprueba = component.Verifcontra('contra', 'contra');

    //Luego de la ejecución del método el número de retorno debe ser mayor que 0
    expect(numprueba).toBeLessThan(4);
  });
  //-------------Prueba para Verificarbusqueda() .toContain()
  it('Caso de prueba para: Verificarbusqueda(), se espera que el arreglo contenga el dato ingresado en el "input"', () => 
  {
    //Una constante almacenará los componentes
    const fix = TestBed.createComponent(AdministradorComponent);
    //Detección de cambios en los componentes
    fix.detectChanges();
    //Lo que se hará en los cambios
    fix.whenStable().then(() =>
    {
      //Se manda a llamar un componente específico
      let input = fix.debugElement.query(By.css('#vercliente'));
      //Se le coloca el valor a nuestro componente input
      input.nativeElement.value = 'Amelia';
      let el = input.nativeElement;
    });   

    //Se prueba el componente con  un dato random
    component.VerReserva('a');

    //Se espera que el arreglo contenga el dato ingresado
    expect(component.res_cliente).toContain('Amelia');
    /*expect(component.res_id).toContain('1');
    expect(component.res_numh).toContain('2');
    expect(component.res_tiempo).toContain('8');
    expect(component.res_costo).toContain('900');*/
  });
});
