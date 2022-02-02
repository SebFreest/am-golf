Feature: Am Golf Create Event

    Background: Navigate to homepage
        Given I am on the login page
        And I login as "Test admin"

    Scenario: User can create event for organization where is assigned as admin by filling only Event Name
        When I navigate to Clubs and Organizations tab
        And I select "Lighthouse Golf Club" as organization
        And I select Events tab
        And I select Add Events
        Then I should see the Create event page displayed
        When I fill out the Event Name "Test Ev1"
        And I select Save event
        And I confirm the Save selection
        Then I am redirected to the created tournament page
        And Tournament name should be "Test Ev1" at location "Lighthouse Golf Club"
        # And The Highlights information are:
        # And the Registration information are:

    # # login with a user or selcet a club where the current user is not assigned as admin
    # Scenario: User can not create event for clubs where is not assigned as club administrator
    #     When I navigate to Clubs and Organizations tab
    #     And I select "Transilvania Golf Club" as organization where I am not assigned as administrator
    #     And I select an organization where I am not assigned as administrator: Transilvania Golf Club
    #     And I select Events tab
    #     Then I should not be able to Add Events
    #     And I should not be able to edit the organization details

    # Scenario: User can cancel the event creation when all fields are empty
    #     When I navigate to Clubs and Organizations tab
    #     And I select "Budapest Highland Golf Club" as organization
    #     And I select Events tab
    #     And I select Add Events
    #     When I select Cancel event button
    #     Then I should be redirected to Golf Club page
    
    # Scenario: Check errors - when user selects Save without any information filled
    #     When I navigate to Clubs and Organizations tab
    #     And I select "Pirin Golf Club" as organization 
    #     And I select Events tab
    #     And I select Add Events
    #     And I select Save event
    #     And I confirm the Save selection
    #     Then I should see error message at Event Name field
    #     When I select Cancel event button
    #     And I select Add Events
    #     And I jumt to another Event Creation step
    #     Then I should see error message at Event Name field
