describe('module-coa-edit ', () => {
    it('passes', () => {
      cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')
  
  
  //LOGIN 
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  
  //CLICK LOGIN BUTTON
  cy.get("#login > ul > li:nth-child(3) > input").click();


  //NAVIGATE TO CHART OF ACCOUNT
  cy.get("body > main > section:nth-child(3) > div > ul > li:nth-child(2) > a")
.click();
cy.wait(3000);

//edit
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(4) > table > tbody > tr:nth-child(164) > td:nth-child(6) > a")
.click();

cy.get("body > main > section:nth-child(3) > div > fieldset > div > form > div:nth-child(2) > input[type=submit]:nth-child(1)")
.click();

})
})