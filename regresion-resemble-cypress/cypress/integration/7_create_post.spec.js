var faker = require("faker");
const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test creating a post in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  context("Create and verifiy a Post", function () {
    const title = faker.lorem.sentence();
    it("Create a Post", () => {
      cy.get(".gh-nav-top").contains("Posts").click();
      cy.wait(2000);
      cy.screenshot(`step_1/${appReference}-create-post`);
      if (appVersion == "3.3.0") {
        cy.get(".gh-btn.gh-btn-green.ember-view").click();
      } else {
        cy.get(".ember-view.gh-btn.gh-btn-green").click();
      }
      cy.wait(2000);
      cy.screenshot(`step_2/${appReference}-create-post`);
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").click();
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
        title
      );
      cy.get(
        ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
      ).click();
    });
    it("Verify successfully Post creation", () => {
      cy.get(".gh-nav-top").contains("Posts").click();
      cy.wait(2000);
      cy.contains(title);
    });
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
