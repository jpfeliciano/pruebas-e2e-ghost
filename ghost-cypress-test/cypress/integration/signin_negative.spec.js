var faker = require("faker");
describe("Sign in with Ghost - negative scenario", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(2000);
  });
  it("Test fill random email address and password", () => {
    cy.get("form").within(() => {
      cy.get('input[name="identification"]').type(faker.internet.email());
      cy.get('input[name="password"]').type(faker.random.alphaNumeric(10));
      cy.get("#ember12").click();
    });
    cy.wait(1000);    
    cy.get('p.main-error').should('be.visible')
  });
});
