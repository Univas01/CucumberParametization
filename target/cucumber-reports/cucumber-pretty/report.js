$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactPage.feature");
formatter.feature({
  "line": 1,
  "name": "Searching for a contact",
  "description": "",
  "id": "searching-for-a-contact",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3135329625,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Return exact match for contact",
  "description": "",
  "id": "searching-for-a-contact;return-exact-match-for-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have successfully logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for a contact named \"Ola Ajala\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Checkbox for \"Ola Ajala\" should be clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactPageSteps.i_have_successfully_logged_in()"
});
formatter.result({
  "duration": 9820496418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ola Ajala",
      "offset": 30
    }
  ],
  "location": "ContactPageSteps.i_search_for_a_contact_named(String)"
});
formatter.result({
  "duration": 2182371203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ola Ajala",
      "offset": 14
    }
  ],
  "location": "ContactPageSteps.checkbox_for_should_be_clickable(String)"
});
formatter.result({
  "duration": 208815178,
  "status": "passed"
});
formatter.after({
  "duration": 102358119,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Navigating within Home Page",
  "description": "",
  "id": "navigating-within-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1508672146,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Redirect users to correct page",
  "description": "",
  "id": "navigating-within-home-page;redirect-users-to-correct-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have successfully logged in to CRM Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "List of contacts should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_have_successfully_logged_in_to_CRM_Application()"
});
formatter.result({
  "duration": 6890150765,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_on_contacts_link()"
});
formatter.result({
  "duration": 1185183110,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.list_of_contacts_should_be_displayed()"
});
formatter.result({
  "duration": 178008006,
  "status": "passed"
});
formatter.after({
  "duration": 135561342,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login into the FreeCRM website",
  "description": "",
  "id": "login-into-the-freecrm-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verifying the user can login to the freeCRM website",
  "description": "",
  "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the website in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Flight finder page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;1"
    },
    {
      "cells": [
        "univas01",
        "Computer1!"
      ],
      "line": 12,
      "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;2"
    },
    {
      "cells": [
        "olacontact",
        "Computer1!!"
      ],
      "line": 13,
      "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;3"
    },
    {
      "cells": [
        "redakosimi",
        "Computer1!!!"
      ],
      "line": 14,
      "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1534938845,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verifying the user can login to the freeCRM website",
  "description": "",
  "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the website in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credentials \"univas01\" and \"Computer1!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Flight finder page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.i_open_the_website_in_a_browser()"
});
formatter.result({
  "duration": 2339673782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "univas01",
      "offset": 26
    },
    {
      "val": "Computer1!",
      "offset": 41
    }
  ],
  "location": "LoginPageSteps.i_login_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 6490540813,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 10661905,
  "status": "passed"
});
formatter.after({
  "duration": 136910807,
  "status": "passed"
});
formatter.before({
  "duration": 1422628793,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verifying the user can login to the freeCRM website",
  "description": "",
  "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the website in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credentials \"olacontact\" and \"Computer1!!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Flight finder page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.i_open_the_website_in_a_browser()"
});
formatter.result({
  "duration": 2714729676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "olacontact",
      "offset": 26
    },
    {
      "val": "Computer1!!",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.i_login_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 6977498213,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 193915458,
  "status": "passed"
});
formatter.after({
  "duration": 133592749,
  "status": "passed"
});
formatter.before({
  "duration": 1455799250,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verifying the user can login to the freeCRM website",
  "description": "",
  "id": "login-into-the-freecrm-website;verifying-the-user-can-login-to-the-freecrm-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the website in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credentials \"redakosimi\" and \"Computer1!!!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Flight finder page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.i_open_the_website_in_a_browser()"
});
formatter.result({
  "duration": 2496974210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "redakosimi",
      "offset": 26
    },
    {
      "val": "Computer1!!!",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.i_login_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 7679539449,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 13617847,
  "status": "passed"
});
formatter.after({
  "duration": 94169789,
  "status": "passed"
});
});