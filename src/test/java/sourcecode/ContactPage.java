package sourcecode;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepdefs.ServiceHooks;

public class ContactPage {

    public WebDriver driver;

    @FindBy(xpath = "//td[contains(text(), 'Contacts')]")
    WebElement contactHeader;

    @FindBy(xpath = "//input[@name='cs_name']")
    WebElement contact_nameFTF;

    @FindBy(xpath = "//input[@type='submit' and @value='Search']")
    WebElement contact_submitBtn;

    @FindBy(xpath = "//input[@name='cs_company_name']")
    WebElement contact_companyFTF;


    public ContactPage(){
        driver = ServiceHooks.driver;
        PageFactory.initElements(driver, this);
    }

    public boolean verifyContactHeader(){
        return contactHeader.isDisplayed();
    }

    public boolean selectContactCheckBox(String name){
        WebElement clickOnCheckBox = driver.findElement(By.xpath
                ("//a[contains(text(),'"+name+"')]//parent::*//preceding-sibling::*//input[@type='checkbox']"));
        clickOnCheckBox.click();
        return true;
    }

    public void searchForContact(String contactName){
        contact_nameFTF.clear();
        contact_nameFTF.sendKeys(contactName);
        contact_submitBtn.click();
    }

    public void isNameDisplayed(String nameDisplayed){
        driver.findElement(By.xpath("//a[@_name='"+nameDisplayed+"']")).isDisplayed();
    }
}
