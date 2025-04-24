describe('config-filter ', () => {
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

//COA FILTER
cy.get("#name").type("COA1111XXXX");
cy.get("#code").type ("COA1111BBBB");
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(2) > form > ul > li:nth-child(5) > input[type=submit]")
.click();




})
})