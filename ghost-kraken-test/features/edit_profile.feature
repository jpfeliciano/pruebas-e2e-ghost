Feature: Edit user profile

  @user1 @web
  Scenario: As a Ghost user I want to edit my profile data.
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/staff"    
    Then I wait for 2 seconds
    Then I click on my user record contained in css selector ".apps-grid-cell.tooltip-centered" by using the selector value ".gh-user-name.mb1"    
    Then I wait for 1 seconds    
    Then I clear input field having id "user-name"
    Then I enter "$name_1" into input field having id "user-name"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I should see text "$$name_1"


