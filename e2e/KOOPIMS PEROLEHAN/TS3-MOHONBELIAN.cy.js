describe('MOHON BELIAN', () => {
  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false; // Prevent test failure
      }
    });
  });

  it('should log in and navigate successfully', () => {
    // Visit the website
    cy.visit('https://koopims.pasarsahabat.my/');

    // Log in
    cy.get('#Txtuser').type('10019');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to Perolehan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0088 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

    // Click "Tambah"
    cy.get('#ContentPlaceHolder1_Button5')
      .should('be.visible')
      .click();

    // Select project from dropdown
    cy.get("#select2-ContentPlaceHolder1_Project-container")
      .should('be.visible')
      .click();

    cy.get('[aria-expanded="true"]').should('exist');

    cy.get("#select2-ContentPlaceHolder1_Project-results", { timeout: 10000 })
      .should('be.visible')
      .contains("AR-RAHNU BIRO GADAIAN GONG BADAK")
      .click();

    // Date selection (alternative direct input)
    cy.get("#ContentPlaceHolder1_dateHantar").click(); // Open the date picker

// Adjust selector to match the calendar widget
cy.get('body > div') // Replace with actual calendar class
  .contains('8') // Replace with desired day
  .click();

  
    // If a date picker must be clicked, handle the span and icon interaction:
    // cy.get('#SupplierReview .form-horizontal > div:nth-child(3) div:nth-child(7) i')
    //   .should('be.visible')
    //   .click();
//jenis belian
cy.get("#select2-ContentPlaceHolder1_JenisDD-container").should('be.visible').click();
cy.get('[aria-expanded="true"]').should('exist');
cy.get("#select2-ContentPlaceHolder1_JenisDD-results")
  .contains("CAPITAL(CAPEX)")
  .click();

cy.get('#ContentPlaceHolder1_tujuan').type('testing');

//simpan
cy.get('#ContentPlaceHolder1_Button').click();
//hantar
cy.get('#ContentPlaceHolder1_Button8').click();


  });
});
