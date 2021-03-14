Feature: Creating a post in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
	Then I wait for 2 seconds
	Then I click on first element with css selector ".ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger"
    Then I wait for 5 seconds
	Then I click on four element with css selector ".ember-power-select-option"
	Then I wait for 5 seconds
	Then I click on element having css selector ".gh-contentfilter-menu-trigger.gh-contentfilter-button"
	Then I wait for 5 seconds
	Then I enter "view/featured" into input field having id "view-name"
	Then I wait for 5 seconds
	Then I click on first element with css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"
	Then I wait for 5 seconds

  @user2 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
	Then I wait for 2 seconds
	Then I click on first element with css selector ".ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger"
    Then I wait for 5 seconds
	Then I click on four element with css selector ".ember-power-select-option"
	Then I wait for 5 seconds
	Then I click on element having css selector ".gh-contentfilter-menu-trigger.gh-contentfilter-button"
	Then I wait for 5 seconds
	Then I enter "view/featured" into input field having id "view-name"
	Then I wait for 5 seconds
	Then I click on first element with css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"
	Then I wait for 5 seconds