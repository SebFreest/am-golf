Feature: Fees and Options create event step

    #remarks: inconsistency for Add Buttons from each modal, sometimes there are enabled/disabled when opening the modal
    # # Why I can add discount if the tournament is free?
    # # in case of tournament = 0 RON then I will see free tournament
    # # in case of tournament fee = empty the I will see null value in UI
    # # I can add 0% discount, doesn't make sense
    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User see no tournament fees, accomodation options, other services and private discount added yet when access the Fees And Options step
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        Then I should see no tournament fees added
        And I should see no accomodation options added
        And I should see no other services added
        And I should see no private discount added

    Scenario: User can see all currencies available
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I open the Currency drop-down
        Then I should see correct values in the Currency dropdown

    Scenario: User see Add button disabled on Add tournament fee modal
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        When I select Add tournament fee button
        Then I should see Add button disabled

    Scenario: User see Add button disabled on Add accomodation modal
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        When I select Add Accomodation button
        Then I should see Add button disabled

    Scenario: User see Add button disabled on Add service modal
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        When I select Add Service button
        Then I should see Add button disabled

    Scenario: User see Add button disabled on Add individual private discounts modal
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        When I select Add Individual button
        Then I should see Add button disabled

    Scenario: User see Add button disabled on Add group private discounts modal
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        When I select Add Group button
        Then I should see Add button disabled

    Scenario: User can add tournament fee without description
        And I navigate to Clubs and Organizations tab
        And I select "Golf Club Belgrade" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "PLN" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 150   |
        Then I should see the tournament fee added correctly with no description

   