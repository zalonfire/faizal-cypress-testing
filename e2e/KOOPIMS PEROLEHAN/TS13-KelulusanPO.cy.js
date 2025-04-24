describe('kelulusanmohonbelian', () => {
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
    cy.get('#Txtuser').type('10025');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();

    // Navigate to "Kewangan" module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

// Navigate to "Perolehan"
cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(4) > li > div > a')
.should('be.visible')
.click();
//submenu kelulusan po
cy.get('#S0088 > ul > li:nth-child(6) > a')
.should('be.visible')
.click();

//masukkan maklumat >search
cy.get("#SenaraiPembekal > div > div > div.form-horizontal > div:nth-child(1) > div > div:nth-child(3) > div > div > span > span.selection > span").should('be.visible').click();
      cy.get('[aria-expanded="true"]').should('exist');
      cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
        .contains("30,000 ~ 100,000")
        .click();
   
       cy.get('#ContentPlaceHolder1_GridView1_chk1_0').click();

       //lulus
       cy.get('#ContentPlaceHolder1_Button8').click();
       //tidak lulus
      //  cy.get('#ContentPlaceHolder1_Button3').click();

      

    });
  });