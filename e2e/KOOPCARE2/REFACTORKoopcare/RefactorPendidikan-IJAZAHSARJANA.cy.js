describe('semak tabung pendidikan lebih atau kurang 3.5 result', () => {
  const baseUrl = 'https://koopims.pasarsahabat.my/';
  const username = '10088';
  const password = '12345';
  const cawangan = 'SAR GONG BADAK';
  const noKpBaru = '201231126112';
  const namaPemohon = 'ONDUYUTONG BINTI AMAU';
  const noKpPemohon = '201231126112';
  const kategori = 'TABUNG PENDIDIKAN';
  const subKategori = 'IJAZAH SARJANA';
  const keputusanAkademikLayak = '>=3.50';   // Change this for layak/tidak layak scenarios
  const keputusanAkademikTidakLayak = '<3.50';  // Change this for layak/tidak layak scenarios
  const tarikhPersijilanLayak = '22/1/2025';   // Change this for layak/tidak layak scenarios
  const tarikhPersijilanTidakLayak = '22/1/2020'; // Change this for layak/tidak layak scenarios
  const noKpPelajar = '123129';

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false; // Prevent test failure
      }
    });
    cy.visit(baseUrl);
  });

  ['Layak', 'Tidak Layak'].forEach((status) => {
    it(`should log in and check eligibility for ${status}`, () => {
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

      // Search for eligibility
      cy.reload();
      cy.get('#ContentPlaceHolder1_JOCcaw').select(cawangan, { force: true });
      cy.get('#ContentPlaceHolder1_Txtnokp').type(noKpBaru, { force: true });
      cy.get('#ContentPlaceHolder1_Button2').click({ force: true });

      // Select eligibility checkbox
      cy.get('#ContentPlaceHolder1_chk').should('be.visible').click();
      cy.wait(2000); // Ensure the page is updated

      // Select category
      cy.get('#select2-ContentPlaceHolder1_ddcat-container').should('be.visible').click();
      cy.get('[aria-expanded="true"]').should('exist');
      cy.get('#select2-ContentPlaceHolder1_ddcat-results').contains(kategori).click();
      
      // Wait for the form to update
      cy.wait(2000);

      // Enter applicant details (wait for the field to be enabled)
      cy.get('#ContentPlaceHolder1_txtnama2')
        .should('exist')
        .should('be.visible')
        .should('not.be.disabled')
        .type(namaPemohon, { delay: 100 });

      cy.get('#ContentPlaceHolder1_txticno')
        .should('exist')
        .should('be.visible')
        .should('not.be.disabled')
        .type(noKpPemohon);

      // Select sub-category
      cy.get('#ContentPlaceHolder1_Subcat > div > div > span > span.selection > span')
        .should('be.visible')
        .click();
      cy.get('[aria-expanded="true"]').should('exist');
      cy.get('#select2-ContentPlaceHolder1_ddsubcat-results').contains(subKategori).click();

      // Determine eligibility based on academic results
      const keputusanAkademik = status === 'Layak' ? keputusanAkademikLayak : keputusanAkademikTidakLayak;
      cy.wait(2000);
      cy.get('#ContentPlaceHolder1_ddresult').select(keputusanAkademik, { force: true });

      // Enter certification date based on eligibility
      const tarikhPersijilan = status === 'Layak' ? tarikhPersijilanLayak : tarikhPersijilanTidakLayak;
      cy.get('#ContentPlaceHolder1_TarikhSijil').type(tarikhPersijilan);

      // Enter student IC
      cy.get('#ContentPlaceHolder1_PelajarICNO').type(noKpPelajar);

      // Submit application
      cy.get('#ContentPlaceHolder1_btnsave').click({ force: true });

      // Wait for submission response
      cy.wait(5000);
    });
  });
});
