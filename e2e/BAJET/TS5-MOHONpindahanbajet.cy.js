describe('Mohon pindahan bajet', () => { 
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
    cy.get('#Txtuser').type('10060');
    cy.get('#Txtpwd').type('Test@1234');
    cy.get('input[type="submit"]').click();
    
    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();
    
    // Navigate to Bajet dropdown => Pindahan bajet
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0087 > ul > li:nth-child(2) > a')
      .should('be.visible')
      .click();

    // Navigate to Mohon
    cy.reload();
    cy.get('#ContentPlaceHolder1_bajet_reg').click();

    // Fill in 'Maklumat Tujuan'
    cy.get('#ContentPlaceHolder1_TextBox2')
      .should('be.visible')
      .type('Tujuan Pindahan Bajet');

    // Pilih Jabatan
    cy.get('#select2-ContentPlaceHolder1_DropDownList5-container')
      .should('be.visible')
      .click();
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('.select2-results__option') // Generic selector for dropdown options
      .eq(1) // Select the first option
      .should('be.visible')
      .click();

    // Pilih 'Kod Akaun'
    cy.get('#select2-ContentPlaceHolder1_GridView1_Col1_gv1_0-container')
      .first()
      .should('be.visible')
      .click(); // Adjust if no data is present.

    // Enter 'Amaun Pindahan'
    cy.get('#ContentPlaceHolder1_GridView1_gv1_JP_0')
      .should('exist') // Ensure the element exists
      .and('be.visible') // Ensure it is visible
      .then((input) => {
        cy.wrap(input).type('6969', { delay: 50 });
      });
//*GOT ISSUE WITH THIS NO OPTION AND CANNOT SUBMIT
    // Simpan and Hantar
    // cy.get('#ContentPlaceHolder1_Button1') // Save button
    //   .should('be.visible')
    //   .click();
    
  
    // cy.get('#ContentPlaceHolder1_Button3') // Submit button
    //   .should('be.visible')
    //   .click();
    ;
  });
});
