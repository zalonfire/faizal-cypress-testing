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
    cy.get('#Txtuser').type('10095');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to "Kewangan" module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to "Perolehan"
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(4) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0088 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();


      //icon kemaskini
      cy.get('#ContentPlaceHolder1_gv_refdata_ImageButton1_3').click();


    //isi dropdown
    // Reload the page to ensure fresh state
cy.reload();

// Open the dropdown
cy.get('#select2-ContentPlaceHolder1_dd_sts1-container').click();

// Wait for the dropdown to expand and ensure it exists
cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');

// Select the 'PULANG' option from the dropdown
cy.get('#select2-ContentPlaceHolder1_dd_sts1-results')
  .contains('Pulang')
  .click();


  cy.get('#ContentPlaceHolder1_catatanhod').type("Testing")

//simpan
  cy.get('#ContentPlaceHolder1_catatanhod').click();


    });
  });