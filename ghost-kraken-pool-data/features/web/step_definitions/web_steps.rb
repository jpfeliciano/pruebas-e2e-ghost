if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'
  require 'time'

  Then(/^I select option with value "(.*?)" for dropdown with id "(.*?)"$/) do |opValue, selId|
    drop = @driver.find_element(:id, selId)
    choose = Selenium::WebDriver::Support::Select.new(drop)
    choose.select_by(:value, opValue)
  end
  
  # Then(/^I click on element having css selector "(.*?)"$/) do |selector|
    # @driver.find_element(:css, selector).click
  # end

  Then(/^I click on first element with css selector "(.*?)"$/) do |selector|
    @driver.find_elements(:css, selector)[0].click    
  end

  Then(/^I clear input field having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).clear
  end

  Then(/^I press right arrow key into input field having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).send_keys(:arrow_right) 
  end

  Then(/^I click on element contained in css selector "(.*?)" with title "(.*?)"$/) do |selector, text|
    elements = @driver.find_elements(:css, selector)
    elements.each do |element|
      attr = element.attribute('title')
      if attr == text
        element.click
        break
      end
    end
  end
 

  Then(/^I click on my user record contained in css selector "(.*?)" by using the selector value "(.*?)"$/) do |selector_group, selector_value|
    user = @driver.find_element(:css, selector_value).text
    elements = @driver.find_elements(:css, selector_group)
    elements.each do |element|
      attrValue = element.find_element(:tag_name,'h3').text
      if attrValue == user
        element.click
        break
      end
    end
  end

  Then(/^I clear input field having id "(.*?)"$/) do |input_id|
    @driver.find_element(id: input_id).clear
  end

  Then(/^I clear input field contained in css selector "(.*?)"$/) do |selector|
    elements = @driver.find_elements(:css, selector)
    elements.each do |element|
      element.find_element(:tag_name,'input').clear
    end
  end

  Then(/^I enter yesterday into input field contained in css selector "(.*?)"$/) do |selector|
    yesterday = Time.now - 86400
    elements = @driver.find_elements(:css, selector)
    elements.each do |element|
      element.find_element(:tag_name,'input').send_keys(yesterday.strftime('%Y-%m-%d'))
    end
  end

  Then(/^I press enter key into input field contained in css selector "(.*?)"$/) do |selector|
    elements = @driver.find_elements(:css, selector)
    elements.each do |element|
      element.find_element(:tag_name,'input').send_keys(:return)
    end
  end

  Then(/^I enter tomorrow into input field contained in css selector "(.*?)"$/) do |selector|
    tomorrow = Time.now + 86400
    elements = @driver.find_elements(:css, selector)
    elements.each do |element|
      element.find_element(:tag_name,'input').send_keys(tomorrow.strftime('%Y-%m-%d'))
    end
  end

  Then(/^I click on element contained in css selector "(.*?)" with text "(.*?)"$/) do |selector_group, text|
    elements = @driver.find_elements(:css, selector_group)
    elements.each do |element|
      if element.text == text
        element.click
        break
      end
    end
  end

  Then(/^I click on button contained in first element with css selector "(.*?)"$/) do |selector_group|
    element = @driver.find_elements(:css, selector_group)[0]
    elements = element.find_element(:tag_name,'button').click
  end

  Then(/^I enter "(.*?)" into first input field and "(.*?)" into second input field both contained in element with css selector "(.*?)"$/) do |title, description, selector_group|
    element = @driver.find_element(:css, selector_group)
    elements = element.find_elements(:tag_name,'input')
    elements.each_with_index do |input_element, index|
      input_element.clear
      if index == 0
        input_element.send_keys(title)
      end
      if index == 1
        input_element.send_keys(description)
      end
    end
  end
end