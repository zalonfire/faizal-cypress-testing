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

    cy.get('#S0088 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

    // Click the "Daftar Pembekal" button
    cy.get('#ContentPlaceHolder1_Button3').should('be.visible').click();

    // Fill in the form
    cy.wait(500); // Adjust wait time as needed
    cy.get('#ContentPlaceHolder1_username').type('skibidi123', { force: true });
    cy.get('#ContentPlaceHolder1_NoTelefon').type('3124131');

    // Select from the "Bidang" dropdown
    cy.get("#select2-ContentPlaceHolder1_bidang-container").click({ force: true });
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_bidang-results")
      .contains("Pembekalan")
      .click({ force: true });

    // Fill in additional fields
    cy.get('#ContentPlaceHolder1_NoPendaftaran').type('12321');
    cy.get('#ContentPlaceHolder1_date').type('5/1/2025');
  cy.get('#ContentPlaceHolder1_NoTel').type('012345');
  cy.get('#ContentPlaceHolder1_alamat').type('jalan skibidibidi123');
  cy.get('#ContentPlaceHolder1_email').type('lilnas@youremail.com');

//nama
cy.get('#ContentPlaceHolder1_email')
.type('lilnas');

//navigate to maklumat kewangan syarikat
cy.get('#makkew > a > strong').click({ waitForAnimations: false });

//nama bank 
cy.get("#ContentPlaceHolder1_bank").should('be.visible').select('CIMB ISLAMIC BERHAD', { force: true });

// cy.get('[aria-expanded="true"]').should('exist');
cy.get("#ContentPlaceHolder1_bank")
  .contains("CIMB ISLAMIC BERHAD")
  // .click();

  cy.get("#ContentPlaceHolder1_bank").should('be.visible').select('CIMB ISLAMIC BERHAD', { force: true });

// cy.get('[aria-expanded="true"]').should('exist');
// cy.get("#ContentPlaceHolder1_bank")
//   .contains("CIMB ISLAMIC BERHAD")

  //no.bank
cy.get('#ContentPlaceHolder1_NoBank').type('1010101010101');

//dokumen
cy.get('#makupload > a').click({ waitForAnimations: false });


cy.get('#ContentPlaceHolder1_Gridview1_Lnk1_0').click();

//nav to akuan pemohon
cy.get('#akuan > a > strong').click({ waitForAnimations: false });

cy.get('#ContentPlaceHolder1_namaKaki').type('abudaha');
cy.get('#ContentPlaceHolder1_hubungan').type('target')



cy.get('#ContentPlaceHolder1_RadioButton1')

//hantar



    // Select from the "Jenis" dropdown
  //   cy.get("#select2-ContentPlaceHolder1_jenis-container")
  //   .click({ force: true })
  //   .then(() => cy.log("Dropdown container clicked"));
  
  // cy.get("#select2-ContentPlaceHolder1_jenis-container").should('be.visible').click();
  // cy.get('[aria-expanded="true"]', { timeout: 10000 }) // Wait up to 10 seconds
  // .should('exist');

  // cy.get("#select2-ContentPlaceHolder1_jenis-results")
  //   .contains("Perkongsian")
  //   .click();

  // cy.get("#select2-ContentPlaceHolder1_jenis-results", { timeout: 10000 })
  //   .should('exist') // Ensure results element exists
  //   .and('be.visible') // Ensure it's visible
  //   .contains("Perkongsian")
  //   .click({ force: true }); // Select the desired option
    // (Optional) Handle date picker
    // Uncomment and adjust if needed
    
    // cy.get('body > div', { timeout: 10000 }).should('be.visible').contains('8').click();
    // Final assertions or form submissions (if applicable)
  });
});
