Feature: General information create event step

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User cannot delete the last club when creates new event
        And I navigate to Clubs and Organizations tab
        And I select "Sungarden Golf Club" as organization
        And I select Events tab
        And I select Add Events
        Then I should see the Delete button disabled on create event page for "Sungarden Golf Club"

    Scenario: User can add multiple organizations to a new event
        And I navigate to Clubs and Organizations tab
        And I select "Sungarden Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I add "Transilvania Golf Club" as a secondary organizer on create event page
        Then I should see "Transilvania Golf Club" in the organizers list

    Scenario: User can delete organizations from organizers list
        When I navigate to Clubs and Organizations tab
        And I select "Golfclub Schloss Guttenburg" as organization
        And I select Events tab
        And I select Add Events
        And I add "Golf Club Imperial Balaton" as a secondary organizer on create event page
        When I delete "Golf Club Imperial Balaton" from organizers list
        And I confirm the Delete action
        Then I should not see "Golf Club Imperial Balaton" in the organizers list
        And I select Cancel adding organization

    Scenario: Add new organizer - check delete confirmation message from the pop-up
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I add "Zala Spring GC" as a secondary organizer on create event page
        And I delete "Zala Spring GC" from organizers list
        Then I should see a delete pop-up which states: "Are you sure you want to delete this organiser?"

    Scenario: User can cancel the add new organizer
        When I navigate to Clubs and Organizations tab
        And I select "Hartl Resort" as organization
        And I select Events tab
        And I select Add Events
        And I select Add Another organization button
        And I select "Transilvania Golf Club" organization
        And I select Cancel adding organization
        Then Add Organizer modal should close
        And I should not see "Transilvania Golf Club" in the organizers list

    Scenario: User cannot select add until a club is selected
        When I navigate to Clubs and Organizations tab
        And I select "Pravets Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select Add Another organization button
        Then I should see Add button disabled
        And I select Cancel adding organization

    # add button from the modal should be disabled when the modal opens
    @xfail
    Scenario: Add organizer button disabled until a club is selected after another club was added previously
        When I navigate to Clubs and Organizations tab
        And I select "Budapest Highland Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I add "Reiters Golfschaukel" as a secondary organizer on create event page
        And I select Add Another organization button
        Then I should see Add button disabled

    Scenario: Add new organizer - check delete confirmation message from the pop-up
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I add "Zala Spring GC" as a secondary organizer on create event page
        And I delete "Zala Spring GC" from organizers list
        Then I should see a delete pop-up which states: "Are you sure you want to delete this organiser?"

    Scenario: Verify Event Type
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I open the Event Type drop-down
        Then I should see correct values in the Event Type field

    Scenario: Verify Event Visibility
        When I navigate to Clubs and Organizations tab
        And I select "Golf Club Timisoara" as organization
        And I select Events tab
        And I select Add Events
        And I open the Event Visibility drop-down
        Then I should see correct values in the Event Visibility field

    Scenario: Verify Event Registration
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I open the Event Registration drop-down
        Then I should see correct values in the Event Registration field

    Scenario: Verify the event creation steps is modified depending on event type selection- for Tournament
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Tournament" from Event Type drop-down
        Then I should see the registration steps corresponding to Tournament Event Type

    Scenario: Verify the event creation steps is modified depending on event type selection- for Tournament
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Championship Series" from Event Type drop-down
        Then I should see the registration steps corresponding to Championship Series Event Type

    Scenario: Verify the event creation steps is modified depending on event type selection- for Tournament
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Other event" from Event Type drop-down
        Then I should see the registration steps corresponding to Other event Event Type

    Scenario: Verify start end date: user cannot select date from past
        When I navigate to Clubs and Organizations tab
        And I select "Pannonia Golf & Country Club" as organization
        And I select Events tab
        And I select Add Events
        Then I should not be able to select start date from the past
        And I should not be able to select end date from the past