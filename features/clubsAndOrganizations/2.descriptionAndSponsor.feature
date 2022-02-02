Feature: Description And Sponsor create event step

# Remarks:
# No validation on fields char lengs for new sponsor creation
# check if the user can add duplicate sponsors
# See the xfail tags

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"


    Scenario: User can add a description to an event
        And I navigate to Clubs and Organizations tab
        And I select "AM.GOLF" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I fill out the Description "This is an automated software test"


    Scenario: User can Add one or more sponsors individually
        And I navigate to Clubs and Organizations tab
        And I select "AM.GOLF" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        And I add "Club Zaudin Golf" as sponsor
        Then I should see "Club Zaudin Golf" in the sponsors list
        When I select Add Sponsor button
        And I add "Heineken Summer Cup" as sponsor
        Then I should see "Heineken Summer Cup" in the sponsors list
        And I select Cancel event button


    Scenario: User can Add more than one sponsor once a time
        And I navigate to Clubs and Organizations tab
        And I select "AM.GOLF" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        And I mark "Brit Motors AG" to add as sponsor
        And I mark "Villa Padierna Golf Club" to add as sponsor
        And I mark "ANWB Golf" to add as sponsor
        And I Add all the selected sponsors
        Then I should see "Brit Motors AG" in the sponsors list
        And I should see "Villa Padierna Golf Club" in the sponsors list
        And I should see "ANWB Golf" in the sponsors list

    Scenario: User can Delete one or more sponsors
        And I navigate to Clubs and Organizations tab
        And I select "Royal Kiev Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        And I add "Coca-Cola" as sponsor
        And I delete "Coca-Cola" from sponsors list
        And I confirm the Delete action
        Then I should not see "Coca-Cola" in the sponsors list

    # when you add the second sponsor the first one will be added once again because it remains pinned on sposors modal
    @xfail
    Scenario: User can Delete sponsor and Add another
        And I navigate to Clubs and Organizations tab
        And I select "Royal Kiev Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        And I add "Coca-Cola" as sponsor
        And I delete "Coca-Cola" from sponsors list
        And I confirm the Delete action
        Then I should not see "Coca-Cola" in the sponsors list
        When I select Add Sponsor button
        And I add "Aix les Bains" as sponsor
        Then I should see "Aix les Bains" in the sponsors list
        And I should not see "Coca-Cola" in the sponsors list

    @xfail
    Scenario: Verify that Add Sponsor button is disabled when opening the modal
        And I navigate to Clubs and Organizations tab
        And I select "Royal Kiev Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        Then I should see Add button disabled
        And I add "Coca-Cola" as sponsor
        Then I should see "Coca-Cola" in the sponsors list
        When I select Add Sponsor button
        Then I should see Add button disabled

    Scenario: User can create a new sponsor by filling the sponsor details and add it to the list
        And I navigate to Clubs and Organizations tab
        And I select "Royal Kiev Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        And I select Add New sponsor option
        Then I should see Add button disabled
        When I fill out the new sponsor details:
            | Field   | Value                                          |
            | Name    | My Test Sponsor1                               |
            | Website | http://my-test-sponsor1.com                    |
            | Details | This is an official sponsor of this tournament |
        Then I should see "My Test Sponsor1" in the sponsors list

    Scenario: User can delete a created sponsor and then find it in the add sponsor modal
        And I navigate to Clubs and Organizations tab
        And I select "Royal Kiev Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Description and sponsors" registration step
        And I select Add Sponsor button
        And I select Add New sponsor option
        Then I should see Add button disabled
        When I fill out the new sponsor details:
            | Field   | Value                                          |
            | Name    | My Test Sponsor2                               |
            | Website | http://my-test-sponsor1.com                    |
            | Details | This is an official sponsor of this tournament |
        Then I should see "My Test Sponsor2" in the sponsors list
        When I delete "My Test Sponsor2" from sponsors list
        And I confirm the Delete action
        Then I should not see "My Test Sponsor2" in the sponsors list
        When I select Add Sponsor button
        Then I should find "My Test Sponsor2" in the sponsors modal

