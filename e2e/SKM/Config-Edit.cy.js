describe('config-filter ', () => {
    it('passes', () => {
      cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')
  
  
  //LOGIN 
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  
  //CLICK LOGIN BUTTON
  cy.get("#login > ul > li:nth-child(3) > input").click();
  
  cy.wait(2000);
  
  //klik config
  cy.get("body > main > section:nth-child(1) > nav > div > a:nth-child(2)")
  .click();

  //klik edit
  cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(4) > a")
.click();
cy.wait(2000);

//klik save
cy.get("body > main > section:nth-child(3) > div > fieldset > div > form > div:nth-child(5) > input:nth-child(2)")
.click();

})
})