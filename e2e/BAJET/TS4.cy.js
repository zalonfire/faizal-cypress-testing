describe('Kemaskini Bajet', () => { 
  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false;
      }
    });
  });

  it('should log in and navigate successfully', () => {
    cy.visit('https://koopims.pasarsahabat.my/');
    cy.get('#Txtuser').type('10060');
    cy.get('#Txtpwd').type('Test@1234');
    cy.get('input[type="submit"]').click();
    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
    .should('be.visible')
    .click();
    // Navigate to Bajet dropdown => Bajet Jabatan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
    .should('be.visible')
    .click();
  cy.get('#S0087 > ul > li:nth-child(1) > a')
    .should('be.visible')
    .click();
 //(skip) status baru  <no fields> no option
 cy.reload()
  cy.get("#select2-ContentPlaceHolder1_DropDownList5-container").should('be.visible')
  cy.get("#select2-ContentPlaceHolder1_DropDownList5-container").click();
  ({ waitForAnimations: false });
  // cy.get("#select2-ContentPlaceHolder1_DropDownList5-result")
  //     .contains("BARU")
  //     .click();
  cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_DropDownList5-results')
      .contains('BARU')
      .should('be.visible')
      .click();

     cy.get('#ContentPlaceHolder1_Button1')
     .click();//tiada maklumat data

  });
});