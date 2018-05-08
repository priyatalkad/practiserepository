package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FreeCRMLogin {

	 WebDriver driver;
	  
	  	
 	 	 @Given("^user is already on Login Page$")
 	 	 public void user_already_on_login_page(){
 	 	 System.setProperty("webdriver.chrome.driver", "C://Users//srika//Desktop//chromedriver.exe");
 	 	 driver = new ChromeDriver();
 	 	 driver.get("http://www.freecrm.com");
 	 	 }
	  	
	  	
 	 	@When("^title of login page is Free CRM$")
 	 	 public void title_of_login_page_is_free_CRM(){
 	 	 String title = driver.getTitle();
 	 	 System.out.println(title);
 	 	}
	  	
 	 	 /* Reg Exp:
 	 	  1. \"([^\"]*)\"
 	 	  2. \"(.*)\"
*/	  	
 	 	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
 	 	 public void user_enters_username_and_password(String username, String password){
 	 	 driver.findElement(By.name("username")).sendKeys(username);
 	 	 driver.findElement(By.name("password")).sendKeys(password);
 	 	 }
	  	
 	 	 
 	 	 
 	 	 @Then("^user clicks on login button$")
 	 	 public void user_clicks_on_login_button() {
 	 	 WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit' and @value='Login']"));
 	 	 JavascriptExecutor js = (JavascriptExecutor)driver;
 	 	 js.executeScript("arguments[0].click();", loginBtn);
 	 	 }
	  	
	  	
 	 	 @Then("^user is on home page$")
  		 public void user_is_on_hopme_page(){
  		 String title = driver.getTitle();
  		 System.out.println("Home Page title ::"+ title);
  		 //Assert.assertEquals("CRMPRO", title);
  		 }
  		 
  		 @Then("^user moves to new contact page$")
  		 public void user_moves_to_new_contact_page() throws InterruptedException {
  			driver.switchTo().frame("mainpanel");
  			Actions action = new Actions(driver);
  			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
  			driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
  			Thread.sleep(2000);
  			
  			}
  		 
  		 
  		 @Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
  		 public void user_enters_contacts_details(String firstname, String lastname, String position){
  			driver.findElement(By.xpath("//input[@name='first_name' and @id='first_name']")).sendKeys(firstname);
  			driver.findElement(By.xpath("//input[@name='surname' and @id='surname']")).sendKeys(lastname);
  			driver.findElement(By.xpath("//input[@name='company_position' and @id='company_position']")).sendKeys(position);
  			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
  		 }
  		 
 	 
  		 @Then("^Close the browser$")
  		 public void close_the_browser(){
  			 driver.quit();
  		 }
 	 	
 	 	
 	 	
 	 
 	 }