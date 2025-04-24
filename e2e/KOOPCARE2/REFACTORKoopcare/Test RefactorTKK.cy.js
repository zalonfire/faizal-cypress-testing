describe('Tabung Kematian Layak/Tidak Layak', () => {
  const siteURL = 'https://koopims.pasarsahabat.my/';
  const credentials = {
    username: '10088',
    password: '12345'
  };

  const testData = {
    sarLocation: 'SAR JITRA',
    noKpBaru: '370109135004',
    kategori: 'TABUNG KHAIRAT KEMATIAN',
    namaPemohon: 'BIA BINTI LILI',
    noKpSiMati: '370109135004',
    tarikhMatiLayak: '22/1/2025',
    tarikhMatiTidakLayak: '22/1/2020'
  };

  const selectors = {
    login: {
      usernameField: '#Txtuser',
      passwordField: '#Txtpwd',
      submitButton: 'input[type="submit"]'
    },
    navigation: {
      keanggotaanModule: '#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-front.ch-img-1',
      koopcareMenu: '#owl-demo > div.owl-stage-outer > div > div:nth-child(7) > li > div > a',
      semakanSubmenu: '#S0076 > ul > li:nth-child(1) > a'
    },
    form: {
      sarDropdown: '#ContentPlaceHolder1_JOCcaw',
      noKpBaruField: '#ContentPlaceHolder1_Txtnokp',
      searchButton: '#ContentPlaceHolder1_Button2',
      checkbox: '#ContentPlaceHolder1_chk',
      kategoriDropdown: '#select2-ContentPlaceHolder1_ddcat-container',
      kategoriResults: '#select2-ContentPlaceHolder1_ddcat-results',
      namaPemohonField: '#ContentPlaceHolder1_txtnama2',
      noKpSiMatiField: '#ContentPlaceHolder1_txtBenicno',
      tarikhMatiField: '#ContentPlaceHolder1_TarikhKematian',
      semakButton: '#ContentPlaceHolder1_btnsave'
    }
  };

  beforeEach(() => {
    // Suppress known exceptions
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Invalid or unexpected token')) {
        console.error('Ignored Error:', err);
        return false;
      }
    });

    // Visit the website before each test
    cy.visit(siteURL);
  });

  function login() {
    cy.get(selectors.login.usernameField).type(credentials.username);
    cy.get(selectors.login.passwordField).type(credentials.password);
    cy.get(selectors.login.submitButton).click();
    cy.wait(3000); // Tunggu selepas login untuk load halaman seterusnya
  }

  function navigateToSemakan() {
    cy.get(selectors.navigation.keanggotaanModule).should('be.visible').click();
    cy.wait(3000); // Tunggu selepas klik keanggotaan

    cy.get(selectors.navigation.koopcareMenu).should('be.visible').click();
    cy.wait(3000); // Tunggu selepas klik menu Koopcare

    cy.get(selectors.navigation.semakanSubmenu).should('be.visible').click();
    cy.wait(3000); // Tunggu selepas klik submenu Semakan
  }

  function fillSemakanForm(isEligible) {
    cy.reload();
    cy.wait(2000); // Tunggu selepas reload

    cy.get(selectors.form.sarDropdown).select(testData.sarLocation, { force: true });
    cy.get(selectors.form.noKpBaruField).type(testData.noKpBaru, { force: true });

    cy.get(selectors.form.searchButton).click({ force: true });
    cy.wait(3000); // Tunggu selepas klik carian

    cy.get(selectors.form.checkbox).click();
    cy.wait(3000); // Tunggu selepas klik checkbox

    cy.get(selectors.form.kategoriDropdown).click();
    cy.wait(1000); // Tunggu sebelum pastikan dropdown terbuka

    cy.get('[aria-expanded="true"]').should('exist');
    cy.get(selectors.form.kategoriResults).contains(testData.kategori).click();
    cy.wait(2000); // Tunggu selepas memilih kategori

    cy.get(selectors.form.namaPemohonField).type(testData.namaPemohon);
    cy.wait(2000); // Tunggu selepas input nama

    cy.get(selectors.form.noKpSiMatiField).type(testData.noKpSiMati);
    cy.wait(2000); // Tunggu selepas input No. K/P Si Mati

    // Pilih tarikh kematian berdasarkan eligibility
    const tarikhKematian = isEligible ? testData.tarikhMatiLayak : testData.tarikhMatiTidakLayak;
    cy.get(selectors.form.tarikhMatiField).type(tarikhKematian);
    cy.wait(2000); // Tunggu selepas input tarikh kematian

    cy.get(selectors.form.semakButton).click({ force: true });
    cy.wait(5000); // Tunggu selepas klik butang semak untuk UI memproses
  }

  it('should log in and check eligibility (Layak)', () => {
    login();
    navigateToSemakan();
    fillSemakanForm(true); // true untuk layak
  });

  it('should log in and check eligibility (Tidak Layak)', () => {
    login();
    navigateToSemakan();
    fillSemakanForm(false); // false untuk tidak layak
  });
});
