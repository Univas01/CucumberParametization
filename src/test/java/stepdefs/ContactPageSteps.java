package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import sourcecode.ContactPage;
import sourcecode.HomePage;
import sourcecode.LoginPage;
import utility.TestUtil;

import java.util.Properties;

public class ContactPageSteps {

    public WebDriver driver;
    public Properties prop;
    LoginPage loginPage;
    HomePage homePage;
    ContactPage contactPage;
    TestUtil testUtil;

    public ContactPageSteps(){
        driver = ServiceHooks.driver;
        prop = ServiceHooks.prop;
        loginPage = new LoginPage();
        homePage = new HomePage();
        testUtil = new TestUtil();
        contactPage = new ContactPage();
        driver.get(prop.getProperty("url"));
    }

    @Given("^I have successfully logged in$")
    public void i_have_successfully_logged_in() {
        homePage = loginPage.login(prop.getProperty("userName"),prop.getProperty("password"));
    }

    @When("^I search for a contact named \"([^\"]*)\"$")
    public void i_search_for_a_contact_named(String arg1) {
        testUtil.switchToMainFrame();
        homePage.clickOnContactLink();
        contactPage.searchForContact(arg1);
    }

    @Then("^Contact details should be returned$")
    public void contact_details_should_be_returned() {
        contactPage.selectContactCheckBox(prop.getProperty("contact_nameFTF"));
    }

}
