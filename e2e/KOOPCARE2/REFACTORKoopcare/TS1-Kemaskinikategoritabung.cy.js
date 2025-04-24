describe('Tambah sub kategori baru', () => {
  const baseUrl = 'https://koopims.pasarsahabat.my/';
  const username = '10089';
  const password = '12345';
  const kategoriTabung = 'TABUNG KHAIRAT KEMATIAN';
  const subKategoriBaru = 'TESTING';
  const jumlahSumbangan = '100';

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false;
      }
    });
    
    cy.visit(baseUrl);
  });

  it('should log in and navigate successfully', () => {
    // Log in
    cy.get('#Txtuser').type(username);
    cy.get('#Txtpwd').type(password);
    cy.get('input[type="submit"]').click();

    // Navigate to Keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

    // Navigate to KoopCare and Selenggara
    cy.wait(2000);
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0076 > ul > li:nth-child(5) > a')
      .should('be.visible')
      .click();
    
    cy.reload();

    // Select Selenggara Tabung
    cy.get("#ContentPlaceHolder1_UpdatePanel3 .selection > span", { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get("#select2-ContentPlaceHolder1_DropDownList1-results")
      .contains("Selenggara Tabung")
      .click();
    
    // Select Kategori Tabung
    cy.get("#ContentPlaceHolder1_DropdownKategori", { timeout: 10000 })
      .should('be.visible')
      .select(kategoriTabung);
    cy.wait(2000);

    // ✅ Checkpoint 1: Kemaskini Kategori Tabung
    cy.get('#ContentPlaceHolder1_GridTabung_imgbtnEdit_0').click();
    cy.wait(3000);
    cy.get('#ContentPlaceHolder1_GridTabung_imgbtnUpdate_0').click();
    cy.wait(10000);


  });
});