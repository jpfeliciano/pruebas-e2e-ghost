Feature: Sign in and Sign out with Ghost

  @user1 @web
  Scenario: As a valid Ghost user I can Sign In and Sign out from the app
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I click on element having css selector ".gh-nav-bottom"
    Then I wait for 2 seconds
    Then I click on element having css selector ".dropdown-item.user-menu-signout.ember-view"
    Then I wait for 2 seconds
    Then I should see text "Sign in"
