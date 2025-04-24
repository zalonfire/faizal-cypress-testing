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
//quotation
    cy.get('#S0088 > ul > li:nth-child(3) > a')
      .should('be.visible')
      .click();

      //kemaskini status pemilihan pembekal
      cy.reload;
    

      cy.get("#SenaraiPembekal > div > div > div.form-horizontal > div:nth-child(1) > div > div:nth-child(3) > div > div > span > span.selection > span", { timeout: 10000 })
      .should('be.visible')
      .click();
    
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_statuscarian-results")
      .contains("PEMILIHAN PEMBEKAL")
      .click();

//carian
cy.get('#ContentPlaceHolder1_Button1').click();
cy.wait(3000);
//klik icon edit
cy.get('#ContentPlaceHolder1_GridView1_ImageButton1_0').click();

//form
cy.get('#ContentPlaceHolder1_Gridview1_chk1_0').click({ force: true });

cy.get('#ContentPlaceHolder1_Textbox6').type('testaa', { force: true });

//dropdown
cy.get("#SupplierReview > div > div > div.form-horizontal > div:nth-child(15) > div > div.col-md-6.box-body > div > div > div > p > span").should('be.visible').click();
cy.get('[aria-expanded="true"]').should('exist');
cy.get("#SupplierReview > div > div > div.form-horizontal > div:nth-child(15) > div > div.col-md-6.box-body > div > div > div > div > p").click();
  cy.get('body').type('{esc}');

  //hantar
  cy.get('#ContentPlaceHolder1_Button8').click();

    });
  });
