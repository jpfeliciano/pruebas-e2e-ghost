Feature: User create a tag with only name


  @user1 @web
  Scenario: User is login with user y password correct
	Given I navigate to page "http://localhost:2368/ghost/#/signin"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I wait for 2 seconds
	Given I navigate to page "http://localhost:2368/ghost/#/tags"
	Given I navigate to page "http://localhost:2368/ghost/#/tags/new"
	Then I enter "$name_1" into input field having id "tag-name"
    Then I wait for 2 seconds
	Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
	Then I wait for 2 seconds
	Given I navigate to page "http://localhost:2368/ghost/#/tags"
	Then I should see text "$$name_1"
    Then I click on first element with css selector ".tags-list.gh-list"
	Then I wait for 2 seconds
	Then I enter "$name_1" into input field having id "tag-name"
	Then I wait for 2 seconds
	Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
	Then I wait for 2 seconds
	Given I navigate to page "http://localhost:2368/ghost/#/tags"
	Then I should see text "$$name_1"
	