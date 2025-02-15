Feature: Login

    In order to perform successful Login
    As a user
    I want to enter correct username and password

    Background:
        Given user navigates to facebook website
        When user validates the home page title

    @dev
    Scenario Outline: In order to verify login to facebook
        Then user entered "<username>" username
        Then user entered "<password>" password
        Then user should "<loginstatus>" successfully logged in

        Examples:
            | username | password | loginstatus |
            | valid    | valid    | be          |
            | invalid  | invalid  | not         |