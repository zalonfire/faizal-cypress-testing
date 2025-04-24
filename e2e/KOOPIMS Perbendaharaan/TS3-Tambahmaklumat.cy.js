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
      //click icon tambah
      cy.get('#ContentPlaceHolder1_Button18').click();
//fill in
cy.get('#ContentPlaceHolder1_TextBox28').type('100');
cy.get('#ContentPlaceHolder1_TextBox27').type('01/01/2025');
cy.get('#ContentPlaceHolder1_TextBox32').click({ force: true }).type('selamat tahun baru');
      //simpan
      cy.get('#ContentPlaceHolder1_Button3').click();
      


    });
  });
      