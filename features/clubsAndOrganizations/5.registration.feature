Feature: Registration create event step

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User should see the correct values in registration drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        Then I should see "Open" as default value of the registration drop-down
        And I open the registration drop-down
        Then I should see correct values in the Registration drop-down

    Scenario: User can see a message when selects invitational option from registration drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        When I select "Invitational" from registration drop-down
        Then I should see a message under the registration field

    Scenario: User cannot select date from the past
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        Then I should not be able to select start date from the past at registration step
        And I should not be able to select end date from the past at registration step

    # #fails because type drop-down is not visibile anymore in the app
    # @xfail
    # Scenario: User should see the correct values in type drop-down
    #     And I navigate to Clubs and Organizations tab
    #     And I select "Valle Umbra Golf Club" as organization
    #     And I select Events tab
    #     And I select Add Events
    #     And I select "Registration" registration step
    #     Then I should see "Auto" as default value of the type drop-down
    #     And I open the type drop-down
    #     Then I should see correct values in the Type drop-down

    # #fails because visiblity drop-down is not visibile anymore in the app
    # @xfail
    # Scenario: User should see the correct values in visibility drop-down
    #     And I navigate to Clubs and Organizations tab
    #     And I select "Valle Umbra Golf Club" as organization
    #     And I select Events tab
    #     And I select Add Events
    #     And I select "Registration" registration step
    #     Then I should see "Public" as default value of the visibility drop-down
    #     And I open the visibility drop-down
    #     Then I should see correct values in the Visibility drop-down

    # #fails because visiblity drop-down is not visibile anymore in the app
    # @xfail
    # Scenario: User cann see anytime and before it expires invitatation validity options
    #     And I navigate to Clubs and Organizations tab
    #     And I select "Valle Umbra Golf Club" as organization
    #     And I select Events tab
    #     And I select Add Events
    #     And I select "Registration" registration step
    #     Then I should see Number field disabled
    #     And I should see Time unit field disabled
    #     When I select Before it expires option
    #     Then I should see Number field enabled
    #     And I should see Time unit field enabled

    Scenario: User can add see button disabled on add additional info modal
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        Then I should see Add button disabled

    Scenario: User can add additional info with free answer
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        And I fill out the additional info details:
            | Field           | Value                                  |
            | Request summary | I want a personalized T-shirt          |
            | Full request    | I want to see our club logo on T-shirt |
            | Answer type     | Free Answer                            |
        Then I should see the added additional info with correct details

    Scenario: User can add choise in additional info modal
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        And I select "Single Choice" from answer type drop-down
        Then I should see Add Choice button displayed
        And I add a choice with choice name "Choise 1"
        Then I should see the choice with name "Choise 1" added

    Scenario: User can delete choise in additional info modal
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        And I select "Single Choice" from answer type drop-down
        And I add a choice with choice name "Choise2"
        When I delete the added choice
        Then I should not see "Choice2" in the choice list

    Scenario: User can add additional info with single choice
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        And I type "T-shirt size M" in request summary field
        And I type "I want to see our club logo on T-shirt" in full request field
        And I select "Single Choice" from answer type drop-down
        And I add a choice with choice name "Choise 1"
        When I select Save Additional Info button
        Then I should see the added additional info with correct details and single choice

    Scenario: User can edit additional info
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        And I fill out the additional info details:
            | Field           | Value          |
            | Request summary | Add Info draft |
            | Full request    | Mock text      |
            | Answer type     | Free Answer    |
        When I open the added additional info "Add Info draft"
        And I fill out the additional info details:
            | Field           | Value         |
            | Request summary | edited        |
            | Full request    | edited        |
            | Answer type     | Yes/No Answer |
        Then I should see the edited additional info with the correct details

    Scenario: User can delete additional info
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Info button
        And I fill out the additional info details:
            | Field           | Value                                  |
            | Request summary | My Add Info mock                       |
            | Full request    | I want to see our club logo on T-shirt |
            | Answer type     | Free Answer                            |
        When I delete "My Add Info mock" from additional info list
        And I confirm the Delete action
        Then I should not see "My Add Info mock" added to additional info list

    Scenario: User can add see button disabled on add agreement modal
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Details button
        Then I should see Add button disabled

    # the Agreement text field is displayed as undefined after saving
    @xfail
    Scenario: User can add Agreement details
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Details button
        And I fill out the add agreement details:
            | Field           | Value                    |
            | Display link as | Best golf platform       |
            | External link   | https://staging.am.golf/ |
            | Agreement text  | Welcome to your journey  |
        Then I should see the added agreement with the correct details

    # the Agreement text field is displayed as undefined after saving, not sure if the website link should be visible
    @xfail
    Scenario: User can edit Agreement details
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Details button
        And I fill out the add agreement details:
            | Field           | Value                   |
            | Display link as | Best golf platform      |
            | External link   | https://staging.am.golf |
            | Agreement text  | Welcome to your journey |
        When I open the added agreement "Welcome to your journey"
        And I fill out the add agreement details:
            | Field           | Value  |
            | Display link as | Edited |
            | External link   | /home  |
            | Agreement text  | Edited |
        Then I should see the edited agreement with the correct details

    Scenario: User can delete Agreement details
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Registration" registration step
        And I select Add Details button
        And I fill out the add agreement details:
            | Field           | Value                   |
            | Display link as | Best golf platform      |
            | External link   | https://staging.am.golf |
            | Agreement text  | Welcome to your journey |
        When I delete "Welcome to your journey" from aggrement details list
        And I confirm the Delete action
        Then I should not see "Welcome to your journey" added to agreement details list