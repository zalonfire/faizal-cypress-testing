describe('kemaskini&hapus', () => {
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
    cy.get('#Txtuser').type('10135');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();

    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to Perbendaharaan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(4) > li > div > a')
      .should('be.visible')
      .click();
      //senarai pelaburan
      cy.get('#S0089 > ul > li:nth-child(2) > a')
      .should('be.visible')
      .click();

      //kemaskini icon pelaburan
      cy.get('#ContentPlaceHolder1_gv_refdata_LinkButton2_0').click();

cy.get('#ContentPlaceHolder1_GridView1_gv1_LinkButton2_0').click();
cy.wait(1000);
cy.get('#ContentPlaceHolder1_Button4').click();

//hapus
cy.get('#ContentPlaceHolder1_GridView1_gv1_LinkButton3_0').click();





    });
  });