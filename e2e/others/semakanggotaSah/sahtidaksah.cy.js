describe('semakan anggota sah/tidak sah', () => {
  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      // Log the error to the console
      console.error(err);
      
      // Return false to prevent the test from failing
      return false;
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
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Navigate to menu laporan keanggotaan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(9) > li > div > a')
      .scrollIntoView()
      .click({ force: true });

    cy.wait(3000);

    // Click on the next element in the menu
    cy.get('#S0025 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

//pilih tarikh mula& tarikh akhir
cy.get('#ContentPlaceHolder1_f_date').type('01/01/2023',{ force: true });


cy.get('#ContentPlaceHolder1_t_date').type('23/12/2025',{ force: true });

//dropdown

//sah
// cy.get('#ContentPlaceHolder1_UpdatePanel3 > div > div > div > div.form-horizontal > div:nth-child(2) > div > div:nth-child(1) > div > div > span > span.selection > span')
//   .should('be.visible')
//   .click({ force: true });
//     cy.get('[aria-expanded="true"]').should('exist');
//     cy.get("#select2-ContentPlaceHolder1_DD_STS_ANGGO-results")
//       .contains("SAH")
//       .click({ force: true });
//tidak sah (negative value)
cy.get('#ContentPlaceHolder1_UpdatePanel3 > div > div > div > div.form-horizontal > div:nth-child(2) > div > div:nth-child(1) > div > div > span > span.selection > span', { timeout: 10000 })
.should('be.visible')
.click();
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_DD_STS_ANGGO-results")
      .contains("TIDAK SAH")
      .click();


//jenis laporan
cy.get('#ContentPlaceHolder1_UpdatePanel3 > div > div > div > div.form-horizontal > div:nth-child(2) > div > div:nth-child(2) > div > div > span > span.selection > span')
  .should('be.visible')
  .click({ force: true });
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
      .contains("RINGKASAN")
      .click({ force: true });
//jana
cy.get('#ContentPlaceHolder1_Button2').should('be.visible').click();
cy.wait(3000);


  });
});
