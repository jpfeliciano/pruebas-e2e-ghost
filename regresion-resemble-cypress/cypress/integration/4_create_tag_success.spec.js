var faker = require("faker");
const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test creating a tag in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
     // cy.screenshot(`step_1/${appReference}-home`);
    });
  });

    it("Create a tag", () => {
   
      cy.get(".gh-nav-top").contains("Tags").click();
      cy.wait(3000);
      cy.screenshot(`step_2/${appReference}-create-tag`);
      cy.get(".ember-view.gh-btn.gh-btn-green").click();
      cy.wait(2000);
      cy.screenshot(`step_3/${appReference}-create-tag`);
      cy.get("#tag-name").click({force: true});
      cy.get("#tag-name").type("Tag1",{force: true});
      cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
      cy.wait(2000);
      cy.location().its('href').should('include', 'Tag1')
    });
});

Cypress.Commands.add("login", () => {
  // 1. Send log in API call
  return cy
    .request({
      url: ghostAuthUrl,
      method: "POST",
      headers: {
        Referer: baseUrl,
      },
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
