Feature: Navigating within Home Page

  Scenario: Redirect users to correct page

    Given I have successfully logged in to CRM Application
    When I click on contacts link
    Then List of contacts should be displayed