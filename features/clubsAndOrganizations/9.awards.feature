Feature: Awards create event step

  Background: Navigate to homepage
    Given I am on the login page
    When I login as "Test admin"

  Scenario: User see No general awards added yet when access the Awards step
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    Then I should see no general awards added

  Scenario: User see No special awards added yet. when access the Awards step
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    Then I should see no special awards added

  Scenario: User see Add button disabled on Add general award modal
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    When I select Add General Awards button
    Then I should see Add button disabled

  Scenario: User see Add button disabled on Add special award modal
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    When I select Add Special Awards button
    Then I should see Add button disabled

  Scenario: User can add general awards
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    And I select Add General Awards button
    And I fill out the add general awards details:
      | Field       | Value                              |
      | Award Name  | My General Awards 1                |
      | Description | This is a bot who adds awards item |
    Then I should see the added general awards with correct details

  Scenario: User can edit add general awards
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    And I select Add General Awards button
    And I fill out the add general awards details:
      | Field       | Value                              |
      | Award Name  | My General Awards 2                |
      | Description | This is a bot who adds awards item |
    And I open the added general award "My General Awards 2"
    When I fill out the add general awards details:
      | Field       | Value  |
      | Award Name  | Edited |
      | Description | Edited |
    Then I should see the edited general awards with correct details

  Scenario: User can delete general awards
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    And I select Add General Awards button
    And I fill out the add general awards details:
      | Field       | Value                              |
      | Award Name  | My General Awards 3                |
      | Description | This is a bot who adds awards item |
    When I delete "My General Awards 3" from general awards list
    And I confirm the Delete action
    Then I should see no general awards added

  Scenario: User can add special awards
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    And I select Add Special Awards button
    And I fill out the add special awards details:
      | Field       | Value                              |
      | Award Name  | My Special Awards 1                |
      | Description | This is a bot who adds awards item |
    Then I should see the added special awards with correct details

  Scenario: User can edit add special awards
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    And I select Add Special Awards button
    And I fill out the add special awards details:
      | Field       | Value                              |
      | Award Name  | My Special Awards 2                |
      | Description | This is a bot who adds awards item |
    And I open the added special award "My Special Awards 2"
    When I fill out the add general awards details:
      | Field       | Value  |
      | Award Name  | Edited |
      | Description | Edited |
    Then I should see the edited special awards with correct details

  Scenario: User can delete special awards
    And I navigate to Clubs and Organizations tab
    And I select "Golf Club Belgrade" as organization
    And I select Events tab
    And I select Add Events
    And I select "Awards" registration step
    And I select Add Special Awards button
    And I fill out the add special awards details:
      | Field       | Value                              |
      | Award Name  | My Special Awards 3                |
      | Description | This is a bot who adds awards item |
    When I delete "My Special Awards 3" from special awards list
    And I confirm the Delete action
    Then I should see no special awards added
    