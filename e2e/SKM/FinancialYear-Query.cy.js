describe('module financial year - Query', () => {
    it('passes', () => {
      cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')
  
  
  //LOGIN 
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");

   //CLICK LOGIN BUTTON
   cy.get("#login > ul > li:nth-child(3) > input").click();
   
  //click module financial year
  cy.get("body > main > section:nth-child(3) > div > ul > li:nth-child(3) > a")
  .click();

  //query year start stop
  cy.get("#year").type("2025 FY");
  cy.get("#start").type("01-01-2025");
  cy.get("#stop").type("31-12-2025");
  cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(2) > form > ul > li:nth-child(4) > input[type=submit]")
.click();
cy.wait(2000);
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(3) > form > ul > li:nth-child(4) > input[type=submit]")
.click();


})
})