Feature: Login to PRODUCTION env

    In order to perform successful Login
    As a user
    I want to enter correct username and password

    @dev
    Scenario: In order to verify login to facebook on Production
        Given I go to "http://www.way2automation.com/angularjs-protractor/banking/#/login"
        When I found the title as "Protractor practice website - Banking App"
        Then I click on CustomerLogin Button
        Then I select the value as "Harry Potter" from list
        Then I click on Login
        Then Welcome Page should show login as "Harry Potter"
