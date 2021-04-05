import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { EditarUsuarioComponent } from './editar-usuario.component';

describe('EditarUsuarioComponent', () => {
  let editarUsuario: EditarUsuarioComponent;
  let editarUsuario2: EditarUsuarioComponent;
  

  beforeEach(async () => {
    editarUsuario= new EditarUsuarioComponent();
    editarUsuario2= new EditarUsuarioComponent();
  });

  it('Prueba para verificarCampos(): Se espera recibir "true"', async (()=>{
    var x1=2505311230101;
    var x2='ABC';
    var x3='abc';
    var x4='abc123@correo.com';
    
    expect (editarUsuario.verificarCampos(x1,x2,x3,x4)).toEqual(true);
  }));

  it('Prueba para editarUsuario(): Se espera alerta de campos vacios', async (()=>{
    editarUsuario2.cui2=0;
    editarUsuario2.nombre2="";
    editarUsuario2.apellido2="";
    editarUsuario2.correo2="";
    expect (editarUsuario2.editarUsuario()).toEqual( false
    );
  }));

  it('Prueba para editarUsuario(): Se espera actualizacion de datos', async (()=>{
    editarUsuario2.cui2=2505311230101;
    editarUsuario2.nombre2="ABC";
    editarUsuario2.apellido2="abc";
    editarUsuario2.correo2="abc123@correo.com";
    expect (editarUsuario2.editarUsuario()).toEqual(true);
  }));
  
});
