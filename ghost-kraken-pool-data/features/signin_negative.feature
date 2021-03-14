Feature: Sign in with Ghost - negative scenario

  @user1 @web
  Scenario: As an invalid Ghost user I can't Sign in with Ghost
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME_P>" into input field having id "ember8"
    Then I enter "<PASSWORD_P>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 2 seconds
    Then I should see text "There is no user with that email address."
	
	
  @user2 @web
  Scenario: As an invalid Ghost user I can't Sign in with Ghost
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME_P>" into input field having id "ember8"
    Then I enter "" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 2 seconds
    Then I should see text "There is no user with that email address."

