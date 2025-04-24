
//server error for kemaskini quotation

describe('Portal pembekal ', () => {
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

//klik quotation
cy.get('#aspnetForm > div:nth-child(7) > header > div > nav > ul > li:nth-child(2) > a')
.click();
//kemaskini quotation
cy.get('#ctl00_ContentPlaceHolder1_Gridview1_ctl02_ImageButton1')
.click();
cy.get('#Username').type('syarikat2');

//isi quotation edit
cy.get('#ctl00_ContentPlaceHolder1_Textbox11').type('12351');
cy.get('#ctl00_ContentPlaceHolder1_Textbox2').type('test');

//simpan
cy.get('#ctl00_ContentPlaceHolder1_Button3').click();

//hantar
cy.get('#ctl00_ContentPlaceHolder1_Button1').click();







  });
});
