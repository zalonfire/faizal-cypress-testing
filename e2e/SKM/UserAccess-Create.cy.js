describe('User Access - Create ', () => {
  it('passes', () => {
    cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')


//LOGIN 
cy.get("#username").type("admin");
cy.get("#password").type("admin");

//CLICK LOGIN BUTTON
cy.get("#login > ul > li:nth-child(3) > input").click();

//CLICK USER ACCESS
cy.get("body > main > section:nth-child(1) > nav > div > a:nth-child(1)").click();

//CLICK 'NEW'
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(3) > a").click();

cy.reload();
//fill text
cy.get("#name").type("ahlai")//name
cy.get("#username").type("ahlai")//username
cy.get("#password").type("ahlai")//password
cy.get("#source").type("SKM")//source

//dropdown type
cy.get("#type").should("be.visible").select("Admin");

// Verify the selection (optional)
cy.get("#type").should("have.value", "Admin");

//click Create
cy.get("body > main > section:nth-child(3) > div > fieldset > div > form > div:nth-child(2) > input[type=submit]:nth-child(1)")
.click();
  })
})