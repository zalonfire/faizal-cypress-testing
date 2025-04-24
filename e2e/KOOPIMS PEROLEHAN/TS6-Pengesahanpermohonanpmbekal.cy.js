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

//status baru pohon then search
cy.reload();
cy.get("#select2-ContentPlaceHolder1_status-container").should('be.visible').click();
cy.get('[aria-expanded="true"]').should('exist');
cy.get("#select2-ContentPlaceHolder1_status-results")
  .contains("Baru Pohon")
  .click();

cy.get('#ContentPlaceHolder1_Button1').click();

//click edit
cy.get('#ContentPlaceHolder1_Gridlist_LinkButton2_0 > img').click();

//klik tab pengesahan/kelulusan
cy.get('#ContentPlaceHolder1_LinkButton4').click({ waitForAnimations: false });

//drop
cy.wait(3000);
cy.get("#ContentPlaceHolder1_DropDownList2", { timeout: 10000 }).should('exist'); // Check for existence in the DOM
cy.get("#ContentPlaceHolder1_DropDownList2").should('be.visible').select('LULUS', { force: true }); // If it's visible, select

//fill
cy.get('#ContentPlaceHolder1_Textbox22').type('test1231', { force: true });


//simpanx1 only
cy.get('#ContentPlaceHolder1_Button10').click();

    });
  });