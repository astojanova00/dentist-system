package uni.dentist.appointment.model;

import uni.dentist.appointment.AppointmentService;

public class AppointmentScreenModel {

	private String id;
	private String date;
	private String time;
	private String message;
	private String name;
	private String email;

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
	

}
