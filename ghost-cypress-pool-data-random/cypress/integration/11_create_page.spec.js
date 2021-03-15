var faker = require("faker");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
let index = 1;

describe("Test - creating a page in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  context("Create and verifiy a Page", function () {
    it("Create a Page", () => {

      for (index = 0; index < 1; index++) {
        cy.task("createPage").then((object) => {
          object.forEach((page) => {

            cy.get(".gh-nav-top").contains("Pages").click();
            cy.wait(2000);
            cy.get(".ember-view.gh-btn.gh-btn-green").click();
            cy.wait(2000);
            cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").click();
            cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
              page[0]
            );
            cy.get(
              ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
            ).click();

            cy.wait(1000);
            cy.location().then((loc) => {
            let newLoc = ('' + loc).replaceAll('__', 'ghost');
            cy.log('URL of new post: ' + newLoc);
            cy.visit("http://localhost:2368/ghost/#/pages");
            cy.wait(3000);
            });

            cy.get(".gh-nav-top").contains("Page").click();
            cy.wait(2000);
            cy.contains(page[0]);
          });
        });
      }
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
