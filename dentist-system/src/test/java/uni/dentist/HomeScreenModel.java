package uni.dentist;

import uni.dentist.appointment.AppointmentService;
import uni.dentist.login.service.LoginService;

public class HomeScreenModel {

	private String id;
	private String date;
	private String time;
	private String message;
	private String name;
	private String email;
	private String username;
	private String password;
	

	public void setId(String id) {
	 this.id =id;
		
	}

	public void setDate(String date) {
	 this.date = date;
		
	}

	public void setTime(String time) {
		this.time = time;
		
	}

	public void clickAppointmentButton() {
		
		message = AppointmentService.appointment(name, email, id, date, time);
	}

	public String getMessage() {
		
		return message;
	}

	public void setName(String name) {
		this.name = name;
		
	}

	public void setEmail(String email) {
		this.email = email;
		
	}
	
	public void setUsername(final String username) {
	this.username = username;
		
	}

	public void setPassword(final String password) {
    this.password = password;
		
	}
	

	public void clickLoginButton() {
		message = LoginService.login(id, username, password);
		
	}
	
	
}
