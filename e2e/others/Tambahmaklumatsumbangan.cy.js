describe('Tambah maklumat sumbangan', () => {
  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      console.error(err);
      return false; // Prevent the test from failing
    });

    // Visit the website before each test
    cy.visit('https://koopims.pasarsahabat.my/');
  });

  it('should log in and navigate successfully', () => {
    // Log in
    cy.get('#Txtuser').type('10089');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Navigate to menu KOOPCARE
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .scrollIntoView()
      .click({ force: true });

    cy.wait(3000);

    // Click on the next element in the menu
    cy.get('#S0076 > ul > li:nth-child(4) > a')
      .should('be.visible')
      .click();

    // Interact with the first dropdown (Selenggara Tabung)
    cy.get('#ContentPlaceHolder1_UpdatePanel3 > div > div > div > div.form-horizontal > div > div > div > div > div > span > span.selection > span')
      .should('be.visible')
      .click({ force: true });

    cy.get('[aria-expanded="true"]')
      .should('exist');

    cy.get('#select2-ContentPlaceHolder1_DropDownList1-results')
      .contains('Selenggara Tabung')
      .click({ force: true });

    cy.wait(2000);

    // Interact with the second dropdown (Kategori)
    cy.get('#ContentPlaceHolder1_tabungdd > div > div > div > div > div')
      .should('be.visible')
      .click({ force: true });

      //tambah
      cy.get('#ContentPlaceHolder1_GridTabung_imgbtnNavigate_0').click();

      //sub kategori 
      cy.get('#ContentPlaceHolder1_GridTabung_txtAddSubKat').type('test123');
      cy.get('#ContentPlaceHolder1_GridTabung_txtAddRM').type('200');
    
//klik tambah lagi
cy.get('#ContentPlaceHolder1_GridTabung_lbtnAdd').click();

cy.wait(2000);




  });
});
