describe('TS9- Tabung bencana alam daftar permohonan pertama', () => {
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
  cy.get("#ContentPlaceHolder1_JOCcaw").select('SAR GONG BADAK', { force: true });
  //no kp baru
  cy.get('#ContentPlaceHolder1_Txtnokp').type('201231126112', { force: true });
  //carian
  cy.get('#ContentPlaceHolder1_Button2').click({ force: true });
  cy.wait(4000);
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
  //sub kategori
  
  cy.get("#ContentPlaceHolder1_Subcat > div > div > span > span.selection > span", { timeout: 10000 })
  .should('be.visible')
  .click();
  
      cy.get('[aria-expanded="true"]').should('exist');
      cy.get("#select2-ContentPlaceHolder1_ddsubcat-results")
        .contains("BENCANA DENGAN KEMUSNAHAN")
        .click();
        
        //tarikh kejadian
        cy.get('#ContentPlaceHolder1_TarikhJadi')
        // .clear()
        .wait(500)  // Wait to ensure any dynamic updates finish
        .get('#ContentPlaceHolder1_TarikhJadi')  // Re-fetch the element
        .type('07/01/2025', { force: true });
      
      // //tarikh kejadian yg x layak //NO VALUE NO POPOUT
      // cy.get('#ContentPlaceHolder1_TarikhJadi')
      // // .clear()
      // .wait(500)  // Wait to ensure any dynamic updates finish
      // .get('#ContentPlaceHolder1_TarikhJadi')  // Re-fetch the element
      // .type('07/01/2020', { force: true });
  
  
  //semak
  cy.get('#ContentPlaceHolder1_btnsave').click({ force: true });


  //seterusnya
  cy.get("#ContentPlaceHolder1_btn_Setreusnya").click();
  
  //isi mandatory
  cy.get("#ContentPlaceHolder1_txtcno").type("123123");
  // cy.get("#ContentPlaceHolder1_lampiran").attachFile("C:\Users\ASGBUSER0203\Downloads\Jana EFT 230125_250123021717002 (6).txt");

  cy.get("#select2-ContentPlaceHolder1_method-container", { timeout: 10000 })
  .should('be.visible')
  .click();

      cy.get('[aria-expanded="true"]').should('exist');
      cy.get("#select2-ContentPlaceHolder1_method-results")
        .contains("Bayaran di Kaunter (Tunai)")
        .click();
  //keterangan
  cy.wait(2000);
  cy.get("#ContentPlaceHolder1_txtremarks").type("Hai");

  //lampiran

  // Ensure the file input is visible and attach the file
  // cy.get("#ContentPlaceHolder1_lampiran").click();
  // cy.get('input[type="file"]').selectFile('cypress/fixtures/example.pdf', { force: true });
  
  cy.get('input[type="file"]')
  .should('be.visible')  // Ensure the file input is visible
  .selectFile('cypress/fixtures/example.pdf', { force: true });

cy.get('input[type="file"]').then(($input) => {
  // Verify that a file is attached
  expect($input[0].files.length).to.be.greaterThan(0);
});



  //simpan
  cy.get("#ContentPlaceHolder1_Button3").click();


});
});