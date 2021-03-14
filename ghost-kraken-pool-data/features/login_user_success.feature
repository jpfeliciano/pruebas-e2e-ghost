Feature: Login User Success

  @user1 @web
  Scenario: User 1 is login with user y password correct
	Given I navigate to page "<GHOST_SIGNIN_URL>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I wait for 2 seconds
	Then I should see text "Thoughts, stories and ideas."

 @user2 @web
  Scenario: User 1 is login with user y password correct
	Given I navigate to page "<GHOST_SIGNIN_URL>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I wait for 2 seconds
	Then I should see text "Thoughts, stories and ideas."