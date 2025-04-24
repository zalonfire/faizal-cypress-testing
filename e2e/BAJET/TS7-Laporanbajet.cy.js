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

//menu bajet>laporan p&l
cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
.should('be.visible')
.click();
cy.get('#S0087 > ul > li:nth-child(6) > a')
.should('be.visible')
.click();
//dropdown 2024
cy.reload()
cy.get("#select2-ContentPlaceHolder1_DropDownList2-container").should('be.visible')
cy.get("#select2-ContentPlaceHolder1_DropDownList2-container").click();
cy.get('[aria-expanded="true"]').should("exist");
cy.get("#select2-ContentPlaceHolder1_DropDownList2-results")
    .contains("2024")
    .click();
//dropdown bulanan  
// Ensure the dropdown is visible
cy.get("#select2-ContentPlaceHolder1_DropDownList1-container")
  .should('be.visible') // Check visibility
  .scrollIntoView()     // Scroll into view, if needed
  .click({ force: true }); // Force the click in case of obstruction

// Verify the dropdown is expanded
cy.get('[aria-expanded="true"]').should("exist");

// Select the desired option from the dropdown
cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
  .contains("BULANAN")
  .should('be.visible') // Optional: Check visibility of the option
  .click();

//export to pdf
 cy.get("#ContentPlaceHolder1_Button1").click();//REKOD TIDAK DPT DIJUMPAI
cy.wait(3000);

//SELECT JABATAN PENGURUSAN PELAN STRATEGIK
// Ensure the dropdown is visible
cy.get("#select2-ContentPlaceHolder1_DropDownList3-container")
  .should('be.visible') // Check visibility
  .scrollIntoView()     // Scroll into view, if needed
  .click({ force: true }); // Force the click in case of obstruction

// Verify the dropdown is expanded
cy.get('[aria-expanded="true"]').should("exist");

// Select the desired option from the dropdown
cy.get("#select2-ContentPlaceHolder1_DropDownList3-results")
  .contains("PENGURUsAN PELAN STRATEGIK")
  .should('be.visible') // Optional: Check visibility of the option
  .click();
  //export to pdf
 cy.get("#ContentPlaceHolder1_Button1").click();//REKOD TIDAK DPT DIJUMPAI
 cy.wait(3000);
//SELECT RINGKASAN DROPDOWN 
// Ensure the dropdown is visible
cy.get("#select2-ContentPlaceHolder1_DropDownList1-container")
  .should('be.visible') // Check visibility
  .scrollIntoView()     // Scroll into view, if needed
  .click({ force: true }); // Force the click in case of obstruction

// Verify the dropdown is expanded
cy.get('[aria-expanded="true"]').should("exist");

// Select the desired option from the dropdown
cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
  .contains("RINGKASAN")
  .should('be.visible') // Optional: Check visibility of the option
  .click();

//export to pdf
 cy.get("#ContentPlaceHolder1_Button1").click();//REKOD TIDAK DPT DIJUMPAI
cy.wait(3000);










  });
});
