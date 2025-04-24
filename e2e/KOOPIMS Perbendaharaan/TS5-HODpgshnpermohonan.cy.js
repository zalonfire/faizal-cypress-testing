describe('Permohonan Pelaburan', () => {
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

    // Log in
    cy.get('#Txtuser').type('10025');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();

// Navigate to Kewangan
cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
.should('be.visible')
.click();

// Navigate to Perbendaharaan
cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
.should('be.visible')
.click();

// Go to the next page
cy.get('#S0089 > ul > li:nth-child(1) > a')
.should('be.visible')
.click();

//dropdown new status
cy.reload();
cy.get("#select2-ContentPlaceHolder1_DropDownList4-container").should('be.visible').click();
cy.get('[aria-expanded="true"]').should('exist');
cy.get("#select2-ContentPlaceHolder1_DropDownList4-results")
  .contains("NEW")
  .click();
//carian
  cy.get('#ContentPlaceHolder1_Button1')
  .should('be.visible')
  .click();
  cy.wait(4000);
//klik icon new
cy.get('#ContentPlaceHolder1_gv_refdata_LinkButton2_0')
.click();

cy.reload();
    cy.get("#select2-ContentPlaceHolder1_dd_sts-container").should('be.visible').click();
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_dd_sts-results")
      .contains("APPROVE")
      .click();

      //catatan
      cy.get('#ContentPlaceHolder1_hod_remark').should('be.visible')
      .type('Sokong 2025!')
//klik butang simpan
cy.get('#ContentPlaceHolder1_Button10').click();
//kembali
// cy.get('#ContentPlaceHolder1_Button12')
// .click();
// cy.wait(2000);







  });
});
