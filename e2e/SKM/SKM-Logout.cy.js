describe('SKM - LOGIN ', () => {
  it('passes', () => {
    cy.visit('http://219.92.29.225:30504/SKM/ui/login.jsp')


//LOGIN 
cy.get("#username").type("admin");
cy.get("#password").type("admin");

//CLICK LOGIN BUTTON
cy.get("#login > ul > li:nth-child(3) > input").click();

//CLICK LOGOUT BUTTON
cy.get("body > main > section:nth-child(1) > nav > div > a:nth-child(3").click();



  })
})