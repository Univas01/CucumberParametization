Feature: Searching for a contact

  Scenario: Return exact match for contact

    Given I have successfully logged in
    When I search for a contact named "Ola Ajala"
    Then Checkbox for "Ola Ajala" should be clickable