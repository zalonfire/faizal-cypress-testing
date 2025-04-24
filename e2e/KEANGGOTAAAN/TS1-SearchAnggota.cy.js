describe('Search anggota', () => {
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
    cy.get('#Txtuser').type('10088');
    cy.get('#Txtpwd').type('12345');
    cy.get('input[type="submit"]').click();

    //nav keanggotaan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_0 > div > div > div.ch-info-back > h3')
  .click({ force: true });

//submenu papan pemuka
cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();
     //isi
     cy.get('#ContentPlaceHolder1_TextBox1').type('000123131028', { force: true });


     //kawasan
     cy.get("#ContentPlaceHolder1_UpdatePanel1 > div:nth-child(1) > div > div:nth-child(1) > div > div > span > span.selection > span").should('be.visible').click();
       cy.get('[aria-expanded="true"]').should('exist');
       cy.get("#select2-ContentPlaceHolder1_TextBox18-results")
         .contains("SELANGOR dan KUALA LUMPUR")
         .click();
 
 //wilayah
 cy.get("#ContentPlaceHolder1_UpdatePanel1 > div:nth-child(1) > div > div:nth-child(2) > div > div > span > span.selection > span").should('be.visible').click();
       cy.get('[aria-expanded="true"]').should('exist');
       cy.get("#select2-ContentPlaceHolder1_TextBox8-results")
         .contains("WILAYAH SEL KL UTARA")
         .click();
 
 //cawangan
 cy.get('#ContentPlaceHolder1_UpdatePanel1 > div:nth-child(2) > div > div:nth-child(1) > div > div > span > span.selection > span').should('be.visible').click();
 cy.get('[aria-expanded="true"]').should('exist');
 cy.get("#select2-ContentPlaceHolder1_TextBox9-results")
   .contains("Pejabat AIM Wilayah Sel KL Utara")
   .click();
cy.wait(2000);

   //carian
   cy.get('#ContentPlaceHolder1_Button2').click({ force: true });

//maklumat penama
//no kp baru
cy.get('#ContentPlaceHolder1_TextBox11').type('1231313')

//dropdown hubungan
cy.get("#ContentPlaceHolder1_lev2 > div:nth-child(14) > div > div:nth-child(1) > div > div > span > span.selection > span").should('be.visible').click();
      cy.get('[aria-expanded="true"]').should('exist');
      cy.get("#select2-ContentPlaceHolder1_DropDownList2-results")
        .contains("SUAMI")
        .click();
   

        //click kemaskini
        cy.get('#ContentPlaceHolder1_Button3').click();



});
});
