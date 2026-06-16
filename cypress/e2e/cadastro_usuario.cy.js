/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe(`Cadastro de Usuário`, () => {
  it(`Cadastro de usuário com sucesso`, () => {
    acessarCadastro()
    preencherNome(faker.person.firstName())
    preencherEmail('rudney@teste.com')
    preencherSenha('senha123')
    cadastrar() 
    validarCadastroSucesso()

    // cadastrarUsuario('rudney', 'rudney@example.com', 'senha123') 
  });
  it(`Cadastro com email inválido`, () => {
    acessarCadastro()
    preencherNome('rudney')
    preencherEmail('1234455')
    preencherSenha('senha123')
    cadastrar() 

    validarCadastroSucesso()   

  });
  
  it(`Cadastro com email sem @`, () => {
    acessarCadastro()
    preencherNome('rudney')
    preencherEmail('rudney.com')
    preencherSenha('senha123')
    cadastrar() 

  });



})