Feature:
  As a Manager
  I want to be able to do accurate operations
  So that I do not lose money

  Scenario: I need to sum numbers
    Given an empty state
    When I type a 2
    And I press '+'
    And I type a 2
    Then I should get 4

  Scenario: I need accurate divisions
    Given an empty state
    When I type a 3
    And I press '/'
    And I type a 2
    Then I should get 1.5

  Scenario: I need no fancy multiplications
    Given an empty state
    When I press '*'
    Then I should get an operation error
