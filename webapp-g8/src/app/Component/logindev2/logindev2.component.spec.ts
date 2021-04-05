import { Component } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import { Observable, of } from 'rxjs';
import { Logindev2Component } from './logindev2.component';

//Pruebas con funciones simples
describe('Logindev2Component', () => {
  let component: Logindev2Component;
  let fixture: ComponentFixture<Logindev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          }
        }
      ],
      declarations: [ Logindev2Component ]
    })
    .compileComponents();
  });

  //Inicializo la instancia dentro de beforeEach
    //Este componente permite llamar a todo lo que tengamos publico en nuestro componente
    //Login1 inicializa un router por lo que enviaremos un parámetro null
  beforeEach(() => {
    fixture = TestBed.createComponent(Logindev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Cada caso de prueba se escribe con la palabra it
  //Primero recibe un string con la descripción de la prueba, luego un callback para la prueba unitaria
  it('La variable title debe contener el nombre -Login1-', () => 
  {
    //Variable que va a amacenar el resultado del component.title
    let mivariable : string = component.title;
    
    //Para evaluar se coloca el expect
    //expect(Mi_variable) es igual a 'Pruebas'
    expect(mivariable).toEqual('Login1');
  });
  //-------------Prueba para llamado de Verificarbusqueda() .toHaveBeenCalled()
  it('Caso de prueba para: Verificarbusqueda(), se espera que sea llamado el método', () => 
  {
    //Espía
    let llamado = spyOn(component, 'Verificarbusqueda');
    
    //Ejecución del método
    component.Verificarbusqueda('Prueba');

    expect(llamado).toHaveBeenCalled();
  });
  //-------------Prueba para Capturatipo() .no.toBe()
  it('Caso de prueba para: Capturatipo(), se espera que el tipo de usuario no sea null', () =>
  {
    //Variable de prueba
    let tipouser = component.tipouser;

    //Ejecución del método
    component.Capturatipo();
    tipouser = component.opselected;

    //Luego de la ejecución del método el tipouser debe cambiar sí o sí
    expect(tipouser).not.toBe('');
  });
  //-------------Prueba para Verificarbusqueda() .toBe()
  it('Caso de prueba para: Verificarbusqueda(), se espera recibir "Búsqueda exitosa"', () => 
  {
    //Parámetros para la función
    let param1: string = 'planes';
    //Variable de control
    let resultado: string = 'Búsqueda exitosa';

    expect(component.Verificarbusqueda(param1)).toBe(resultado);
  });
  //-------------Prueba para Verifcamposllenos() .toBeFalsy()
  it('Caso de prueba para: Verifcamposllenos(), se espera recibir falso', () =>
  {
    expect(component.Verifcamposllenos('', '')).toBeFalsy();
  });
  //-------------Prueba para Veriftipousuario() toHaveBeenCalledWith()
  it('Caso de prueba para Veriftipousuario(), se espera una alerta con mensaje específico por usuario inválido', () =>
  {
    //Objeto espía
    var spy = spyOn(window, 'alert').and.callThrough();

    //Se prueba el componente con tipo de usuario inválido
    let s = component.Veriftipousuario('0');

    //Se espera respuesta de alerta
    expect(spy).toHaveBeenCalledWith("Debe seleccionar un tipo de usuario");
  });
  //-------------Prueba para Verifadmi() .toBeThruty
  it('Caso de prueba para Verifadmi(), se espera recibir true', () => 
  {
    expect(component.Verifadmi('admin', '1234')).toBeTruthy();
  });
});

//Pruebas con Mocks
describe('Logindev2Component - Mock', () => {

  //Creación de la clase Mock
  class MockDatos extends Logindev2Component {
    //Se reescriben los métodos a utilizar con los valores de retorno esperados
    Verifcamposllenos()
    {
      return true;
    }
    Veriftipousuario()
    {
      return true;
    }
    Verificarbusqueda(tipbusqueda)
    {
      return 'Búsqueda exitosa';
    }
  }

  //Se busca declarar una instancia de cada componente a usar
  let component: Logindev2Component;
  let mock: MockDatos;
  
  //Se agregan los proveedores a utilizar
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: MockDatos
        }
      ],
      declarations: [ Logindev2Component ]
    })
    .compileComponents();
    
    //Inicializo la instancia dentro de beforeEach
    //Este componente permite llamar a todo lo que tengamos publico en nuestro componente
    //Login1 inicializa un router por lo que enviaremos un parámetro null
    
    mock = new MockDatos(null);
    component = new Logindev2Component(null);
  });

  //-------------Prueba para Verifadmi() .toHaveBeenCalled
  it('Caso de prueba con Mock para: Verifadmi(), se espera que el método sea llamado', () => 
  {
      //Objeto espía para ver si se llama al objeto
      var spy = spyOn(mock, 'Verifadmi');

      //Se coloca el valor que permite acceder al método
      mock.tipouser = '2';
      //Se llama el método contenedor de validaciones y datos
      mock.Capturadatos('1', '1');      
  
      //Se espera respuesta de alerta si fue llamado
      expect(spy).toHaveBeenCalled();
      
    //Se llaman los datos que retornan los métodos reescritos en la clase mock
    /*mock.valdatos = mock.Verifcamposllenos();
    mock.valtipuser = mock.Veriftipousuario();
    mock.tipouser = '2';
    expect(component.Verifadmi('admin', '1234')).toBeTruthy();*/
    /*mock.valdatos = true;
    mock.valtipuser = true;
    mock.tipouser = '2';
    expect(component.Verifadmi).toHaveBeenCalled*/
  });
  //-------------Prueba para Verificarbusqueda() .toHaveBeenCalled
  it('Caso de prueba con Mock para: Verificarbusqueda(), se espera una alerta con mensaje de búsqueda exitosa', () => 
  {
    //Objeto espía
    var spy = spyOn(window, 'alert').and.callThrough();

    //Se prueba el componente con tipo de usuario inválido
    mock.Capturafind('Siempre true');

    //Se espera respuesta de alerta
    expect(spy).toHaveBeenCalledWith("Búsqueda exitosa"); 
  });
});

//Prueba para navegación por Router
describe('Logindev2Component - Router', () => {
  
  //Instanciamos variables de control
  //ComponentFixture es un manejador para probar el entorno de nuestro componente
  let fixture: ComponentFixture<Logindev2Component>;
  //Servicio de router
  let router: Router;

  //En los imports se agrega el RouterTestingModule con sus rutas
  beforeEach(async () => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ Logindev2Component ]
    })
    .compileComponents();

    //Inicializamos las variables de control
    //Indicamos a fixture el componente a manejar testeo
    fixture = TestBed.createComponent(Logindev2Component);
    //TestBed otorga el comportamiento del router
    router = TestBed.get(Router);
  });

  //-------------Prueba para Capturadatos() .toHaveBeenCalledWith
  it('Prueba para: Capturadatos(), se espera que router redireccione a "/userpg"', () => 
  {
    //Se llama una instancia de nuestro componente
    const component = fixture.componentInstance;
    //Objeto espía para nuestro objeto router.navigate
    const routerSpy = spyOn(router, 'navigate');

    //Condiciones para que nuestro código llegue al router.navigate
    component.tipouser = '1';
    component.Capturadatos('usertest', '1234');

    expect(routerSpy).toHaveBeenCalledWith(['/userpg']);
  });
});
