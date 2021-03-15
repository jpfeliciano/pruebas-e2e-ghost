var faker = require("faker");
const email = Cypress.config("email");
const password = Cypress.config("password");
let index = 0;

describe('Create un tag with only name', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(2000)
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(email)
            cy.get('input[name="password"]').type(password)
            cy.get('#ember12').click()
        })
    })

    it('Test form feedback', () => {

        for (index = 0; index < 1; index++) {
            cy.task("tagcreate").then((object) => {
                object.forEach((tag) => {
                    cy.wait(1000)
                    cy.get('.gh-nav-top').contains('Tags').click()
                    cy.get('.ember-view.gh-btn.gh-btn-green').click()
                    cy.get('#tag-name').type(tag[0], { force: true })
                    cy.get('#tag-slug').type(tag[1], { force: true })
                    cy.get('#tag-description').type(tag[2], { force: true })
                    cy.get('input[name="accent-color"]').type(tag[3], { force: true })
                    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
                    cy.wait(1000);
                    cy.location().then((loc) => {
                        let newLoc = ('' + loc).replaceAll('__', 'ghost');
                        cy.log('URL of new post: ' + newLoc);
                        cy.visit(newLoc);
                        cy.wait(3000);
                        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
                    });
                })
            })
        }
    })
});