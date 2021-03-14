Feature: Creating a page in Ghost

  @user1 @web
  Scenario: As a Ghost user I want to create a Page with publishing date tomorrow.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_PAGES_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_PAGE_URL>"
    Then I wait for 2 seconds    
    Then I enter "<PAGE_TITLE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "<POST_TEXT>" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 1 seconds
    Then I click on element having css selector ".post-settings"
    Then I click on element having css selector ".gh-date-time-picker-date "
    Then I clear input field contained in css selector ".gh-date-time-picker-date "
    Then I enter tomorrow into input field contained in css selector ".gh-date-time-picker-date "
    Then I press enter key into input field contained in css selector ".gh-date-time-picker-date "
    Then I click on element having css selector ".close.settings-menu-header-action"
    Then I click on element having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 5 seconds
    Then I navigate to page "<LIST_PAGES_URL>"
    Then I should see text "<PAGE_TITLE>"

  @user2 @web
  Scenario: As a Ghost user I want to create a Page with publishing date tomorrow.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_PAGES_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_PAGE_URL>"
    Then I wait for 2 seconds    
    Then I enter "<PAGE_TITLE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "<POST_TEXT>" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 1 seconds
    Then I click on element having css selector ".post-settings"
    Then I click on element having css selector ".gh-date-time-picker-date "
    Then I clear input field contained in css selector ".gh-date-time-picker-date "
    Then I enter tomorrow into input field contained in css selector ".gh-date-time-picker-date "
    Then I press enter key into input field contained in css selector ".gh-date-time-picker-date "
    Then I click on element having css selector ".close.settings-menu-header-action"
    Then I click on element having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 5 seconds
    Then I navigate to page "<LIST_PAGES_URL>"
    Then I should see text "<PAGE_TITLE>"