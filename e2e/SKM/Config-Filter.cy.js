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

//name
cy.get("#name").type("test");
cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(3) > input[type=submit]")
.click();
cy.get("#name").should("exist").clear(); 
cy.wait(2000);

//code
cy.get("#value").type("test");
cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(3) > input[type=submit]")
.click();
cy.get("#value").should("exist").clear(); 
cy.wait(2000);

cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(3) > input[type=submit]")
.click();



  })
})