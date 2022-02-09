package uni.dentist.models;
import java.util.*;

/**
 * 
 */
public class Dentist {
	
	 private String dentist_id;

	    private String name;

	    private String email;

	    private String phone;

	    private Set<User> users;

	    private Set<Schedule> free;

	    
	    private Set<Appointment> appointments;


    /**
     * Default constructor
     */
    public Dentist() {
    }

   

    /**
     * @return
     */
    public String getDentist_id() {
     
        return dentist_id;
    }

    /**
     * @param dentist_id 
     * @return
     */
    public void setDentist_id(String dentist_id) {
        this.dentist_id = dentist_id;
       
    }

    /**
     * @return
     */
    public String getName() {
        
        return name;
    }

    /**
     * @param name 
     * @return
     */
    public void setName(String name) {
        this.name = name;
    
    }

    /**
     * @return
     */
    public String getEmail() {
        
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        this.email = email;
    
    }

    /**
     * @return
     */
    public String getPhone() {
        
        return phone;
    }

    /**
     * @param phone 
     * @return
     */
    public void setPhone(String phone) {
       this.phone = phone;
    }

    /**
     * @return
     */
    public Set<User> getUsers() {
        
        return users;
    }

    /**
     * @param users 
     * @return
     */
    public void setUsers(Set<User> users) {
        this.users = users;
  
    }

    /**
     * @return
     */
    public Set<Schedule> getFree() {
        
        return free;
    }

    /**
     * @param free 
     * @return
     */
    public void setFree(Set<Schedule> free) {
        this.free = free;
     
    }

    /**
     * @return
     */
    public Set<Appointment> getAppointments() {
       
        return appointments;
    }

    /**
     * @param appointments 
     * @return
     */
    public void setAppointments(Set<Appointment> appointments) {
        this.appointments = appointments;
       
    }

}