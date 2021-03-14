Feature: Filtering posts in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to filter my Posts by published.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I wait for 1 seconds
    Then I click on element having css selector ".gh-contentfilter-menu.gh-contentfilter-type"
    Then I click on element contained in css selector ".ember-power-select-option" with text "Published posts"
    Then I wait for 3 seconds

  @user2 @web
  Scenario: As a Ghost user I want to filter my Posts by published.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I wait for 1 seconds
    Then I click on element having css selector ".gh-contentfilter-menu.gh-contentfilter-type"
    Then I click on element contained in css selector ".ember-power-select-option" with text "Published posts"
    Then I wait for 3 seconds