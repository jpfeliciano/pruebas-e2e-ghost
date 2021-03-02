const email = Cypress.config("email");
const password = Cypress.config("password");

describe('Edit un posts with only name', () => {
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
        cy.get('.gh-nav-top').contains('Posts').click()
		cy.get('.posts-list.gh-list').contains('Creating a custom theme').click()
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear( {force:true})
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Prueba POST Positivo',  {force:true})
		cy.get('.gh-publishmenu.ember-view').contains('Update').click()
		cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').contains('Update').click()
		cy.wait(2000)
		cy.visit('http://localhost:2368/ghost/#/posts')
		cy.get('.posts-list.gh-list').scrollIntoView({ offset: { top: 150, left: 0 } })
		cy.get('.posts-list.gh-list').contains('Prueba POST Positivo').should('be.visible')       
		cy.get('.posts-list.gh-list').contains('Prueba POST Positivo').click()
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear( {force:true})
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Creating a custom theme',  {force:true})
		cy.get('.gh-publishmenu.ember-view').contains('Update').click()
		cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').contains('Update').click()
		cy.wait(2000)
	
     })
  })