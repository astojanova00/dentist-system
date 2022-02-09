package uni.dentist.login;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.dentist.HomeScreenModel;


public class LoginSteps {

private HomeScreenModel loginModel;
public LoginSteps(final HomeScreenModel loginModel)
{
 this.loginModel = loginModel;
}


@Given("^Потребителя отваря екрана за вход в системата$")
public void openLoginScreen() throws Throwable {
    //loginModel = new LoginScreenModel();
}

@When("^Въведе валиден идентификационнен номер$")
public void addId() throws Throwable {
    loginModel.setId("1901321101");
}

@When("^въведе потребителско име: \"([^\"]*)\"$")
public void addUsername(final String username) throws Throwable {
   
    loginModel.setUsername("Alex22");
}

@When("^въведе валидна потребителска парола$")
public void addPassword() throws Throwable {
   
   loginModel.setPassword("123pass");
}

@When("^натисне бутина за вход в системата$")
public void clickLoginButton() throws Throwable {
    loginModel.clickLoginButton();
}

@Then("^Вижда съобщение: \"([^\"]*)\"\\.$")
public void checkMessage(final String expectedMessage) throws Throwable {
    assertEquals(expectedMessage, loginModel.getMessage());
}


}
