describe('Pendaftaran pembekal', () => {
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
    cy.get('#Txtuser').type('10135');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();

    // Navigate to "Kewangan" module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to "Perolehan"
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(5) > li > div > a')
      .should('be.visible')
      .click();

    cy.get('#S0088 > ul > li:nth-child(3) > a')
      .should('be.visible')
      .click();


      //klik tambah
      cy.get('#ContentPlaceHolder1_bajet_reg').click();

      //drop pilih tiada
// Ensure dropdown is triggered
cy.get('#select2-ContentPlaceHolder1_nomohon-container').click();

// Wait for dropdown to expand
cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');

// Select an option
cy.get("#select2-ContentPlaceHolder1_nomohon-results").contains("TIADA").click();

//jenis belian
cy.get('#select2-ContentPlaceHolder1_jenisbelian-container').click();

// Wait for dropdown to expand
cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');

// Select an option
cy.get("#select2-ContentPlaceHolder1_jenisbelian-results")
.contains("Pembelian Aset")
      .click();

cy.get('#ContentPlaceHolder1_tujuan').type('testt');

//simpan
cy.get('#ContentPlaceHolder1_Button1').click();


    });
  });