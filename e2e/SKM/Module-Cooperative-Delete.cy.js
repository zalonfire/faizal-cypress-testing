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


//delete
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(6) > a")
.click();

})
})