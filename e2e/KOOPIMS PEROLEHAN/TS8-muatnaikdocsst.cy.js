describe('muat naik doc sst', () => {
  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false; // Prevent test failure
      }
    });

    // Visit the website before each test
    cy.visit('https://koopims.pasarsahabat.my/');
  });

  it('should log in and navigate successfully', () => {
    // Log in
    cy.get('#Txtuser').type('10135');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();

    // Navigate to "Kewangan" module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to "Perolehan"
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(5) > li > div > a')
      .should('be.visible')
      .click();
      cy.get('#S0088 > ul > li:nth-child(5) > a')
      .should('be.visible')
      .click();

      //dropdown
cy.reload;
cy.get("#SenaraiPembekal > div > div > div.form-horizontal > div:nth-child(1) > div > div:nth-child(3) > div > div > span > span.selection > span")
.should('be.visible')
.click();
cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');
cy.get("#select2-ContentPlaceHolder1_statuscarian-results")
.contains("Lulus")
.click();
cy.wait(2000);

//carian
cy.get('#ContentPlaceHolder1_Button1').click();
cy.wait(2000);

//klik icon loa /sst
cy.get('#ContentPlaceHolder1_GridView1_gv4_LinkButton4_0').click();


//klik butang muat naik
cy.get('#ContentPlaceHolder1_Button4').click();

//klik icon loa /sst
cy.get('#ContentPlaceHolder1_GridView1_gv4_LinkButton4_0').click();

//hapus
cy.get('#ContentPlaceHolder1_Button5').click();


});
});