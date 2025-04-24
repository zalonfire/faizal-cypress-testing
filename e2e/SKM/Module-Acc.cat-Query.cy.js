describe('config-filter ', () => {
    it('passes', () => {
      cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')
  
  
  //LOGIN 
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  
  //CLICK LOGIN BUTTON
  cy.get("#login > ul > li:nth-child(3) > input").click();


  //NAVIGATE TO ACCOUNT CATEGORY
  cy.get("body > main > section:nth-child(3) > div > ul > li:nth-child(1) > a")
.click();


//fill name
cy.get("#name").type("111")
//code
cy.get("#code").type("111111111111")
//press query
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(3) > form > ul > li:nth-child(3) > input[type=submit]")
.click();

})
})