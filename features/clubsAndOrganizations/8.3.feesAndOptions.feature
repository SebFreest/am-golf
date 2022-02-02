Feature: Fees and Options create event step

    #remarks: inconsistency for Add Buttons from each modal, sometimes there are enabled/disabled when opening the modal
    # # Why I can add discount if the tournament is free?
    # # in case of tournament = 0 RON then I will see free tournament
    # # in case of tournament fee = empty the I will see null value in UI
    # # I can add 0% discount, doesn't make sense
    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User can edit discount for a club
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
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
        Then I should see "-5%" discount for club "Blacksearama Golf Club Members"
        When I select discount for "Blacksearama Golf Club Members"
        And I fill out the discount details:
            | Field    | Value |
            | Discount | 10    |
        Then I should see "-10%" discount for club "Blacksearama Golf Club Members"

    Scenario: User can delete added tournament fee
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "PLN" as currency
        And I select Add tournament fee button
        And I fill out the add tournament fee details:
            | Field | Value |
            | Price | 150   |
        When I delete the added tournament "Standard Fee"
        And I confirm the Delete action
        Then I should see no tournament fees added

    Scenario: User can delete added discount for a club
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
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
        When I delete the club "Old Lake Golf Club" from discount list
        And I confirm the Delete action
        Then I should not see discount for the club "Old Lake Golf Club"

    # User cannot delete tournament fee when discount is added for a club
    @xfail
    Scenario: User can delete tournament fee with added discount for a club
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
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
        When I delete the added tournament "Standard Fee"
        And I confirm the Delete action
        Then I should see no tournament fees added

    Scenario: User can add accomodation option
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Accomodation button
        And I fill out the accomodation details:
            | Field             | Value               |
            | Where             | Cluj Napoca         |
            | Acommodation name | Sun Garden Resort   |
            | Description       | Check-in after 14pm |
            | Price             | 500                 |
            | Quantity          | 3                   |
        Then I should see the added accomodation with correct details

    Scenario: User can edit accomodation option
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Accomodation button
        And I fill out the accomodation details:
            | Field             | Value               |
            | Where             | Cluj Napoca         |
            | Acommodation name | Sun Garden Resort   |
            | Description       | Check-in after 14pm |
            | Price             | 500                 |
            | Quantity          | 3                   |
        And I select "QAR" as currency
        When I open the added accomodation option "Sun Garden Resort"
        And I fill out the accomodation details:
            | Field             | Value  |
            | Where             | Edited |
            | Acommodation name | Edited |
            | Description       | Edited |
            | Price             | 300    |
            | Quantity          | 5      |
        Then I should see the edited accomodation with correct details

    Scenario: User can delete accomodation option
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Accomodation button
        And I fill out the accomodation details:
            | Field             | Value               |
            | Where             | Cluj Napoca         |
            | Acommodation name | Sun Garden Resort   |
            | Description       | Check-in after 14pm |
            | Price             | 500                 |
            | Quantity          | 3                   |
        When I delete the added accomodation option "Sun Garden Resort"
        And I confirm the Delete action
        Then I should see no accomodation options added

    Scenario: User can add other service
        And I navigate to Clubs and Organizations tab
        And I select "Izvor de Golf" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Service button
        And I fill out the add other services details:
            | Field        | Value          |
            | Service Type | Practice Balls |
            | Price        | 200            |
            | Quantity     | 100            |
        Then I should see the added services with correct details
