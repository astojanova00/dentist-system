package uni.dentist.models;
import java.util.*;


public class User {
	
    private String id;

    private String username;

    private String password;

    private Set<Patient> patients;

    private Set<Dentist> dentists;

    private Set<Receptionist> receptionists;


    public User() {
    }

  
    public User(final String id,final String username,final String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}


	/**
     * @return
     */
    public String getId() {
       
        return id;
    }

    /**
     * @param id 
     * @return
     */
    public void setId(String id) {
        this.id = id;
      
    }

    /**
     * @return
     */
    public String getUsername() {
        
        return username;
    }

    /**
     * @param username 
     * @return
     */
    public void setUsername(String username) {
        this.username = username;
       
    }

    /**
     * @return
     */
    public String getPassword() {
       
        return password;
    }

    /**
     * @param password 
     * @return
     */
    public void setPassword(String password) {
        this.password = password;
       
    }

    /**
     * @return
     */
    public Set<Patient> getPatients() {
        
        return patients;
    }

    /**
     * @param patients 
     * @return
     */
    public void setPatients(Set<Patient> patients) {
        this.patients = patients;
       
    }

    /**
     * @return
     */
    public Set<Dentist> getDentists() {
       
        return dentists;
    }

    /**
     * @param dentists 
     * @return
     */
    public void setDentists(Set<Dentist> dentists) {
       this.dentists = dentists;
       
    }

    /**
     * @return
     */
    public Set<Receptionist> getReceptionists() {
        
        return receptionists;
    }

    /**
     * @param receptionists 
     * @return
     */
    public void setReceptionists(Set<Receptionist> receptionists) {
        this.receptionists = receptionists;
        
    }


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

}