const email = Cypress.config("email");
const password = Cypress.config("password");

describe("Test Sign in and Sign out with Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {      
      cy.visit("http://localhost:2368/ghost/");
      cy.wait(2000);
    });
  });
  it("Sign out", () => {
    cy.get("div.gh-nav-bottom").click();
    cy.wait(1000);
    cy.get("a.dropdown-item.user-menu-signout.ember-view").click();
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
