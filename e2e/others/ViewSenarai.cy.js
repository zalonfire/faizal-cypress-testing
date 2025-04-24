describe('ViewSenarai', () => {
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
    cy.get('#Txtuser').type('10004');
    cy.get('#Txtpwd').type('Test@1234');
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

    // Navigate to KOOPCARE submenu "Senarai"
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
      .should('be.visible')
      .click();

    cy.get('#S0076 > ul > li:nth-child(2) > a', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Input date in "Tarikh Mula"
    cy.get('#ContentPlaceHolder1_TXTFDATE')
      .should('be.visible') // Ensure it is visible
      .clear({ force: true }) // Clear existing value
      .type('01/01/2023', { force: true });

    // Click the submit button
    cy.get('#ContentPlaceHolder1_btnSubmit').click();

    // Wait to observe results (if needed)
    cy.wait(2000);


//tindakan paparan
cy.get('#ContentPlaceHolder1_GridView3_lnkView_0').click();


  });
});
