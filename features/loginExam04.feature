Feature: Login to PRODUCTION env

    In order to perform successful Login
    As a user
    I want to enter correct username and password

    @dev
    Scenario: In order to verify login to facebook on Production
        Given I go to "https://www.protractortest.org"
        When I found the title as "Protractor - end-to-end testing for AngularJS"
