Feature: Sorting a posts in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to sort my Post list by Oldest.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I wait for 1 seconds
    Then I click on element having css selector ".gh-contentfilter-menu.gh-contentfilter-sort"
    Then I click on element contained in css selector ".ember-power-select-option" with text "Oldest"
    Then I wait for 3 seconds