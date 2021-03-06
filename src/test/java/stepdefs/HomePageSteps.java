package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import sourcecode.ContactPage;
import sourcecode.HomePage;
import sourcecode.LoginPage;
import utility.TestUtil;
import java.util.Properties;

public class HomePageSteps {

    public WebDriver driver;
    public Properties prop;
    LoginPage loginPage;
    HomePage homePage;
    ContactPage contactPage;
    TestUtil testUtil;

    public HomePageSteps(){
        driver = ServiceHooks.driver;
        prop = ServiceHooks.prop;
        loginPage = new LoginPage();
        homePage = new HomePage();
        testUtil = new TestUtil();
        driver.get(prop.getProperty("url"));

    }

    @Given("^I have successfully logged in to CRM Application$")
    public void i_have_successfully_logged_in_to_CRM_Application() {
        homePage = loginPage.login(prop.getProperty("userName"),prop.getProperty("password"));
    }

    @When("^I click on contacts link$")
    public void i_click_on_contacts_link() {
        testUtil.switchToMainFrame();
        contactPage = homePage.clickOnContactLink();
    }

    @Then("^List of contacts should be displayed$")
    public void list_of_contacts_should_be_displayed() {
        Assert.assertTrue(contactPage.verifyContactHeader());
        contactPage.selectContactCheckBox("Chris Webstar");
    }

}
