describe('tabung kematian layak/tidak layak', () => {
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
    cy.get('#Txtuser').type('10088');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

      //navigate to koopcare and the submenu semakan
      cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(7) > li > div > a')
      .should('be.visible')
      .click();
      cy.get('#S0076 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();
//SAR 
cy.reload
cy.get("#ContentPlaceHolder1_JOCcaw").select('SAR JITRA', { force: true });
//no kp baru
cy.get('#ContentPlaceHolder1_Txtnokp').type('201231126112', { force: true });

//carian
cy.get('#ContentPlaceHolder1_Button2').click({ force: true });
cy.wait(3000);

//checkbox
cy.get('#ContentPlaceHolder1_chk').click();
// Select category dropdown
cy.get("#select2-ContentPlaceHolder1_ddcat-container")
  .should("be.visible")
  .click({ force: true });

cy.get('[aria-expanded="true"]').should("exist"); // Ensure dropdown is open

// Wait for dropdown options to load
cy.get("#select2-ContentPlaceHolder1_ddcat-results", { timeout: 10000 })
  .should("be.visible");

// Now click the option
cy.wait(2000);
cy.get("#select2-ContentPlaceHolder1_ddcat-results")
  .contains("TABUNG SAKIT KRITIKAL")
  .should("be.visible")
  // .click();
  .click({ force: true });
  

  // cy.get("#select2-ContentPlaceHolder1_ddcat-container").click({ force: true });

  // cy.get("#select2-ContentPlaceHolder1_ddcat-results").contains("TABUNG SAKIT KRITIKAL").click({ force: true });
  

//         //sub kategori
        cy.wait(5000); // Adjust if needed
cy.get("#select2-ContentPlaceHolder1_ddsubcat-container", { timeout: 10000 })
  .should("exist")
  .should("be.visible")
  .click({ force: true });
            cy.get('[aria-expanded="true"]').should('exist');
            cy.get("#select2-ContentPlaceHolder1_ddsubcat-results")
              .contains("AIDS")
              .click({ force: true });
              //hubungan
cy.get("#ContentPlaceHolder1_pemohonDD > div > div > span > span.selection > span", { timeout: 10000 })
.should('be.visible')
.click({ force: true });
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_Pemohon-results")
      .contains("ANAK")
      .click({ force: true });
// //         //nama pemohon
      // cy.get('#ContentPlaceHolder1_txtnama2').type('ONDUYUTONG BINTI AMAU');
//no kp permohon
// cy.wait(4000);
// cy.get('#ContentPlaceHolder1_txticno').type('201231126112');

//       //no kp pesakit
      cy.wait(4000);
cy.get('#ContentPlaceHolder1_ICsakit').type('201231126112');

// //umur
cy.get('#ContentPlaceHolder1_age').type('26');
      

//tarikh surat pengesahan
// cy.get('#ContentPlaceHolder1_TarikhSah').type('22/1/2025');//command ni kalau tidak layak
// //tidak layak
cy.get('#ContentPlaceHolder1_TarikhSah').type('22/1/2020')

//semak
cy.get('#ContentPlaceHolder1_btnsave').click({ force: true });
    });
  });




