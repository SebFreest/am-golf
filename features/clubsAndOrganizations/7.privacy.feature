Feature: Privacy create event step

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User should see the correct values in the Event Visibility drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Golfpark Muenchen Aschheim" as organization
        And I select Events tab
        And I select Add Events
        And I select "Privacy" registration step
        And I open the Event Visibility drop-down
        Then I should see correct values in the Event Visibility field

    Scenario: User should see the correct values in the Social Page drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Golfpark Muenchen Aschheim" as organization
        And I select Events tab
        And I select Add Events
        And I select "Privacy" registration step
        And I open the Social Page drop-down
        Then I should see correct values in the Social Page field

    Scenario: User should see the correct values in the Participants Page drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Golfpark Muenchen Aschheim" as organization
        And I select Events tab
        And I select Add Events
        And I select "Privacy" registration step
        And I open the Participants Page drop-down
        Then I should see correct values in the Participants Page field

    Scenario: User should see the correct values in the Leaderboards Page drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Golfpark Muenchen Aschheim" as organization
        And I select Events tab
        And I select Add Events
        And I select "Privacy" registration step
        And I open the Leaderboards Page drop-down
        Then I should see correct values in the Leaderboards Page field

    Scenario: User should see the correct values in the Flights Page drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Golfpark Muenchen Aschheim" as organization
        And I select Events tab
        And I select Add Events
        And I select "Privacy" registration step
        And I open the Flights Page drop-down
        Then I should see correct values in the Flights Page field

    Scenario: User should see the correct values in the Scores Edit drop-down
        And I navigate to Clubs and Organizations tab
        And I select "Golfpark Muenchen Aschheim" as organization
        And I select Events tab
        And I select Add Events
        And I select "Privacy" registration step
        And I open the Scores Edit drop-down
        Then I should see correct values in the Scores Edit field