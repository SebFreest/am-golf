Feature: Am Golf Login

    Background: Navigate to homepage
        Given I am on the login page

    Scenario: User can not login with incorrect credentials
        When I set incorrect credentials
        And I click on Submit button
        Then I should see that credentials are incorrect

    Scenario: User can not login with empty credential fields
        When I click on Submit button
        Then I should see that credentials are incorrect
        And I should see that Username field is mandatory

    Scenario: User is redirected to reset password when access forgot password link
        When I click on forgot password link
        Then I should be redirected to reset password window

    Scenario: User is redirected to register page when click on Register button
        When I click on register button
        Then I should be redirected to Register page

    Scenario: User is able to login with correct credentials
        When I login as "Test admin"
        Then I should successfully logged in
