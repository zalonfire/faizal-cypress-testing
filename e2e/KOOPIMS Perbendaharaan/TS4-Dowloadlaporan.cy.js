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
      //laporan
      cy.get('#S0089 > ul > li:nth-child(3) > a')
      .should('be.visible')
      .click();
//fill
cy.get('#ContentPlaceHolder1_Tk_mula').type('01/01/2025', { force: true });

cy.get('#ContentPlaceHolder1_Tk_akhir')
  .scrollIntoView()
  .type('01/01/2025', { force: true });



//filter
cy.get("#select2-ContentPlaceHolder1_DropDownList1-container").click({ force: true });

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
      .contains("Laporan Prestasi")
      .click();


//filter kategori pelaburan
  cy.get("#select2-ContentPlaceHolder1_DropDownList3-container").click({ force: true });

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_DropDownList3-results")
      .contains("ST/FD/REPO")
      .click();
      
//export to pdf
cy.get('#ContentPlaceHolder1_Button1').click();



    });
    });