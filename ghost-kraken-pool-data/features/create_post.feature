Feature: Creating a post in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_POST_URL>"
    Then I wait for 2 seconds    
    Then I enter "<POST_TITLE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "<POST_TEXT>" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"    
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I wait for 2 seconds    
    Then I should see text "<POST_TITLE>"

  @user2 @web
  Scenario: As a Ghost user I want to create a Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_POST_URL>"
    Then I wait for 2 seconds    
    Then I enter "<POST_TITLE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "<POST_TEXT>" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"    
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I wait for 2 seconds
    Then I should see text "<POST_TITLE>"


