Feature: the Form page
    As an user
    I should have a navigatable page with a form
    This form will be used to submit data to the system

    Scenario: User should be navigated to the Form page
        Given I am navigating on the website
        When I click on the Form button
        Then I should be navigated to the Form page
        And the button should be in active status
    
    Scenario Outline: Successfull form submission.
        Given I am navigating on the Form page
        When I enter "<Name>" in the input box 
        And click on Go!
        Then I should be navigated to the Hello Page
        And I should see a text that reads "Hello, <Name>"

        Examples:
        | Name    |
        | John    |
        | Sophia  |
        | Charlie |
        | Emily   |
    
    Scenario: Title of the Site
        Given I am navigating on the Form page
        When I see the title of the page
        Then I should see "UI Testing Site"
    
    Scenario: User should see the Company Logo
        Given I am navigating to the Form page
        When I am on the Form page
        Then I should see the Company Logo