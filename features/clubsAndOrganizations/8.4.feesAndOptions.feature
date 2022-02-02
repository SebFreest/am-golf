Feature: Fees and Options create event step

    #remarks: inconsistency for Add Buttons from each modal, sometimes there are enabled/disabled when opening the modal
    # # Why I can add discount if the tournament is free?
    # # in case of tournament = 0 RON then I will see free tournament
    # # in case of tournament fee = empty the I will see null value in UI
    # # I can add 0% discount, doesn't make sense
    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User can edit other service
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
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
        When I open the added service "Practice Balls"
        And I fill out the add other services details:
            | Field        | Value        |
            | Service Type | Push Trolley |
            | Price        | 50           |
            | Quantity     | 2            |
        Then I should see the edited services with correct details

    Scenario: User can delete other service
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
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
        When I delete the added service "Practice Balls"
        And I confirm the Delete action
        Then I should see no other services added

    # the players name are not saved when add individual discount
    @xfail
    Scenario: User can add individual Private Discount
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Individual button
        And I fill out the private discount details:
            | Field             | Value             |
            | Name              | Loyality discount |
            | Discount          | 15                |
            | Assing to members | Denis Staykov     |
        Then I should see the added individual discount with correct details

    Scenario: User can edit individual Private Discount
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Individual button
        And I fill out the private discount details:
            | Field             | Value             |
            | Name              | Loyality discount |
            | Discount          | 15                |
            | Assing to members | Denis Staykov     |
        When I open the added individual discount "Loyality discount"
        And I fill out the private discount details:
            | Field             | Value         |
            | Name              | Edited        |
            | Discount          | 50            |
            | Assing to members | Denis Staykov |
        Then I should see the edited individual discount with correct details

    Scenario: User can delete individual Private Discount
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Individual button
        And I fill out the private discount details:
            | Field             | Value             |
            | Name              | Loyality discount |
            | Discount          | 15                |
            | Assing to members | Denis Staykov     |
        When I delete the added individual discount "Loyality discount"
        And I confirm the Delete action
        Then I should see no private discount added

    Scenario: User can add group Private Discount
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Group button
        And I fill out the private discount details:
            | Field             | Value            |
            | Name              | Club discount    |
            | Discount          | 15               |
            | Assing to members | Magyar Golf Club |
        Then I should see the added group discount with correct details

    # when select edit group discount the edit individual discount modal is opened
    @xfail
    Scenario: User can edit group Private Discount
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Group button
        And I fill out the private discount details:
            | Field             | Value            |
            | Name              | Club discount    |
            | Discount          | 15               |
            | Assing to members | Magyar Golf Club |
        When I open the added individual discount "Club discount"
        And I fill out the private discount details:
            | Field             | Value                |
            | Name              | Edited               |
            | Discount          | 50                   |
            | Assing to members | Reiters Golfschaukel |
        Then I should see the edited individual discount with correct details

    Scenario: User can delete group Private Discount
        And I navigate to Clubs and Organizations tab
        And I select "Romanian Golf Association" as organization
        And I select Events tab
        And I select Add Events
        And I select "Fees and Options" registration step
        And I select "RON" as currency
        And I select Add Group button
        And I fill out the private discount details:
            | Field             | Value            |
            | Name              | Club discount    |
            | Discount          | 15               |
            | Assing to members | Magyar Golf Club |
        When I delete the added individual discount "Club discount"
        And I confirm the Delete action
        Then I should see no private discount added