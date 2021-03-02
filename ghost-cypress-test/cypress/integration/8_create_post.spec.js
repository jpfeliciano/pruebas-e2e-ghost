var faker = require("faker");
const email = Cypress.config("email");
const password = Cypress.config("password");

describe("Test creating a post in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit("http://localhost:2368/ghost/");
      cy.wait(2000);
    });
  });
  context("Create and verifiy a Post", function () {
    const title = faker.lorem.sentence();
    it("Create a Post", () => {
      cy.get(".gh-nav-top").contains("Posts").click();
      cy.wait(2000);
      cy.get(".ember-view.gh-btn.gh-btn-green").click();
      cy.wait(2000);
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
