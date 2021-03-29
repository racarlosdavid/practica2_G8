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

//Pruebas con Mocks
describe('AdministradorComponent - Mock', () => {
  //Creación de la clase Mock
  class MockDatos extends AdministradorComponent {
    //Se reescriben los métodos a utilizar con los valores de retorno esperados
    Verifcamposllenos(nombre:string, correo:string, contra:string, contra2:string)
    {
      return true;
    }
    Verifcontra(contra:string, contra2:string)
    {
      return 1;
    }
    Verifnuser(nom:string)
    {
      return 2;
    }
  }
  //Instanciamos variables de control
  //ComponentFixture es un manejador para probar el entorno de nuestro componente
  let component: AdministradorComponent;
  let fixture: ComponentFixture<AdministradorComponent>;
  //Servicio de router
  let router: Router;
  //Nuestro Mock
  let mock: MockDatos;

  //En los imports se agrega el RouterTestingModule con sus rutas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: MockDatos
        }
      ],
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
    //Inicializamos el mock
    mock = new MockDatos(null);
  });
  //-------------Prueba para Verificarbusqueda() .toContain()
  it('Caso de prueba para: VerReserva(), se espera que el arreglo contena el dato indicado', () => 
  {
    const fix = TestBed.createComponent(AdministradorComponent);
    fix.detectChanges();
    fix.whenStable().then(() =>
    {
      let input = fix.debugElement.query(By.css('#vercliente'));
      input.nativeElement.value = 'Amelia';
      let el = input.nativeElement;
      //Se prueba el componente con tipo de usuario inválido
      component.VerReserva('a');
      //Se espera respuesta de alerta si fue llamado
      expect(component.res_cliente).toContain('Amelia');
    });   
  });
  //-------------Prueba para Verifadmi() .toEqual()
  it('Caso de prueba con Mock para Verifadmi(), se espera que se agreguen 5 datos al arreglo para un total de 8 almacenados', () => 
  {
    //Se llama el método mockeado y se le agregan 5 datos extras (total = 8)
    mock.addData('Nombreprueba', 'mail1', '1234', '1234');
    mock.addData('Nombreprueba2', 'mail2', '1234', '1234');
    mock.addData('Nombreprueba3', 'mail3', '1234', '1234');
    mock.addData('Nombreprueba4', 'mail4', '1234', '1234');
    mock.addData('Nombreprueba5', 'mail5', '1234', '1234');

    //Se espera respuesta de alerta si fue llamado
    expect(mock.list_nom.length).toEqual(8);
  });
});