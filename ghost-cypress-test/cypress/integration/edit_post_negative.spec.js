var faker = require("faker");
const email = Cypress.config("email");
const password = Cypress.config("password");
const postEditNegativeText = Cypress.config("postEditNegativeText");

describe("Test editing a post in Ghost - Negative scenario", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit("http://localhost:2368/ghost/");
      cy.wait(2000);
    });
  });
  context("Create and edit a Post", function () {
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
    it("Edit Post created", () => {
      cy.get(".gh-nav-top").contains("Posts").click();
      cy.wait(2000);
      cy.contains(title);
      cy.get(".ember-view.permalink.gh-list-data.gh-post-list-title")
        .first()
        .click({ force: true });
      cy.wait(2000);
      cy.get(".koenig-editor__editor.__mobiledoc-editor").clear();
      cy.wait(1000);
      cy.get(".koenig-editor__editor.__mobiledoc-editor").type("{rightarrow}");
      cy.wait(1000);
      cy.get(
        ".koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
      ).click();
      cy.wait(1000);
      cy.get(
        ".flex.flex-shrink-0.items-center.middarkgrey.ba.b--transparent.hover-darkgrey.kg-cardmenu-card-hover.pl4.pr4.pt2.pb2.anim-fast"
      ).each(($el, index, $list) => {
        if ($el.attr("title") == "Other...") {
          $el.click();
        }
      });
      cy.wait(2000);
      cy.get(
        ".miw-100.pa2.ba.br2.b--lightgrey-d2.f7.form-text.lh-title.tracked-2.h10.nl2.nr2"
      ).type(postEditNegativeText);
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").click();
      cy.wait(5000);
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
