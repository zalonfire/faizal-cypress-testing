describe('kelulusanmohonbelian', () => {
  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false; // Prevent test failure
      }
    });

    // Visit the website before each test
    cy.visit('https://koopims.pasarsahabat.my/');
  });

  it('should log in and navigate successfully', () => {
    // Log in
    cy.get('#Txtuser').type('it_000011');
    cy.get('#Txtpwd').type('Test@1234');
    cy.get('input[type="submit"]').click();
    //click notifications
    cy.get('#navbarDropdown').click();
    cy.get('#form1 > nav > div > ul > li.nav-item.dropdown.open > div > div.notification-heading > h4.menu-title.pull-right > a > i')
    .click();
    


  });
});