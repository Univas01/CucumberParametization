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
  "duration": 3415627611,
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
  "location": "Login_steps.i_open_the_website_in_a_browser()"
});
formatter.result({
  "duration": 7561250558,
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
  "location": "Login_steps.i_login_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 9973055814,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 18797532,
  "status": "passed"
});
formatter.after({
  "duration": 624095907,
  "status": "passed"
});
formatter.before({
  "duration": 2373859427,
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
  "location": "Login_steps.i_open_the_website_in_a_browser()"
});
formatter.result({
  "duration": 9452113320,
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
  "location": "Login_steps.i_login_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 9148357342,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 16799618,
  "status": "passed"
});
formatter.after({
  "duration": 657510915,
  "status": "passed"
});
formatter.before({
  "duration": 2346840257,
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
  "location": "Login_steps.i_open_the_website_in_a_browser()"
});
formatter.result({
  "duration": 6409711122,
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
  "location": "Login_steps.i_login_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 10931705279,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 22665472,
  "status": "passed"
});
formatter.after({
  "duration": 640112157,
  "status": "passed"
});
});