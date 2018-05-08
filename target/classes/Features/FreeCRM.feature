Feature: Free CRM Login Feature


#Scenario: Free CRM Login Test Scenario

#Given user is already on Login Page
#When title of login page is Free CRM
#Then user clicks on login button
#Then user is on home page


#with examples keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "naveenk" and "test@123"
Then user clicks on login button
Then user is on home page
Then Close the browser


Examples:
	| username | password |
	| naveenk  | test@123 |
	| tom      | test@456 |