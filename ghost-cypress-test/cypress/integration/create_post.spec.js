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
  it("Create a Post", () => {
    let title = faker.lorem.sentence();
    let content = faker.lorem.paragraph();
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.wait(2000);
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.wait(2000);
    cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(title, {
      force: true,
    });
    cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").click();
    cy.wait(2000);
    //TODO: Genera la siguiente excepción: Cannot read property 'KeyboardEvent' of undefined
    // cy.get(
    //   "div.koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    // ).type(content, { force: true });
    cy.wait(3000);
    cy.get("a.blue.link.fw4.flex.items-center.ember-view").click();
    cy.wait(2000);
    cy.contains("title");
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
