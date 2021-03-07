Feature: Creating a page with an overflowed title in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to try creating a Page with an overflowed title.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_PAGES_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_PAGE_URL>"
    Then I wait for 2 seconds    
    Then I enter "<OVERFLOWED_TITLE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 1 seconds
    Then I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I click on element having css selector ".gh-btn.gh-btn-red"
