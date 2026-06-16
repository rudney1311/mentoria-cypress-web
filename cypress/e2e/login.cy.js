/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const telas = ["iphone-x", "samsung-s10", "macbook-16"];

// para cada tamanho de tela, eu vou rodar todos os meus cenários
telas.forEach((tela) => {
  describe(`Login - ${tela}`, () => {
    beforeEach(() => {
      // DADO
      // Acessar Tela de Login
      cy.viewport(tela);
      cy.acessarLogin()
    });

    it.only(`Login com sucesso - ${tela}`, () => {
      // Preencher email e senha
      // cy.get("#user").type(faker.internet.email());
      cy.preencherEmail(faker.internet.email())

      cy.get("#password")
        .type(faker.string.numeric(6))
        .should("have.attr", "type", "password");

      // QUANDO
      cy.clicarLogin()

      // ENTÃO
      cy.get("#swal2-title")
        .should("have.text", "Login realizado")
        .should("be.visible");
    });

    it(`Login e-mail vazio - ${tela}`, () => {
      cy.get("#user").should("have.value", "")
      cy.get("#password").type("Isabella@16")
      cy.clickLogin()
      cy.get(".invalid_input")
        .should("have.text", "E-mail inválido.")
        .should("be.visible");
    });

    it(`Login senha vazia - ${tela}`, () => {
      cy.get("#user").type(faker.internet.email());
      cy.clickLogin()
      cy.get(".invalid_input")
        .should("have.text", "Senha inválida.")
        .should("be.visible");
    });

    it.only(`Login e-mail inválido - ${tela}`, () => {

      cy.preencherEmail(faker.string.numeric(6))
      // cy.get("#user").type(faker.string.numeric(6));

      cy.get("#password").type(faker.string.numeric(6));
      cy.clickLogin()
      cy.get(".invalid_input")
        .should("have.text", "E-mail inválido.")
        .should("be.visible");
    });

    it(`Login senha inválida - ${tela}`, () => {
      cy.get("#user").type(faker.internet.email());
      cy.get("#password").type(faker.string.numeric(4));
      cy.get("#btnLogin").click();
      cy.get(".invalid_input")
        .should("have.text", "Senha inválida.")
        .should("be.visible");
    });

    it("Botão ainda não tem conta", () => {
      cy.get("#createAccount").click();
      cy.get(".account_form")
        .find("h3")
        .should("have.text", "Cadastro de usuário")
        .should("be.visible");
      cy.contains("Cadastro de usuário").should("be.visible");
    });
  });
});
