describe('Pendaftaran Pembekal', () => {
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

    cy.get('#Button1').should('be.visible').click();

    cy.get('#NoPendaftaran')
      .should('be.visible')
      .type('1312');
//COMPANY NAME NOT FILLING/NOT WORKING
cy.get('#Nama', { timeout: 10000 }).should('be.visible').type('test1');//this textbox not applylying

    
    // cy.get('#Nama')
    //   .should('be.visible')
    //   .type('test1');

    // Continue filling other fields
    // Adjust based on inspected element structure and requirements


    cy.get('#username').should('be.visible').type('9210');
    cy.get('#jenis').should('be.visible').select('Persatuan'); // Select 'Persatuan'

    cy.get('#bidang') // The dropdown (select element)
    .should('be.visible')
    .select('Pembekalan'); // Replace with the value of the option you want to select
  

    // Select the desired option
    cy.get('#bidang') // Replace with the correct selector for dropdown options
      .contains('Pembekalan') // Replace with the text of the desired option
      
      //phone
      cy.get('#NoTel').type("01223456789");

    // Enter email
    cy.get('#email').should('be.visible').type('user@youremail.com');

    //alamat
    cy.get('#alamat').type('jalan123testing')

    //nama
    cy.get("#namaIndividu").type('yourname');

    //notel
    cy.get('#NoTelefon').type("01223456789");

    
    //simpan
    cy.get('#Button7').click();

  });
});
