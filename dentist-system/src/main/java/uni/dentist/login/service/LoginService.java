package uni.dentist.login.service;

import java.util.Collections;
import java.util.List;

import uni.dentist.models.User;

public class LoginService {
	
	private static List<User> usersDb = Collections.singletonList(new User("1901321101","Alex22", "123pass" ));

	public static String login(final String id,final String username,final String password) {
		
		if(null == password || null == username || null == id) {
			return "Въведете всички данни!";
		}
		
		final boolean isUserExists = usersDb.stream()
				.anyMatch(u-> u.getId().equals(id) && u.getUsername().equals(username) && u.getPassword().equals(password));
		
		return isUserExists?"Успешно влизане!" : null;
	}
	
	

}
