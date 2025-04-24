describe('user access - edit ', () => {
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

//click edit
cy.get("body > main > section:nth-child(3) > div > fieldset > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(6) > a")
.click();

cy.wait(2000);
//in access edit press save
cy.get("body > main > section:nth-child(3) > div > fieldset > div > form > div:nth-child(2) > input[type=submit]:nth-child(1)")
.click();
cy.wait(2000);

})
})