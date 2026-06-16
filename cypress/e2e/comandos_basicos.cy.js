describe('Comandos Básicos', () => {
  it('Abrir uma url', () => {
    // aqui você pode adicionar o código de teste
    cy.visit('https://automationpratice.com.br/login');
  });

  it('Encontrar elementos', () => {
    // aqui você pode adicionar o código de teste
    cy.visit('https://automationpratice.com.br/login');

    //get
    cy.get('#user')

    // find() - encoontra um elemento
    // diminui o escopo com o get()
    cy.get('.mc-form').find('.form-control')

    // contains () - encontra um elemento pelo texto
    // diminui o escopo com o get()
    cy.get('.mc-form').contains('Send')
  });


  it('Preencher um campo', () => {
    // aqui você pode adicionar o código de teste
    cy.visit('https://automationpratice.com.br/login');

   // cy.get('#user').type('teste@teste.com');
   // cy.get('#password').type('123456');
    cy.get('.mc-form').find('.form-control').type('meuemail@testecom{enter}');
  });

  it('Clicar em um botão', () => {
    // aqui você pode adicionar o código de teste
    cy.visit('https://automationpratice.com.br/login');
    cy.get('#btnLogin').click();
  });
});