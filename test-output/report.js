$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Technical/Priya\u0027s Workspace/CucumberBDD/src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create new Contacts",
  "description": "",
  "id": "free-crm-create-new-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "Harry",
        "Page",
        "Dev Engg"
      ],
      "line": 17,
      "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "Kate",
        "Middleton",
        "Test Analyst"
      ],
      "line": 18,
      "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Harry\" and \"Page\" and \"Dev Engg\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMLogin.user_already_on_login_page()"
});
formatter.result({
  "duration": 15480683116,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 14402934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "FreeCRMLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 390335806,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 11577263900,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 6848012,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2369179799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 29
    },
    {
      "val": "Page",
      "offset": 41
    },
    {
      "val": "Dev Engg",
      "offset": 52
    }
  ],
  "location": "FreeCRMLogin.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 768901312,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.close_the_browser()"
});
formatter.result({
  "duration": 691818096,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Kate\" and \"Middleton\" and \"Test Analyst\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMLogin.user_already_on_login_page()"
});
formatter.result({
  "duration": 13575256068,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 19156728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "FreeCRMLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 338534168,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9404966679,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 6590136,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2350974600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kate",
      "offset": 29
    },
    {
      "val": "Middleton",
      "offset": 40
    },
    {
      "val": "Test Analyst",
      "offset": 56
    }
  ],
  "location": "FreeCRMLogin.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 741885600,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLogin.close_the_browser()"
});
formatter.result({
  "duration": 712516086,
  "status": "passed"
});
});