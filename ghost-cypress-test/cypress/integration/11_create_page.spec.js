var faker = require("faker");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");

describe("Test - creating a page in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  context("Create and verifiy a Page", function () {
    const title = faker.lorem.sentence();
    it("Create a Page", () => {
      cy.get(".gh-nav-top").contains("Pages").click();
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
      //   const tagName = faker.lorem.word(7);
      //   cy.get("button.post-settings").click();
      //   cy.get("input[id=tag-input]").click();
      //   cy.get("input[id=tag-input]").type(tagName);
      //   cy.get("input[id=tag-input]").type("{enter}");
    });
    it("Verify successfully Page creation", () => {
      cy.get(".gh-nav-top").contains("Page").click();
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
