Feature: Format And Courses create event step

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: Tournament format drop-down contains the correct values
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I open Tournament Format drop-down
        Then I should see the correct values in the Tournament Format field

    Scenario: User can add format depending on Tournament Format selection
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I select "Individual Stroke Play" from Tournament Format
        Then I should not see Add Format option
        When I select "Individual Match Play" from Tournament Format
        Then I should see Add Format option
        When I select "Teams Match Play" from Tournament Format
        Then I should see Add Format option
        When I select "Teams Stroke Play" from Tournament Format
        Then I should see Add Format option
        When I select "Two Teams Cup" from Tournament Format
        Then I should see Add Format option
        When I select "Pro AM" from Tournament Format
        Then I should see Add Format option

    Scenario: User can see the organizer club added to courses as default
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        Then I should see "Blacksearama Golf Course" added by default to courses

    Scenario: Verify that Add Courses button is disabled when opening the modal
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I select Add Courses button
        Then I should see Add button disabled
        When I mark "Pannonia" to add as course
        Then I should see Add button enabled

    Scenario: User can add a specific club to courses
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I select Add Courses button
        And I add "Pannonia" as course
        Then I should see "Pannonia" added to courses list
        When I select Add Courses button
        And I add "Pannonia" as course
        Then I should see "Pannonia" added to courses list

    Scenario: User can add multiple clubs to courses
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I select Add Courses button
        And I mark "Pannonia" to add as course
        And I mark "Pine Course" to add as course
        And I mark "National Golf Course" to add as course
        And I Add all the selected courses
        Then I should see "Blacksearama Golf Club" added to courses list
        And I should see "Pannonia" added to courses list
        And I should see "Pine Course" added to courses list
        And I should see "National Golf Course" added to courses list

    Scenario: User can delete clubs from courses
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I select Add Courses button
        And I add "Pannonia" as course
        When I delete "Pannonia" from courses list
        And I confirm the Delete action
        Then I should see "Blacksearama Golf Club" added to courses list
        And I should not see "Pannonia" added to courses list

    Scenario: User can delete all clubs from courses
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        And I select Add Courses button
        And I mark "Pine Course" to add as course
        And I mark "National Golf Course" to add as course
        And I Add all the selected courses
        When I delete "Blacksearama Golf Club" from courses list
        And I confirm the Delete action
        And I delete "Pine Course" from courses list
        And I confirm the Delete action
        And I delete "National Golf Course" from courses list
        And I confirm the Delete action
        Then I should not see "Blacksearama Golf Club" added to courses list
        And I should not see "Pine Course" added to courses list
        And I should not see "National Golf Course" added to courses list

    Scenario: User can add Tournament Format
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        When I select "Individual Match Play" from Tournament Format
        And I select Add Format button
        When I fill out the custom format details:
            | Field        | Value              |
            | Name         | My Custom Format 1 |
            | Scoring type | Gross Strokes      |
            | Allow ties   | Yes - match tied   |
        Then I should see the added format with correct details

    Scenario: User can delete Tournament Format
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Format and courses" registration step
        When I select "Individual Match Play" from Tournament Format
        And I select Add Format button
        When I fill out the custom format details:
            | Field        | Value              |
            | Name         | My Custom Format 1 |
            | Scoring type | Gross Strokes      |
            | Allow ties   | Yes - match tied   |
        When I delete "My Custom Format 1" from formats list
        And I confirm the Delete action
        Then I should not see "My Custom Format 1" added to formats list