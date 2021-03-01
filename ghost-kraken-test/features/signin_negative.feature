Feature: Sign in with Ghost - negative scenario

  @user1 @web
  Scenario: As an invalid Ghost user I can't Sign in with Ghost
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "$email_1" into input field having id "ember8"
    Then I enter "$name_1" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 2 seconds
    Then I should see text "There is no user with that email address."
