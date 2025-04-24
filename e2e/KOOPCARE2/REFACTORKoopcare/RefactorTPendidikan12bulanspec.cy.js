describe('Semak tabung pendidikan lebih atau kurang 12 bulan', () => {
  const url = 'https://koopims.pasarsahabat.my/';
  const username = '10088';
  const password = '12345';
  const cawangan = 'SAR GONG BADAK';
  const noKpBaru = '201231126112';
  const namaPemohon = 'ONDUYUTONG BINTI AMAU';
  const noKpPemohon = '201231126112';
  const kategori = 'TABUNG PENDIDIKAN';
  const subKategori = 'IJAZAH SARJANA';
  const keputusanAkademik = '>=3.50'; // Change this for layak/tidak layak scenarios
  const tarikhPersijilan = '22/1/2025'; // Change this for layak/tidak layak scenarios
  const noKpPelajar = '123129';

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false;
      }
    });

    cy.visit(url);
  });

  it('should log in and navigate successfully', () => {
    // Log in
    cy.get('#Txtuser').type(username);
    cy.get('#Txtpwd').type(password);
    cy.get('input[type="submit"]').click();

    // Navigate to keanggotaan module
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1')
      .should('be.visible')
      .click();

    // Navigate to KoopCare and submenu Semakan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(7) > li > div > a')
      .should('be.visible')
      .click();
    cy.get('#S0076 > ul > li:nth-child(1) > a')
      .should('be.visible')
      .click();

    cy.reload();
    cy.get('#ContentPlaceHolder1_JOCcaw').select(cawangan, { force: true });
    cy.get('#ContentPlaceHolder1_Txtnokp').type(noKpBaru, { force: true });
    cy.get('#ContentPlaceHolder1_Button2').click({ force: true });
    cy.get('#ContentPlaceHolder1_chk').click();

    cy.wait(4000);
    cy.get('#select2-ContentPlaceHolder1_ddcat-container', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_ddcat-results')
      .contains(kategori)
      .click();

    cy.get('#ContentPlaceHolder1_txtnama2').type(namaPemohon);
    cy.get('#ContentPlaceHolder1_txticno').type(noKpPemohon);

    cy.get('#ContentPlaceHolder1_Subcat > div > div > span > span.selection > span', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.get('[aria-expanded="true"]').should('exist');
    cy.get('#select2-ContentPlaceHolder1_ddsubcat-results')
      .contains(subKategori)
      .click();

    cy.wait(3000);
    cy.get('#ContentPlaceHolder1_ddresult').select(keputusanAkademik, { force: true });
    cy.get('#ContentPlaceHolder1_TarikhSijil').type(tarikhPersijilan);
    cy.get('#ContentPlaceHolder1_PelajarICNO').type(noKpPelajar);

    cy.get('#ContentPlaceHolder1_btnsave').click({ force: true });
  });
});
