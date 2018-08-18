$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
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
  "duration": 1617655009,
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
  "duration": 2380511289,
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
  "duration": 5685231149,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 8598736,
  "status": "passed"
});
formatter.after({
  "duration": 77208105,
  "status": "passed"
});
formatter.before({
  "duration": 965438390,
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
  "duration": 2102042109,
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
  "duration": 5859882141,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 7982786,
  "status": "passed"
});
formatter.after({
  "duration": 84738987,
  "status": "passed"
});
formatter.before({
  "duration": 1011612272,
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
  "duration": 2057950017,
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
  "duration": 5335200780,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 8557609,
  "status": "passed"
});
formatter.after({
  "duration": 80704494,
  "status": "passed"
});
});