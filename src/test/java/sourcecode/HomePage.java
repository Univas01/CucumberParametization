package sourcecode;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepdefs.ServiceHooks;

public class HomePage {

    public WebDriver driver;

    @FindBy(xpath = "a")
    WebElement logoutBtn;

    public HomePage(){
        driver = ServiceHooks.driver;
        PageFactory.initElements(driver, this);
    }

    public String verifyHomePageTitle(){
        return driver.getTitle();
    }
}
