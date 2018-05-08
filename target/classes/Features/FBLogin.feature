Feature: Validating FB login with valid credentials



 Scenario: FBLogin with valid credentails
 
 Given user is on the FB login page
 When user enters valid usename and password
 Then user is able to login into Fb and is able to view his homepage