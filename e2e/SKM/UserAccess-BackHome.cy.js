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
cy.wait(3000);
//Click back home
cy.get("body > main > section:nth-child(1) > nav > div > a:nth-child(1)")
.click();
})
})