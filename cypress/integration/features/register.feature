Feature: Register

    As an user, i want to do a registration in users tab

Scenario: Register an user
    Given I am an user entering in UsersTab for registration
    When I enter my username 
    And my email
    Then I will save my register
