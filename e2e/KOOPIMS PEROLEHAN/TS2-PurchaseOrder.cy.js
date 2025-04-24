
//server error for kemaskini quotation

describe('Purchase order', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Cannot read properties of undefined')) {
        console.error('Ignored Error:', err.message);
        return false;
      }
    });
    
  });

  it('should log in and navigate successfully', () => {
    cy.visit('https://supplier.pasarsahabat.my/Login.aspx');

    // Log in
    cy.get('#Username').type('syarikat2');
    cy.get('#Pass').type('12345');
    cy.get('#Button2').click();

cy.get('#aspnetForm > div:nth-child(7) > header > div > nav > ul > li:nth-child(3) > a')
.click();

cy.get('#ctl00_ContentPlaceHolder1_Gridview1_ctl02_gv4_LinkButton3 > img')
.click();

cy.get('#ctl00_ContentPlaceHolder1_Gridview1_ctl04_gv4_LinkButton4 > img')
.click();



  });
});
