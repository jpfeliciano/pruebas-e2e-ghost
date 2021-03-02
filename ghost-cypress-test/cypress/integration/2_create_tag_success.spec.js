const email = Cypress.config("email");
const password = Cypress.config("password");

describe('Create un tag with only name', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
       cy.wait(2000)
    })
   
    it('Test form feedback', () => {
		cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(email)
            cy.get('input[name="password"]').type(password)
            cy.get('#ember12').click()
        })
        cy.wait(1000)
        cy.get('.gh-nav-top').contains('Tags').click()
		cy.get('.ember-view.gh-btn.gh-btn-green').click()
		cy.get('#tag-name').type('PruebaTag',  {force:true})
		cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()

     })
  })