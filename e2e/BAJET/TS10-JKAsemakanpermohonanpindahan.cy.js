//MAKLUMAT CARIAN TIDAK DIJUMPAI SO TAK BOLEH PROCEED DENGAN KEMASKINI
describe('Mohon pindahan bajet', () => { 
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
    cy.get('#Txtuser').type('10043');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();
    
    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();
    
    // Navigate to Bajet dropdown => Pindahan bajet
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();
     cy.get('#S0087 > ul > li:nth-child(3) > a')
     .should('be.visible')
      .click();

//drop permohonan baru
cy.get("#select2-ContentPlaceHolder1_DropDownList4-container")
  .should('be.visible') // Check visibility
  .scrollIntoView()     // Scroll into view, if needed
  .click({ force: true }); // Force the click in case of obstruction

// Verify the dropdown is expanded
cy.get('[aria-expanded="true"]').should("exist");

// Select the desired option from the dropdown
cy.get("#select2-ContentPlaceHolder1_DropDownList4-results")
  .contains("NEW")
  .should('be.visible') // Optional: Check visibility of the option
  .click();

  cy.get("#ContentPlaceHolder1_Button1").click();//maklumat carian tidak dijumpai



    });
  });