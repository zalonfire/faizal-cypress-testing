describe('module financial year - Create', () => {
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

  //create new
  cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(4) > a")
  .click();

  //fill to create
  cy.get("#year").type("2025");
  cy.get("#startDate").type("2025-08-26");
  cy.get("#endDate").type("2026-08-27");
  

cy.get("body > main > section:nth-child(3) > div > fieldset > div > form > div:nth-child(2) > input[type=submit]:nth-child(1)")
.click();


})
})