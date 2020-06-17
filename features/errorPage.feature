Feature: The Error Page
    As an user
    I should have an error page
    This page should be used to display errors

    Scenario: The 404 response
        Given I am on the website
        When I click on the Error button
        Then I should get a "404" response