package stepdefs;

import org.openqa.selenium.WebDriver;
import sourcecode.HomePage;
import sourcecode.LoginPage;

public class HomePageSteps {

    public WebDriver driver;
    LoginPage loginPage;
    HomePage homePage;

    public HomePageSteps(){

        driver = ServiceHooks.driver;
        loginPage = new LoginPage();
        homePage = new HomePage();
    }

}
