describe('semak jana laporan ', () => {
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
    cy.get('#Txtuser').type('10065');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

      //navigate to koopcare and the submenu laporan
      cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(6) > li > div > a')
      .should('be.visible')
      .click();
      cy.get('#S0076 > ul')
      .should('be.visible')
      .click();

//keterangan
cy.get('#ContentPlaceHolder1_TextBox2').type('Testing', { force: true });

//tarikh mula
cy.get('#ContentPlaceHolder1_TXTFDATE').type('22/01/2020');
//tarikh akhir
cy.get('#ContentPlaceHolder1_TXTTDATE').type('05/02/2025');

//jana
cy.get('#ContentPlaceHolder1_Button3').click();





    });
  });