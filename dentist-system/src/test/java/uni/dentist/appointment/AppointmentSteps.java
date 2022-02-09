package uni.dentist.appointment;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.dentist.HomeScreenModel;

public class AppointmentSteps {
	
	
	private HomeScreenModel appointmentScreenModel;

	public AppointmentSteps(HomeScreenModel appointmentScreenModel)
	{
		this.appointmentScreenModel = appointmentScreenModel;
	}
	
	
	@Given("^Потребителя отваря екрана за запазване на час$")
	public void openAppointmentScreen() throws Throwable {
	    //appointmentScreenModel = new  AppointmentScreenModel();
	}

	
	@When("^Потребителя въведе \"([^\"]*)\"$")
	public void  addName(String name) throws Throwable {
	    appointmentScreenModel.setName(name);
	}

	@When("^Потребителя сложи \"([^\"]*)\"$")
	public void addEmail(String email) throws Throwable {
	    appointmentScreenModel.setEmail(email);
	}

	
	@When("^Потребителя сложи идентификационнен номер за своя час \"([^\"]*)\"$")
	public void addId(final String id) throws Throwable {
		appointmentScreenModel.setId(id);
	}

	@When("^Избере потребителя датум: \"([^\"]*)\" за часа$")
	public void addDate(String date) throws Throwable {
		appointmentScreenModel.setDate(date);
	}
	
	@When("^Избере потребителя време: \"([^\"]*)\" за часа$")
	public void addTime(final String time) throws Throwable {
		appointmentScreenModel.setTime(time);
	}


	@When("^Натисне бутона за запазване на час$")
	public void clickAppointmentButton() throws Throwable {
		  appointmentScreenModel.clickAppointmentButton();
	}

	@Then("^Вижда съобщение :\"([^\"]*)\"\\.$")
	public void checkMessage(final String expectedMessage) throws Throwable {
	    assertEquals(expectedMessage, appointmentScreenModel.getMessage());
	}

}
