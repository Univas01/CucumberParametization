package utility;

import org.openqa.selenium.WebDriver;
import stepdefs.ServiceHooks;

public class TestUtil {

    public WebDriver driver;

    public TestUtil(){
        driver = ServiceHooks.driver;
    }

    public void switchToMainFrame(){
        driver.switchTo().frame("mainpanel");
    }
}
