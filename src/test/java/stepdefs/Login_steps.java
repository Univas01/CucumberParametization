package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

import static org.testng.Assert.fail;

public class Login_steps {

    public WebDriver driver;

    public Login_steps(){
        driver = ServiceHooks.driver;
    }

    @Given("^I open the website in a browser$")
    public void i_open_the_website_in_a_browser() throws Throwable {
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://www.freecrm.com/index.html");
    }

    @When("^I login with credentials \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_login_with_credentials_and(String arg1, String arg2) throws Throwable {
        driver.findElement(By.xpath("//input[contains(@name, 'username')]")).sendKeys(arg1);
        driver.findElement(By.xpath("//input[contains(@name, 'password')]")).sendKeys(arg2);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        Boolean preloader = wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("preloader")));
        if(preloader){
            driver.findElement(By.xpath("//input[contains(@type, 'submit')]")).click();
        }
    }

    @Then("^Flight finder page is displayed$")
    public void flight_finder_page_is_displayed() throws Throwable {
        /*WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'New Help Center')]")));*/
        String title = driver.getTitle();
        if(title.equals("CRMPRO")){
            System.out.println("Test Passed");
        } else {
            fail("Test Failed");
        }
    }
}
