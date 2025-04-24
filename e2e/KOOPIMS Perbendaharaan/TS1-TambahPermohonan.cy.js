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

    // Go to the next page
    cy.get('#S0089 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

    // Click menu tambah
    cy.get('#ContentPlaceHolder1_Button3')
      .should('be.visible')
      .click();

    // Reload the page to ensure a fresh start
    cy.reload();

    // Select the first option in the "Jenis Pelaburan" dropdown
    cy.wait(1000); // Adjust time as necessary
cy.get("#select2-ContentPlaceHolder1_dd_jenis_pela-container")
  .should('be.visible')
  .click({ waitForAnimations: false });

      
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_dd_jenis_pela-results')
      .contains('Sukuk')
      .should('be.visible')
      .click();

    // Select the first option in "Jenis Permohonan"
    cy.get("#select2-ContentPlaceHolder1_dd_jenis_permo-container")
      .should('be.visible')
      .click({ waitForAnimations: false });
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_dd_jenis_permo-results')
      .contains('Baru')
      .should('be.visible')
      .click();

    // Select the first option in "Nama Pelaburan"
    cy.get('#select2-ContentPlaceHolder1_dd_nama_pela-container', { timeout: 8000 })
      .should('be.visible')
      .click({ force: true });

    // Handle dropdown results safely
    cy.get('body').then(($body) => {
      if ($body.find('#select2-ContentPlaceHolder1_dd_jenis_pela-results').length > 0) {
        cy.get('#select2-ContentPlaceHolder1_dd_jenis_pela-results')
          .find('li')
          .contains('AmDynamic Sukuk Fund (“ADSF”)')
          .click();
      } else {
        cy.log('No dropdown results available');
      }
    });

    // Select the second option in "Institusi"
    cy.get('#select2-ContentPlaceHolder1_dd_Institusi-container', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_dd_Institusi-results')
      .find('li')
      .its('length')
      .then((length) => {
        if (length > 1) {
          cy.get('#select2-ContentPlaceHolder1_dd_Institusi-results li')
            .eq(1)
            .should('be.visible')
            .click();
        } else {
          cy.log('Not enough options in the dropdown to select the second one');
        }
      });

    // Fill in form fields
    // cy.get("#ContentPlaceHolder1_Textbox20").type('50');
    cy.get("#ContentPlaceHolder1_Textbox20")
  .should('not.be.disabled')  // Ensure the element is not disabled
  .type('50');

    cy.get("#ContentPlaceHolder1_Textbox3").type('5.00');
    cy.get("#ContentPlaceHolder1_TextBox24").type('5.00');

    // Check and type into #ContentPlaceHolder1_Textbox7
    cy.wait(1000); // Adjust the wait time as necessary
    cy.get('#ContentPlaceHolder1_Textbox7')
      .should('be.visible')
      .type('5.00');
    
    // Other form fields
    cy.get('#ContentPlaceHolder1_Textbox12').type('ini semua cubaan');
    cy.get('#ContentPlaceHolder1_Textbox8').type('Treasury');
    cy.get('#ContentPlaceHolder1_Textbox5').type('5.00');
    cy.get('#ContentPlaceHolder1_Textbox4').type('5.00');
    cy.get('#ContentPlaceHolder1_Textbox6').type('5.00');
    cy.get('#ContentPlaceHolder1_Textbox10').type('5.00');

    // File upload
    // cy.get('#ContentPlaceHolder1_FileUpload1').selectFile('image.png', { action: 'drag-drop' });

    // Submit the form
    cy.get('#ContentPlaceHolder1_Button2')
      .should('be.enabled')  // Ensure the button is enabled
      .click();
  });
});
