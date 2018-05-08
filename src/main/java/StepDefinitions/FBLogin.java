package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FBLogin {

	WebDriver driver;
	
	
	
	@Given("^user is on the FB login page$")
	public void user_is_on_the_FB_login_page()  {
		System.setProperty("webdriver.chrome.driver", "C://Users//srika//Desktop//chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");

	}

	@When("^user enters valid usename and password$")
	public void user_enters_valid_usename_and_password() {
		String title = driver.getTitle();
		 System.out.println(title);
		driver.findElement(By.xpath("//input[@type='email' and @class='inputtext']")).sendKeys("tvpriya@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("priyarocks@1412");
	}

	@Then("^user is able to login into Fb and is able to view his homepage$")
	public void user_is_able_to_login_into_Fb_and_is_able_to_view_his_homepage()  {
	  driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
}
