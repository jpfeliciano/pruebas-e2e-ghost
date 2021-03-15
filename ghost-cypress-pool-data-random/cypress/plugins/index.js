/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const faker = require("faker");
let tag = [];
let profile = [];
let post = [];

module.exports = (on, config) => {
  on("task", {
    tagcreate() {
      for (let index = 0; index < 10; index++) {
        tag.push([
          faker.name.firstName(),
          faker.internet.email(),
          faker.lorem.sentence(),
          faker.random.number({
            'min': 000000,
            'max': 999999
          })
        ])
      };
      return tag;
    },
  });

  on("task", {
    editprofile() {
      for (let index = 0; index < 100; index++) {
        profile.push([
          faker.name.findName(),
          faker.name.firstName(),

          faker.address.city(),
          faker.internet.url(),
          faker.internet.userAgent(),
          faker.hacker.phrase(),
          faker.lorem.sentence()
        ])
      };
      return profile;
    },
  });

  on("task", {
    editpostnegative() {
      for (let index = 0; index < 5; index++) {
        post.push([
          faker.hacker.phrase(),
          faker.internet.url()
        ])
      };
      return post;
    },
  });

  on("task", {
    createPage() {
      for (let index = 0; index < 5; index++) {
        page.push([
          faker.lorem.word(),
          faker.internet.url()
        ])
      };
      return page;
    },
  });

  // on("task", {
  //   tagPrueba() {
  //     tag = {
  //       name: faker.name.firstName(),
  //       slug: faker.internet.email(),
  //       description: faker.lorem.sentence(),
  //       accent_color: faker.random.number({
  //         'min': 000000,
  //         'max': 999999
  //       })
  //     };
  //     return tag;
  //   },
  // });
};
