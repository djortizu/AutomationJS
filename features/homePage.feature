Feature: Homepage
    As an user 
    I should have a page that will serve as a landing page
    This page will allow me to navigate to other pages.
    
    Scenario: User clicks on the Home button
        Given I navigated to the website.
        When I click on the Home button
        Then I should be navigated to the Home page
        And the Home button should be active

    Scenario: User clicks on the UI Testing button
        Given I navigate to the website.
        When I click on the UI Testing button
        Then I should get navigated to the Home page

    Scenario: User should see Docler Holding QA Department text
        Given I am on the website
        When I am navigating the Home page
        Then I should see the text "Welcome to the Docler Holding QA Department"
        And it should be in an H1 tag

    Scenario: The Company Logo should be visible
        Given I am on the website
        When I am on the Home page
        Then I should see the Docler Holding Company Logo

    Scenario: The Site description should be visible
        Given I am on the website
        When I am navigating on the Home page
        Then I should see the text "This site is dedicated to perform some exercises and demonstrate automated web testing."
        And it should be in an p tag
    
    Scenario: The title of the page should read "UI Testing Site"
        Given I am on the website
        When I am on the Home page
        Then I should see "UI Testing Site" on the title