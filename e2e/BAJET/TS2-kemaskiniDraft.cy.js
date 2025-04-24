describe('Kemaskini Bajet', () => {
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

    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
      .should('be.visible')
      .click();

    // Navigate to Bajet dropdown => Bajet Jabatan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(2) > li > div > a')
      .should('be.visible')
      .click();

    cy.get('#S0087 > ul > li:nth-child(2) > a')
      .should('be.visible')
      .click();
    
//NO DRAFT IN DROPDOWN
    // Select "DRAFT" status using Select2 dropdown
    cy.reload()
    cy.get("#select2-ContentPlaceHolder1_DropDownList4-container").should('be.visible')
    cy.get("#select2-ContentPlaceHolder1_DropDownList4-container").click();

    cy.get('[aria-expanded="true"]').should("exist");
    cy.get("#select2-ContentPlaceHolder1_DropDownList4-results")
        .contains("Draft")
        .click();
//carian
        cy.get('#ContentPlaceHolder1_Button1').should('be.visible').click();
        cy.wait(2000);
//klik icon kemaskni pada bajet status draft
        cy.get('#ContentPlaceHolder1_gv_refdata_LinkButton2_0').should('be.visible')
    
       //to change 1x run only
        cy.get('#ContentPlaceHolder1_gv_refdata_LinkButton2_0').click();
         //kemaskini tekan
         //cy.get('#ContentPlaceHolder1_Button5').click();
        cy.get("#ContentPlaceHolder1_Gridview2_LinkButton1_0").click();
        cy.get('#ContentPlaceHolder1_Button5')
  .click();

 //hapuskan bajet
 cy.get('#ContentPlaceHolder1_Gridview2_LinkButton3_0').click();
 cy.wait(2000);

 //hantar
       cy.get('#ContentPlaceHolder1_btb_kmes').click(); 
       cy.wait(1000);
       
  });
});