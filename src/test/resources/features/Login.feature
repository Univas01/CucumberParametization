Feature: Login into the FreeCRM website

  Scenario Outline: Verifying the user can login to the freeCRM website

    Given I open the website in a browser
    When I login with credentials "<username>" and "<password>"
    Then Flight finder page is displayed

    Examples:

      | username     | password     |
      | univas01     | Computer1!   |
      | olacontact   | Computer1!!  |
      | redakosimi   | Computer1!! |
