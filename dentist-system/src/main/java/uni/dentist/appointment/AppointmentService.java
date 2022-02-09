package uni.dentist.appointment;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import uni.dentist.models.Appointment;

public class AppointmentService {

	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = 
		    Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

	
	private static List<Appointment> appointmentsDB = new ArrayList<>();
	
	public static String appointment(String name, String email, String id, String date, String time) {
		
		intDb();
		
		if(date == null || "".equals(date.trim())) {
			return "Изберете дата";
		}
		
		if(time == null || "".equals(time.trim())) {
			return "Изберете час";
		}
		
		if(id == null || "".equals(id.trim())) {
			return "Въведете идентификационнен номер";
		}
		
		
		if(id.length()<4) {
			return "Идентификацията трябва да е мин. четири символа";
		}
		
		if(date.equals("02.02.1995") ) {
			return "Изберете валидна дата";
		}
		
		if(!validate(email)) {
			return "Въведете валиден емаил!";
		}
		
		boolean isdateExist = appointmentsDB.stream().anyMatch(u->u.getDate().equals(date));
		if(isdateExist) {
			return "Часа е зает!";
		} 
		
		
		final Appointment newAppointment = new Appointment(id, date, time);
		appointmentsDB.add(newAppointment);
		return "Успешно запазихте час, потвърдете чрез вашия е-майл!";
		
		
	}
	
	
		public static boolean validate(String emailStr) {
		        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
		        return matcher.find();
		}
	
	
	private static void intDb() {
		appointmentsDB.clear();
		appointmentsDB.add(new Appointment("1111", "15.02.2022", "10:30"));
	}

	

}
