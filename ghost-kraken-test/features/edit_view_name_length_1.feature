Feature: Creating a post in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/posts?type=featured"
	Then I wait for 2 seconds
	Then I click on first element with css selector ".dropdown.gh-contentfilter-menu.gh-contentfilter-actions"
    Then I wait for 5 seconds
	Then I clear input field having css selector ".ember-text-field.gh-input.ember-view"
	Then I enter "p" into input field having id "view-name"
	Then I wait for 2 seconds
	Then I click on first element with css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"
	Then I wait for 5 seconds