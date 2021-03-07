Feature: Modify general settings

  @user1 @web
  Scenario: As a Ghost user I want to modify General Settings in Ghost.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/settings/general"
    Then I wait for 1 seconds
    Then I click on button contained in first element with css selector ".gh-setting-first"
    Then I wait for 1 seconds
    Then I enter "My Site" into first input field and "My Description" into second input field both contained in element with css selector ".gh-setting-content-extended"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"