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
      cy.get('#Txtuser').type('10025');
      cy.get('#Txtpwd').type('Test@123');
      cy.get('input[type="submit"]').click();

      // Log out
      cy.get('#form1 > nav > div > ul > li:nth-child(3) > a > i').click();
      cy.get('#mb-signout > div > div > div.mb-footer > div > a').click();
      







      
    });
});