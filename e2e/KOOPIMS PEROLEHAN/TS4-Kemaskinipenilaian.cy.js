describe('MOHON BELIAN', () => {
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
    cy.get('#Txtuser').type('10019');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to "Kewangan" module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to "Perolehan"
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0088 > ul > li:nth-child(2) > a')
      .should('be.visible')
      .click();

// //cari status pulang//no data for status pulang
// cy.get("#select2-ContentPlaceHolder1_statuscarian-container").should('be.visible').click();
// cy.get('[aria-expanded="true"]').should('exist');
// cy.get("#select2-ContentPlaceHolder1_statuscarian-results")
//   .contains("PULANG")
//   .click();

// //klik icon kemaskini
// cy.get('').click();



// //simpan
// cy.get('').click();



    });
  });
  