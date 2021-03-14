Feature: List publics tags

  @user1 @web
  Scenario: As a Ghost user I List publics tags
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_TAGS_URL>"
    Then I wait for 2 seconds
    Then I should see text "Public tags"


  @user2 @web
  Scenario: As a Ghost user I List publics tags
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_TAGS_URL>"
    Then I wait for 2 seconds
    Then I should see text "Public tags"