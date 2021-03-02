const email = Cypress.config("email");
const password = Cypress.config("password");

describe('Testing Sig in User y Password correct', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(2000)
    })
    it('Input login y password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(email)
            cy.get('input[name="password"]').type(password)
            cy.get('#ember12').click()
        })
        cy.wait(1000)
        //logged in
        cy.contains('Posts')
    })
  })