package uni.dentist.login.model;

import uni.dentist.login.service.LoginService;

public class LoginScreenModel {

	private String id;
	private String username;
	private String password;
	private String message;

	public void setId(final String id) {
	this.id = id;
		
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

	public String getMessage() {
		
		return message;
	}


}
