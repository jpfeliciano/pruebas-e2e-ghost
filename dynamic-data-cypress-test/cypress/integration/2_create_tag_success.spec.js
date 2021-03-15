const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const mockarooApiTagsUrl = Cypress.config("mockarooApiTagsUrl");

describe("Create tag ", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  it("Fill tag form", () => {
    cy.getData().then((jsonData) => {
      jsonData.forEach((tag) => {
        cy.log(tag);
        cy.wait(1000);
        cy.get(".gh-nav-top").contains("Tags").click();
        cy.get(".ember-view.gh-btn.gh-btn-green").click();
        cy.get("#tag-name").type(tag.name, { force: true });
        cy.get("#tag-slug").type(tag.name, { force: true });
        cy.get("#tag-description").type(tag.description, { force: true });
        cy.get('input[name="accent-color"]').type(tag.color, { force: true });
        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
        cy.wait(1000);
        cy.location().then((loc) => {
          let newLoc = ("" + loc).replaceAll("__", "ghost");
          cy.log("URL of new post: " + newLoc);
          cy.visit(newLoc);
          cy.wait(3000);
          cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
        });
      });
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

Cypress.Commands.add("getData", () => {
  // 1. Get Data from API
  return cy
    .request({
      url: mockarooApiTagsUrl,
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
    .then((response) => {
      return response.body;
    });
});
