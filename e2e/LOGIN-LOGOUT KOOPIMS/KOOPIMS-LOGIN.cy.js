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
  


      //login kata laluan tidak sah
    
       cy.get('#Txtuser').type('10025');
       cy.get('#Txtpwd').type('2031092319');
       cy.get('input[type="submit"]').click();
       
 //login 
 cy.get('#Txtuser').type('1111111111');
 cy.get('#Txtpwd').type('Test@123');
 cy.get('input[type="submit"]').click();

//  cy.get('input[type="submit"]').click();
cy.get('#Txtuser').clear();
cy.get('#Txtpwd').clear();
// //      // Log in berjaya
//       cy.get('#Txtuser').type('10025');
//       cy.get('#Txtpwd').type('Test@123');
//       cy.get('input[type="submit"]').click();
 

    });
});