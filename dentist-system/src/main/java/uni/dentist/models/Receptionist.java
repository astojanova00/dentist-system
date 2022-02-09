package uni.dentist.models;
import java.util.*;

public class Receptionist {
	 
    private String receptionist_id;

    private String name;

    private String phone;

    private String email;

    private Set<User> users;

    private Set<Appointment> appointments;

    public Receptionist() {
    }

  
    /**
     * @return
     */
    public String getReceptionist_id() {
       
        return receptionist_id;
    }

    /**
     * @param dentist_id 
     * @return
     */
    public void setReceptionist_id(String receptionist_id) {
        this.receptionist_id = receptionist_id;
        
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