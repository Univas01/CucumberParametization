package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import sourcecode.HomePage;
import sourcecode.LoginPage;

import java.util.Properties;

public class LoginPageSteps {

    public WebDriver driver;
    public Properties prop;
    LoginPage loginPage;
    HomePage homePage;

    public LoginPageSteps(){
        driver = ServiceHooks.driver;
        prop = ServiceHooks.prop;
        loginPage = new LoginPage();
        homePage = new HomePage();
    }

    @Given("^I open the website in a browser$")
    public void i_open_the_website_in_a_browser() throws Throwable {
        driver.get(prop.getProperty("url"));
    }

    @When("^I login with credentials \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_login_with_credentials_and(String arg1, String arg2) throws Throwable {
        homePage = loginPage.login(arg1,arg2);
    }

    @Then("^Flight finder page is displayed$")
    public void flight_finder_page_is_displayed() throws Throwable {
        String homePageTitle = homePage.verifyHomePageTitle();
        Assert.assertEquals(homePageTitle, "CRMPRO", "Incorrect Page");
    }
}
