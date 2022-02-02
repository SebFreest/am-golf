Feature: Schedule create event step

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"


    Scenario: User see no schedule added when access the Schedule step
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Schedule" registration step
        Then I should see no schedule added

     Scenario: User see Add button disabled on Add schedule items modal
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Schedule" registration step
        And I select Add Schedule Item button
        Then I should see Add button disabled

    Scenario: User cannot select date from past when adding a new schedule item
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Schedule" registration step
        And I select Add Schedule Item button
        Then I should not be able to select start date from the past at schedule step
        And I should not be able to select end date from the past at schedule step

    Scenario: User can add schedule item
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Schedule" registration step
        And I select Add Schedule Item button
        And I fill out the add schedule item details:
            | Field       | Value                                |
            | Name        | My Schedule Item                     |
            | Description | This is a bot who adds schedule item |
        Then I should see the added schedule item with correct details

    Scenario: User can edit schedule item
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Schedule" registration step
        And I select Add Schedule Item button
        And I fill out the add schedule item details:
            | Field       | Value                                |
            | Name        | My Schedule Item                     |
            | Description | This is a bot who adds schedule item |
        And I open the added schedule item "My Schedule Item"
        When I fill out the add schedule item details:
            | Field       | Value  |
            | Name        | Edited |
            | Description | Edited |
        Then I should see the edited schedule item with correct details

     Scenario: User can delete schedule item
        And I navigate to Clubs and Organizations tab
        And I select "Valle Umbra Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Schedule" registration step
        And I select Add Schedule Item button
        And I fill out the add schedule item details:
            | Field       | Value                                |
            | Name        | My Schedule Item                     |
            | Description | This is a bot who adds schedule item |
        When I delete "My Schedule Item" from schedule item list
        And I confirm the Delete action
        Then I should see no schedule added