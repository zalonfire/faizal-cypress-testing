//TIADA DATA UTK STATUS TELAH DISAHKAN PROBLEM
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
    cy.get('#Txtuser').type('10135');
    cy.get('#Txtpwd').type('Test@123');
    cy.get('input[type="submit"]').click();
    // Navigate to Kewangan
    cy.get('#ContentPlaceHolder1_bnd_modules_gt_lnk_5 > div > div > div.ch-info-front.ch-img-6')
    .should('be.visible')
    .click();
    // Navigate to Bajet dropdown => Bajet Jabatan
    cy.get('#owl-demo > div.owl-stage-outer > div > div:nth-child(3) > li > div > a')
    .should('be.visible')
    .click();
  cy.get('#S0087 > ul > li:nth-child(2) > a')
    .should('be.visible')
    .click();

    //status disahkan then klik butang carian
    cy.reload()
    cy.get("#select2-ContentPlaceHolder1_DropDownList4-container").should('be.visible')
    cy.get("#select2-ContentPlaceHolder1_DropDownList4-container").click();
    //Jenis permohonan baru dropdown
    cy.get("#select2-ContentPlaceHolder1_DropDownList5-container").should('be.visible')
    cy.get("#select2-ContentPlaceHolder1_DropDownList5-container").click();
    cy.get('[aria-expanded="true"]').should("exist");
    cy.get("#select2-ContentPlaceHolder1_DropDownList5-results")
        .contains("BARU")
        .click();
        //carian
    cy.get('#ContentPlaceHolder1_Button1').click();
//clik icon kemaskini
    cy.get('#ContentPlaceHolder1_gv_refdata_LinkButton2_0')


    // cy.get('[aria-expanded="true"]').should("exist");
    // cy.get("#select2-ContentPlaceHolder1_DropDownList4-results")
    //     .contains("APPROVED")
    //     .click();
    //     cy.get('#ContentPlaceHolder1_Button1').click()//carian
  });
});
