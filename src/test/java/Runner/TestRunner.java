package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


/*
@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Technical\\Priya's Workspace\\CucumberBDD\\src\\main\\java\\Features\\FBLogin.feature",
				 glue={"StepDefinitions"},
				 monochrome = true)*/


@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Technical\\Priya's Workspace\\CucumberBDD\\src\\main\\java\\Features\\Contacts.feature",
				 glue={"StepDefinitions"}, // path of thr step defn file
				 format = {"pretty","html:test-output", "junit:junit_xml/cucumber.xml"} ,
				 monochrome = true ,//display the console output in a proper readable format
				 dryRun= false // to check of we have defined step defn for all feature steps
				 )

public class TestRunner {

}
