//TAKDE BUTANG CARIAN tak dpt nak luluskan
describe('Paparan bajet', () => { 
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
    cy.get('#Txtuser').type('10025');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();
// Navigate to Kewangan
cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
.should('be.visible')
.click();
//menu bajet> consolidation
cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
.should('be.visible')
.click();
cy.get('#S0087 > ul > li:nth-child(2) > a')
.should('be.visible')
.click();
//dropdown 2025
cy.reload()
cy.get("#select2-ContentPlaceHolder1_ddbatch-container").should('be.visible')
cy.get("#select2-ContentPlaceHolder1_ddbatch-container").click();
cy.get('[aria-expanded="true"]').should("exist");
cy.get("#select2-ContentPlaceHolder1_ddbatch-results")
    .contains("2025")
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
  .contains("BARU")
  .should('be.visible') // Optional: Check visibility of the option
  .click();




});
});