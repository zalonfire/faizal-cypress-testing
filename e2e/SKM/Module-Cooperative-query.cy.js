describe('module-cooperative query ', () => {
    it('passes', () => {
      cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')
  
  
  //LOGIN 
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  
  //CLICK LOGIN BUTTON
  cy.get("#login > ul > li:nth-child(3) > input").click();


  //NAVIGATE TO COOPERATIVE
  cy.get("body > main > section:nth-child(3) > div > ul > li:nth-child(4) > a")
.click();
cy.wait(3000);

//name
cy.get("#name").type("a");
  cy.get("#code").type("a");

  cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(2) > form > ul > li:nth-child(4) > input[type=submit]")
.click();


cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(3) > form > ul > li:nth-child(4) > input[type=submit]")
 .click();
 
})
})