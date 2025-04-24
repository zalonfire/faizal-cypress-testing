describe('Pemilihan pembekal', () => {
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
      cy.get('#S0088 > ul > li:nth-child(5) > a')
      .should('be.visible')
      .click();
      

      //purchase order tambah
      cy.get('#ContentPlaceHolder1_Button3').click();

//pilih no quotation
cy.reload;
    

      cy.get("#ContentPlaceHolder1_UpdatePanel3 > div > div > div > div.form-horizontal > div:nth-child(4) > div > div:nth-child(1) > div > div > span > span.selection > span")
      .should('be.visible')
      .click();
    
      cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');

    cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
      .contains("TIADA")
      .click();
      cy.wait(2000);
//tujuan
  cy.get('#ContentPlaceHolder1_tujuan').type('Testing');
//dropdown no quotation
  cy.get("#ContentPlaceHolder1_pem01 > div > div > span > span.selection > span")
      .should('be.visible')
      .click();
    
      cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');

    cy.get("#select2-ContentPlaceHolder1_dd_jenis_pem-results")
      .contains("Syarikat 2")
      .click();
      cy.wait(2000);

//jenis belian
cy.get("#ContentPlaceHolder1_jb_hide > div > div > span > span.selection > span")
      .should('be.visible')
      .click();
    
      cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');

    cy.get("#select2-ContentPlaceHolder1_jenisbelian-results")
      .contains("Pembelian Aset")
      .click();
      cy.wait(2000);

      //tujuan
      cy.get('#ContentPlaceHolder1_tujuan').type('testing', { force: true });
      
      //pembekal
      cy.get("#ContentPlaceHolder1_pem01 > div > div > span > span.selection > span")
      .should('be.visible')
      .click();
      cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');
    cy.get("#select2-ContentPlaceHolder1_dd_jenis_pem-results")
      .contains("Syarikat 2")
      .click();
      cy.wait(2000);


      //simpan
      cy.get('#ContentPlaceHolder1_Button1').click();
cy.wait(2000);

//tambah
cy.get('#ContentPlaceHolder1_Button3').click();

//dropdown
cy.get('#ContentPlaceHolder1_Panel3 > div.modal-body > div:nth-child(1) > div > div > div > span.select2.select2-container.select2-container--default.select2-container--below.select2-container--focus > span.selection > span')
.should('be.visible')
      .click();
      cy.get('[aria-expanded="true"]', { timeout: 10000 }).should('exist');
    cy.get("#select2-ContentPlaceHolder1_DropDownList2-results")
      .contains("11010101 | this is the real")
      .click();
      cy.wait(2000);

//item
cy.get('#ContentPlaceHolder1_lbl_item').type('ivlelasdad');
//quantity
cy.get('#ContentPlaceHolder1_lbl_qty').type('91');

//harga
cy.get('#ContentPlaceHolder1_lbl_unit').type('10');

//note
cy.get('#ContentPlaceHolder1_lbl_ket').type('wowowo');

//click simpan
cy.get('#ContentPlaceHolder1_Button5').click();
//hantar
cy.get('#ContentPlaceHolder1_Button8').click();


//simpan
cy.get('#ContentPlaceHolder1_Button1').click();


    });
  });