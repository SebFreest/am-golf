Feature: Divisions and Championship series create event step

    # remarks
    # **user is able to select edit for a championship series => the division modal appears
    # add button is enabled on championship modal

    Background: Navigate to homepage
        Given I am on the login page
        When I login as "Test admin"

    Scenario: User can see no divisions and championship series added when navigate to divisions and championship series step
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        Then I should see no divisions added
        And I should see no championship series added

    Scenario: User can see Add button disabled on add divisons modal when no details are filled
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Division button
        Then I should see Add button disabled

    # the scenario bellow fails due to add button is enabled when open the championship modal
    @xfail
    Scenario: User can see Add button disabled on add championship modal when no details are filled
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Championship button
        Then I should see Add button disabled

    Scenario: User can add division
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Division button
        And I fill out the division details:
            | Field         | Value                      |
            | Division Name | My New Division 1          |
            | Competitors   | Individual - professionals |
            | Gender        | Male                       |
            | Age Group     | Senior                     |
            | Scoring Type  | Stableford Gross           |
            | Tiebreak      | Most difficult holes       |
        Then I should see the added division with correct details

    # at the moment is not failing, but when you edit an existing division you have no the posibility to change the gender and age group
    @xfail
    Scenario: User can edit division
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Division button
        And I fill out the division details:
            | Field         | Value                      |
            | Division Name | My New Division 1          |
            | Competitors   | Individual - professionals |
            | Gender        | Male                       |
            | Age Group     | Senior                     |
            | Scoring Type  | Stableford Gross           |
            | Tiebreak      | Most difficult holes       |
        Then I should see the added division with correct details
        When I open the added division "My New Division 1"
        And I fill out the division details:
            | Field        | Value               |
            | Competitors  | Teams - all         |
            | Scoring Type | Modified Stableford |
            | Tiebreak     | Playoff             |
        Then I should see the edited division with correct details

    Scenario: User can delete an added division
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Division button
        And I fill out the division details:
            | Field         | Value                      |
            | Division Name | My New Division 2          |
            | Competitors   | Individual - professionals |
            | Gender        | Male                       |
            | Age Group     | Senior                     |
            | Scoring Type  | Stableford Gross           |
            | Tiebreak      | Most difficult holes       |
        When I delete "My New Division 2" from divisions list
        And I confirm the Delete action
        Then I should not see "My New Division 2" added to divisions list

    Scenario: User can add championship series
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Championship button
        And I add the championship details as follows:
            | Field      | Value               |
            | Event Name | TGC Champion 2021   |
            | Event Type | Championship Finale |
        Then I should see the added championship with correct details

    Scenario: User can delete championship series
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Championship button
        And I add the championship details as follows:
            | Field      | Value               |
            | Event Name | TGC Champion 2021   |
            | Event Type | Championship Finale |
        When I delete "TGC Champion 2021" from championship list
        And I confirm the Delete action
        Then I should not see "TGC Champion 2021" added to championship list

    Scenario: User can add division and championship series on the same time
        And I navigate to Clubs and Organizations tab
        And I select "Blacksearama Golf Club" as organization
        And I select Events tab
        And I select Add Events
        And I select "Divisions and championship series" registration step
        And I select Add Division button
        When I fill out the division details:
            | Field         | Value                      |
            | Division Name | My New Division 1          |
            | Competitors   | Individual - professionals |
            | Gender        | Male                       |
            | Age Group     | Senior                     |
            | Scoring Type  | Stableford Gross           |
            | Tiebreak      | Most difficult holes       |
        And I select Add Championship button
        And I add the championship details as follows:
            | Field      | Value               |
            | Event Name | TGC Champion 2021   |
            | Event Type | Championship Finale |
        Then I should see the added division with correct details
        And I should see the added championship with correct details