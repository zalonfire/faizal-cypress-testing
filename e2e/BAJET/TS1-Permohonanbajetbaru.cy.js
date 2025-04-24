describe('Mohon Bajet', () => {
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
    cy.get('#Txtuser').type('10005');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();

    cy.get('#S0087 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

    // Select "Tahun Kewangan"
    cy.get('#select2-ContentPlaceHolder1_ddbatch-container')
      .should('be.visible')
      .click();

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_ddbatch-results')
      .contains('2025')
      .should('be.visible')
      .click();
      
    // Save and add
    cy.get('#ContentPlaceHolder1_Button4')
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Save button clicked');
      });

      cy.get('#ContentPlaceHolder1_Button3').invoke('attr', 'style', 'pointer-events: auto')
  .click();

    
    // Select dropdown option
    cy.get('#select2-ContentPlaceHolder1_DropDownList2-container')
      .should('be.visible')
      .click();

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_DropDownList2-results')
      .first()
      .should('be.visible')
      .click();

      cy.get('#ContentPlaceHolder1_jan').type('5');
      cy.get('#ContentPlaceHolder1_feb').type('5');
      cy.get('#ContentPlaceHolder1_mac').type('5');
      cy.get('#ContentPlaceHolder1_apr').type('5');
      cy.get('#ContentPlaceHolder1_mei').type('5');
      cy.get('#ContentPlaceHolder1_jun').type('5');
      cy.get('#ContentPlaceHolder1_jul').type('5');
      cy.get('#ContentPlaceHolder1_ogo').type('5');
      cy.get('#ContentPlaceHolder1_sep').type('5');
      cy.get('#ContentPlaceHolder1_okt').type('5');
      cy.get('#ContentPlaceHolder1_nov').type('5');
      cy.get('#ContentPlaceHolder1_dis').type('5');

      cy.get('#ContentPlaceHolder1_Button5').click();

      //new update baki awal 

      cy.reload
      cy.get('#ContentPlaceHolder1_txt_bawal').type('5');
    
  });
});
