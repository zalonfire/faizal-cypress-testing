describe('tabung pendidikan layak/tidak layak', () => {
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
    cy.get('#Txtuser').type('10060 ');
    cy.get('#Txtpwd').type('Test@1234');
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

      //navigate to koopcare and the submenu EFT
      cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
      .should('be.visible')
      .click();
      cy.get('#S0076 > ul > li:nth-child(3) > a')
      .should('be.visible')
      .click();

//no kumpulan
cy.get('#ContentPlaceHolder1_txtbatch', { waitForAnimations: false }).type('2131313124', { force: true });
//no account koperasi 
// cy.get('#ContentPlaceHolder1_txtPAN').type('12314123131',{ force: true });



//tarikh mula
// cy.get('#ContentPlaceHolder1_TXTFDATE').type('01/01/2020', { force: true });
// cy.get('#ContentPlaceHolder1_TXTTDATE').type('01/01/2025',{ force: true });
// cy.wait(2000);

//jana
cy.get('#ContentPlaceHolder1_Button3').click();

});
});