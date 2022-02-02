Feature: Fees and Options create event step

    #remarks: inconsistency for Add Buttons from each modal, sometimes there are enabled/disabled when opening the modal
    # # Why I can add discount if the tournament is free?
    # # in case of tournament = 0 RON then I will see free tournament
    # # in case of tournament fee = empty the I will see null value in UI
    # # I can add 0% discount, doesn't make sense
    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    #this scenario is not working since the user is not able to add a fee with description(cannot select add for it)
    @xfail
    Scenario: User can add tournament fee with description
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "PLN" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field       | Value                              |
            | Price       | 150                                |
            | Description | This is a bot who adds awards item |
    # Then I should see the added general awards with correct details


    Scenario: User can add 0 (FREE) as tournament fee (Check for null value)
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "PLN" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 0     |
        Then I should see the tournament fee added as FREE

    #user is able to add null value
    @xfail
    Scenario: User cannot add NULL value as tournament fee
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "PLN" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | ''    |
        Then I should see the tournament fee added as FREE

    Scenario: User can add tournament fee in different currency
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "SCR" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 250   |
        Then I should "250 SCR" added as tournament fee
        When I select "RUB" as currency
        Then I should "250 RUB" added as tournament fee

    Scenario: User can edit tournament fee
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 150   |
        And I open the added tournament fee "150 RON"
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 200   |
        Then I should "200 RON" added as tournament fee

    #since user is not able to save fees with description this scenario will fail
    @xfail
    Scenario: User can edit tournament fee with description
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 150   |
        And I open the added tournament fee "150 RON"
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 200   |
        Then I should "200 RON" added as tournament fee

    Scenario: User can add discount for a club
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I add "250 USD" as tournament fee
        Then I should see Add public discount button visibile
        When I select Add public discount button
        And I fill out the discount details:
            | Field    | Value              |
            | Discount | 10                 |
            | Club     | Old Lake Golf Club |
        Then I should see "-10%" discount for club "Old Lake Golf Club Members"

    Scenario: User can add discount for multiple clubs
        And I navigate to Clubs and Organizations tab
        And I select "InTo Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I add "250 USD" as tournament fee
        Then I should see Add public discount button visibile
        When I select Add public discount button
        And I fill out the discount details:
            | Field    | Value                  |
            | Discount | 5                      |
            | Club     | Blacksearama Golf Club |
        When I select Add public discount button
        And I fill out the discount details:
            | Field    | Value                |
            | Discount | 15                   |
            | Club     | Reiters Golfschaukel |
        Then I should see "-5%" discount for club "Blacksearama Golf Club Members"
        Then I should see "-15%" discount for club "Reiters Golfschaukel Members"