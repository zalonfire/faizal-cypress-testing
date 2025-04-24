describe('Semak maklumat carian tidak dijumpai', () => {
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
    cy.get('#Txtuser').type('10089');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

      //navigate to koopcare and the submenu senarai
      cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();
      cy.get('#S0076 > ul > li:nth-child(2) > a')
      .should('be.visible')
      .click();
//status pilihan
cy.get("#select2-ContentPlaceHolder1_ddsts-container", { timeout: 10000 })
  .should('be.visible')
  .click();

      cy.get('[aria-expanded="true"]').should('exist');
      cy.get("#select2-ContentPlaceHolder1_ddsts-results")
        .contains("--- PILIH ---")
        .click();
//submit
cy.get('#ContentPlaceHolder1_btnSubmit').click();

//papar
cy.get('#ContentPlaceHolder1_GridView1_lnkView_0 > i').click();


    });
  });