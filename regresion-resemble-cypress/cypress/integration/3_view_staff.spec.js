var faker = require("faker");
const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test - view staff in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });

    it("View Staff", () => {
      cy.screenshot(`step_1/${appReference}-home`);
      cy.get(".gh-nav-top").contains("Staff").click();
      cy.wait(2000);
      cy.screenshot(`step_2/${appReference}-view-staff`);
      cy.wait(2000);

    });
    it("Verify successfully View Staff", () => {
      cy.get(".gh-nav-top").contains("Staff").click();
      cy.wait(2000);
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
