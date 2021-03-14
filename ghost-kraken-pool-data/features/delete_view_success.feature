Feature: Creating a post in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_FILTER>"
	Then I wait for 2 seconds
	Then I click on first element with css selector ".dropdown.gh-contentfilter-menu.gh-contentfilter-actions"
    Then I wait for 2 seconds
	Then I click on first element with css selector ".gh-btn.gh-btn-red.gh-btn-icon"
	Then I wait for 2 seconds

  @user2 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_FILTER>"
	Then I wait for 2 seconds
	Then I click on first element with css selector ".dropdown.gh-contentfilter-menu.gh-contentfilter-actions"
    Then I wait for 2 seconds
	Then I click on first element with css selector ".gh-btn.gh-btn-red.gh-btn-icon"
	Then I wait for 2 seconds