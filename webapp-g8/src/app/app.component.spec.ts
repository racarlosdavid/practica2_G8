import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  //Se busca declarar una instancia del componente
  let component : AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    //Inicializo la instancia dentro de beforeEach
    //Este componente permite llamar a todo lo que tengamos publico en nuestro componente
    component = new AppComponent();
  });
  
  //Cada caso de prueba se escribe con la palabra it
  //Primero recibe un string con la descripción de la prueba, luego un callback para la prueba unitaria
  it('La variable title de AppComponent debe contener el nombre del proyecto', () =>
  {
    //Variable que va a amacenar el resultado del component.title
    let myvar : string = component.title;

    //Para evaluar se coloca el expect
    //expect(Mi_variable) es igual a 'webapp-g8'
    expect(myvar).toEqual('webapp-g8');
  })
});
