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

//click new
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(4) > a")
.click();

//Creating
cy.get("#name").type("Tom");
cy.get("#code").type("cat12");

//klik create
cy.get("body > main > section:nth-child(3) > div > fieldset > div > form > div:nth-child(2) > input[type=submit]:nth-child(1)")
.click();





})
})