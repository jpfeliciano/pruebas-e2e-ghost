Feature: Invite people in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to invite people to contribute in my site.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<STAFF_URL>"    
    Then I wait for 1 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green"
    Then I enter "<EMAIL_PEOPLE>" into input field having id "new-user-email"
    Then I click on element having css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"
    Then I wait for 2 seconds
    Then I navigate to page "<STAFF_URL>"
    Then I should see text "<EMAIL_PEOPLE>"


 @user2 @web
  Scenario: As a Ghost user I want to invite people to contribute in my site.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<STAFF_URL>"    
    Then I wait for 1 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green"
    Then I enter "<EMAIL_PEOPLE>" into input field having id "new-user-email"
    Then I click on element having css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"
    Then I wait for 2 seconds
    Then I navigate to page "<STAFF_URL>"
    Then I should see text "<EMAIL_PEOPLE>"


