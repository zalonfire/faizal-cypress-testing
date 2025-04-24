describe('Mohon pindaan Bajet', () => {
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
    
    // Login
    cy.get('#Txtuser').type('10007');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to Bajet - Mohon Bajet
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
      .should('be.visible')
      .click();

    cy.get('#S0087 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

    // Select "Tahun Kewangan"
    cy.get('#select2-ContentPlaceHolder1_ddbatch-container')
      .should('be.visible')
      .click();

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_ddbatch-results')
      .contains('2024')
      .should('be.visible')
      .click();

    // Save and add
    cy.get('#ContentPlaceHolder1_Button4')
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Save button clicked');
        cy.wait(2000); // Wait for 2 seconds to ensure saving is completed
      });

    // Simpan (Save) cannot proceed sebab status still ongoing
    cy.get('#ContentPlaceHolder1_Gridview2_LinkButton1_0')
      .should('be.visible')
      .click();

    // Kemaskini (Update)
    cy.get('#ContentPlaceHolder1_Button5')
      .click();
    cy.wait(2000); // Wait for 2 seconds for the update to take effect

    // Check the state of the 'Simpan' button and act accordingly
    cy.get('#ContentPlaceHolder1_btb_kmes').click();
  });
});

