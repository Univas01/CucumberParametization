package sourcecode;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import stepdefs.ServiceHooks;

public class LoginPage {

    public WebDriver driver;

    @FindBy(xpath = "//input[contains(@name, 'username')]")
    WebElement userName;

    @FindBy(xpath = "//input[contains(@name, 'password')]")
    WebElement password;

    @FindBy(xpath = "//input[contains(@type, 'submit')]")
    WebElement submitBtn;

    public LoginPage(){
        driver = ServiceHooks.driver;
        PageFactory.initElements(driver, this);
    }

    public HomePage login(String user, String pwd){
        userName.sendKeys(user);
        password.sendKeys(pwd);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        Boolean preloader = wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("preloader")));
        if(preloader){
            submitBtn.click();
        }
        return new HomePage();
    }
}
