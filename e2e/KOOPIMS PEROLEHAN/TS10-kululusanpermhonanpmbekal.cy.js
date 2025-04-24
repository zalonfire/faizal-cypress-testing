describe('kelulusanpermhonanpembekal', () => {
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
      //submenu pembekal
      cy.get('#S0088 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();
//kemaskini proses kelulusan
cy.get('#ContentPlaceHolder1_Gridlist_LinkButton2_0 > img')
.click();
//tab pengesahan/kelulusan
cy.get('#ContentPlaceHolder1_LinkButton4').click({ force: true });

cy.wait(2000);
//dropdown status
cy.get("#ContentPlaceHolder1_DropDownList3")
  .select("LULUS"); 
//catatan
cy.get('#ContentPlaceHolder1_Textbox1')
  .type('mantap'); // Typing into a textbox

cy.get('#ContentPlaceHolder1_Button4')
  .click(); // Clicking the submit button




    });
  });