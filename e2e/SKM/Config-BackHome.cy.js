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
  cy.wait(2000);
  
//click backhome
cy.get("body > main > section:nth-child(1) > nav > div > a:nth-child(1)")
.click();


})
})