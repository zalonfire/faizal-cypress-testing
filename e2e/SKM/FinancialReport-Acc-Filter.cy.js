describe('financialreport account filter ', () => {
    it('passes', () => {
      cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')
  
  
  //LOGIN 
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  
  //CLICK LOGIN BUTTON
  cy.get("#login > ul > li:nth-child(3) > input").click();

  //NAVIGATE TO ACCOUNT
  cy.get('body > main > section:nth-child(4) > div > ul > li:nth-child(1) > a')
.click();


//fill
cy.get('#companyName').type('1');

cy.get('body > main > section:nth-child(3) > div > fieldset > div:nth-child(2) > form > ul > li:nth-child(4) > input[type=submit]')
.click();

})
})