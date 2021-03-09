var faker = require("faker");
const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test edit user profile in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  it("Edit user profile", () => {
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.wait(2000);
    cy.screenshot(`step_1/${appReference}-edit-profile`);
    // Then I click on my user record contained in css selector ".apps-grid-cell.tooltip-centered" by using the selector value ".gh-user-name.mb1"
    cy.get("span.gh-user-name.mb1")
      .invoke("text")
      .then((userName) => {
        if (appVersion == "3.3.0") {
          cy.get("div.apps-grid-cell > a").each(($el, index, $list) => {
            console.log("each: " + $el.find("h3").text());
            if ($el.find("h3").text() == userName) {
              cy.wrap($el)
                .invoke("attr", "href")
                .then((href) => {
                  cy.visit(ghostUrl + href);
                  // Then I wait for 1 seconds
                  cy.wait(1000);
                  cy.screenshot(`step_2/${appReference}-edit-profile`);
                  cy.get(".gh-main").scrollTo("center");
                  cy.screenshot(`step_3/${appReference}-edit-profile`);
                  cy.get(".gh-main").scrollTo("bottom");
                  cy.screenshot(`step_4/${appReference}-edit-profile`);
                  cy.get(".gh-main").scrollTo("top");
                  // Then I clear input field having id "user-name"
                  cy.get("#user-name").clear({ force: true });
                  // Then I enter "$name_1" into input field having id "user-name"
                  const name = faker.name.findName();
                  cy.get("#user-name").type(name, { force: true });
                  // Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
                  cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({
                    force: true,
                  });
                  // Then I navigate to page "http://localhost:2368/ghost/#/staff"
                  cy.get(".gh-nav-top").contains("Staff").click();
                  // Then I should see text "$$name_1"
                  cy.contains(name);
                });
            }
          });
        } else {
          cy.get("div.apps-grid-cell.tooltip-centered > a").each(
            ($el, index, $list) => {
              console.log("each: " + $el.find("h3").text());
              if ($el.find("h3").text() == userName) {
                cy.wrap($el)
                  .invoke("attr", "href")
                  .then((href) => {
                    cy.visit(ghostUrl + href);
                    // Then I wait for 1 seconds
                    cy.wait(1000);
                    cy.screenshot(`step_2/${appReference}-edit-profile`);
                    cy.get(".gh-main").scrollTo("center");
                    cy.screenshot(`step_3/${appReference}-edit-profile`);
                    cy.get(".gh-main").scrollTo("bottom");
                    cy.screenshot(`step_4/${appReference}-edit-profile`);
                    cy.get(".gh-main").scrollTo("top");
                    // Then I clear input field having id "user-name"
                    cy.get("#user-name").clear({ force: true });
                    // Then I enter "$name_1" into input field having id "user-name"
                    const name = faker.name.findName();
                    cy.get("#user-name").type(name, { force: true });
                    // Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
                    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({
                      force: true,
                    });
                    // Then I navigate to page "http://localhost:2368/ghost/#/staff"
                    cy.get(".gh-nav-top").contains("Staff").click();
                    // Then I should see text "$$name_1"
                    cy.contains(name);
                  });
              }
            }
          );
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
