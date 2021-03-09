var faker = require("faker");
const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test delete a tag in Ghost", () => {
    beforeEach(() => {
        cy.login().then((user) => {
            cy.visit(ghostUrl);
            cy.wait(2000);
        });
    });
    it("Delete a tag", () => {
        cy.screenshot(`step_1/${appReference}-home`);
        cy.get(".gh-nav-top").contains("Tags").click();
        cy.wait(2000);
        cy.screenshot(`step_2/${appReference}-find-tag`);
        cy.wait(2000);
        cy.get(".gh-list-row.gh-tags-list-item.ember-view").contains("Tag1").click();
        cy.wait(3000);
        cy.screenshot(`step_3/${appReference}-view-tag`);
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.mb15").click();
        cy.wait(2000);
        cy.screenshot(`step_4/${appReference}-confirm-delete`);
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
        cy.wait(2000);
    });
    it("Verify successfully Tag creation", () => {
        cy.wait(2000);
        cy.screenshot(`step_5/${appReference}-verify-tag`);
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
