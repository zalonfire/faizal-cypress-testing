describe('MOHON BELIAN', () => {
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
    cy.get('#Txtuser').type('10019');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to "Kewangan" module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to "Perolehan"
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0088 > ul > li:nth-child(2) > a')
      .should('be.visible')
      .click();

    // Click the "Tambah" button
    cy.get('#ContentPlaceHolder1_Button3').click();

    // // Handle dropdown selection
    // cy.get('#select2-ContentPlaceHolder1_DropDownList1-container')
    //   .should('be.visible')
    //   .as('dropdown') // Alias the dropdown
    //   .click();

    // Verify the dropdown expands and select an option
    // cy.get('@dropdown')
    //   .then(() => {
    //     cy.get('[aria-expanded="true"]').should('exist'); // Ensure dropdown is expanded
    //   });
    // cy.get('#select2-ContentPlaceHolder1_DropDownList1-results')
    //   .contains('Syarikat 2')
    //   .click();

    // Click radio buttons
    const radioButtonIds = [
      '#ContentPlaceHolder1_Gridview2_rdo1_0',
      '#ContentPlaceHolder1_Gridview2_rdo5_1',
      '#ContentPlaceHolder1_Gridview2_rdo5_2',
      '#ContentPlaceHolder1_Gridview2_rdo5_3',
      '#ContentPlaceHolder1_Gridview2_rdo5_4',
    ];

    radioButtonIds.forEach((id) => {
      cy.get(id).click();
    });

    //simpan
cy.get('#ContentPlaceHolder1_Button8').click();


  });
});
