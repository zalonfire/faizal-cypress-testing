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
    cy.get('#Txtuser').type('10067');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to Kewangan
cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
.should('be.visible')
.click();

// Navigate to Perbendaharaan
cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
.should('be.visible')
.click();

//senarai permohonan
cy.get('#S0089 > ul > li:nth-child(1) > a')
.should('be.visible')
.click();

//dropdown new status
cy.reload();
cy.get("#select2-ContentPlaceHolder1_DropDownList4-container").should('be.visible').click();
cy.get('[aria-expanded="true"]').should('exist');
cy.get("#select2-ContentPlaceHolder1_DropDownList4-results")
  .contains("Approved By GM")//kalau ada then continue if no then error
  .click();
  //carian
  cy.get('#ContentPlaceHolder1_Button1')
  .should('be.visible')
  .click();
  cy.wait(4000);

  //icon kemaskini//klik kalau ada filter tersebut(nak kena tambah nnti bila dah approve)
cy.get('#ContentPlaceHolder1_gv_refdata_LinkButton2_0')
.click();
cy.wait(2000);
//status approved/dis//sama jgk after approved
cy.reload();
    cy.get("#select2-ContentPlaceHolder1_gm_sts-container").should('be.visible').click();
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_gm_sts-results")
      .contains("APPROVE")
      .click();
      // .contains("DISAPPROVE")
      // .click();
       //catatan
       cy.get('#ContentPlaceHolder1_gm_remark').should('be.visible')
       .type('Testing')
       //klik butang simpan
cy.get('#ContentPlaceHolder1_Button4').click();
       


  });
});