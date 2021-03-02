const email = Cypress.config("email");
const password = Cypress.config("password");

describe('Create page success', () => {
    beforeEach(()=>{
		 cy.login().then((user) => {
		  console.log(user);
		  cy.visit("http://localhost:2368/ghost/");
		  cy.wait(2000);
		});
       cy.wait(2000)
    })
   
    it('Test form feedback', () => {
        cy.wait(1000)
        cy.get('.gh-nav-top').contains('Pages').click()
		cy.get('.ember-view.gh-btn.gh-btn-green').click()
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Prueba Page',  {force:true})
		cy.get('.koenig-editor__editor').click()
		//const p = cy.url()
		//cy.visit(cy.url())
		//cy.get('.koenig-editor__editor').type('Prueba Page')
		cy.wait(5000)
		cy.visit('http://localhost:2368/ghost/#/pages')
	    cy.get('.content-list').contains('Prueba Page')
     })
  })
  
 Cypress.Commands.add("login", () => {
  // 1. Send log in API call
  return cy
    .request({
      url: "http://localhost:2368/ghost/api/v3/admin/session",
      method: "POST",
      body: {
        username: email,
        password: password,
      },
    })
    .then(({ body }) => {
      console.log(body);
      // Save received auth token to local storage
      window.localStorage.setItem("authToken", body.authToken);
      return body.data;
    });
});