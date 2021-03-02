const email = Cypress.config("email");
const password = Cypress.config("password");

describe('Edit un tag with only name', () => {
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
		cy.get('.tags-list.gh-list').first().click()
		//cy.get('.ember-view.gh-list-data.gh-tag-list-title.gh-list-cellwidth-70').contains('PruebaTag').click()
		cy.get('#tag-name').clear( {force:true})
		cy.get('#tag-name').type('PruebaTag1',  {force:true})
		cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
		
		cy.wait(2000)
		cy.location().its('href').should('include', 'prueba')
     })
  })