describe('user access filter ', () => {
  it('passes', () => {
    cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')


//LOGIN 
cy.get("#username").type("admin");
cy.get("#password").type("admin");

//CLICK LOGIN BUTTON
cy.get("#login > ul > li:nth-child(3) > input").click();

//CLICK USER ACCESS
cy.get("body > main > section:nth-child(1) > nav > div > a:nth-child(1)").click();

cy.reload();
//Filter 
//name
cy.get("#name").type("admin")

cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(5) > input[type=submit]").click();
cy.wait(4000);
cy.get("#name").should("exist").clear(); 


//username
cy.get("#username").type("admin")

cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(5) > input[type=submit]").click();
cy.wait(4000);
cy.get("#username").should("exist").clear(); 

//type
cy.get("#type").type("test")

cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(5) > input[type=submit]").click();
cy.wait(4000);
cy.get("#type").should("exist").clear(); 
//Source
cy.get("#source").type("SKM");


cy.wait(2000);

cy.get("body > main > section:nth-child(3) > div > fieldset > div.login > form > ul > li:nth-child(5) > input[type=submit]")
.click();



  })
})