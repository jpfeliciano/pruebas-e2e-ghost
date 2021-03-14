Feature: Edit a post in Ghost - Negative

  @user1 @web
  Scenario: As a Ghost user I want to edit a recently created Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_POST_URL>"
    Then I wait for 2 seconds    
    Then I enter "<POST_NAME_NEGATIVE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "<POST_TEXT>" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"    
    Then I wait for 2 seconds
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I should see text "<POST_NAME_NEGATIVE>"
    Then I click on first element with css selector ".ember-view.permalink.gh-list-data.gh-post-list-title"
    Then I wait for 2 seconds
    Then I clear input field having css selector ".koenig-editor__editor.__mobiledoc-editor"    
    Then I wait for 1 seconds
    Then I press right arrow key into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
    Then I wait for 1 seconds
    Then I click on element having css selector ".koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
    Then I wait for 1 seconds
    Then I click on element contained in css selector ".flex.flex-shrink-0.items-center.middarkgrey.ba.b--transparent.hover-darkgrey.kg-cardmenu-card-hover.pl4.pr4.pt2.pb2.anim-fast" with title "Other..."
    Then I wait for 2 seconds
    Then I enter "<POST_EDIT_NEGATIVE_TEXT>" into input field having css selector ".miw-100.pa2.ba.br2.b--lightgrey-d2.f7.form-text.lh-title.tracked-2.h10.nl2.nr2"
    Then I click on element having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 5 seconds
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I should see text "<POST_NAME_NEGATIVE>"


  @user2 @web
  Scenario: As a Ghost user I want to edit a recently created Post.
    Given I navigate to page "<GHOST_URL>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I wait for 2 seconds
    Then I navigate to page "<CREATE_POST_URL>"
    Then I wait for 2 seconds    
    Then I enter "<POST_NAME_NEGATIVE>" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "<POST_TEXT>" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"    
    Then I wait for 2 seconds
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I should see text "<POST_NAME_NEGATIVE>"
    Then I click on first element with css selector ".ember-view.permalink.gh-list-data.gh-post-list-title"
    Then I wait for 2 seconds
    Then I clear input field having css selector ".koenig-editor__editor.__mobiledoc-editor"    
    Then I wait for 1 seconds
    Then I press right arrow key into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
    Then I wait for 1 seconds
    Then I click on element having css selector ".koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
    Then I wait for 1 seconds
    Then I click on element contained in css selector ".flex.flex-shrink-0.items-center.middarkgrey.ba.b--transparent.hover-darkgrey.kg-cardmenu-card-hover.pl4.pr4.pt2.pb2.anim-fast" with title "Other..."
    Then I wait for 2 seconds
    Then I enter "<POST_EDIT_NEGATIVE_TEXT>" into input field having css selector ".miw-100.pa2.ba.br2.b--lightgrey-d2.f7.form-text.lh-title.tracked-2.h10.nl2.nr2"
    Then I click on element having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 5 seconds
    Then I navigate to page "<LIST_POSTS_URL>"
    Then I should see text "<POST_NAME_NEGATIVE>"