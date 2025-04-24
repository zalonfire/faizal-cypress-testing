describe('semak senarai dropdown categori,sub categori', () => {
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

      //navigate to koopcare and the submenu semakan
      cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();
      cy.get('#S0076 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();
//SAR 
cy.reload
cy.get("#ContentPlaceHolder1_JOCcaw").select('SAR GONG BADAK', { force: true });
//no kp baru
cy.get('#ContentPlaceHolder1_Txtnokp').type('201231126112', { force: true });

//carian
cy.get('#ContentPlaceHolder1_Button2').click({ force: true });
//checkbox
cy.get('#ContentPlaceHolder1_chk').click();

cy.wait(4000);
        //nama pemohon
        cy.get('#ContentPlaceHolder1_txtnama2').type('ONDUYUTONG BINTI AMAU');
      
      
        //kategori
      cy.get("#select2-ContentPlaceHolder1_ddcat-container", { timeout: 10000 })
  .should('be.visible')
  .click();
      cy.get('[aria-expanded="true"]').should('exist');
      cy.get("#select2-ContentPlaceHolder1_ddcat-results")
        .contains("TABUNG BENCANA ALAM")
        .click();
// //Sub-kategori
// cy.get("#ContentPlaceHolder1_Subcat > div > div > span > span.selection > span", { timeout: 10000 })
// .should('be.visible')
// .click();
    // cy.get('[aria-expanded="true"]').should('exist');
    // cy.get("#select2-ContentPlaceHolder1_ddsubcat-results")
    //   .contains("BENCANA DENGAN KEMUSNAHAN")
    //   .click();

    //bugs issue: no popup error when sub kategori is not selected

      //tarikh kejadian
      
      cy.get('#ContentPlaceHolder1_TarikhJadi')
      // .clear()
      .wait(500)  // Wait to ensure any dynamic updates finish
      .get('#ContentPlaceHolder1_TarikhJadi')  // Re-fetch the element
      .type('07/01/2025', { force: true });

//semak
cy.get('#ContentPlaceHolder1_btnsave').click({ force: true });
    });
  });