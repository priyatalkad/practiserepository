Feature: Free CRM Create new Contacts

Scenario Outline: Free CRM Create a new contact scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "naveenk" and "test@123"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser


Examples:
	| firstname | lastname  | position    |
	| Harry	    | Page      | Dev Engg    |
	| Kate      | Middleton | Test Analyst|