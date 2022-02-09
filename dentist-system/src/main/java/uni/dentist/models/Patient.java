package uni.dentist.models;
import java.util.*;


public class Patient {
	
    private String patient_id;

    private String name;

    private String email;

    private String phone;

    private String address;

    private Set<User> users;

    private Set<Appointment> appointments;

    private Set<Mailer> mail;

  
    public Patient() {
    }

   
    /**
     * @return
     */
    public String getPatient_id() {
   
        return patient_id;
    }

    /**
     * @param patient_id 
     * @return
     */
    public void setPatient_id(String patient_id) {
        this.patient_id = patient_id;
        
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
    public String getAddress() {
        
        return address;
    }

    /**
     * @param address 
     * @return
     */
    public void setAddress(String address) {
        this.address = address;
       
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

    /**
     * @return
     */
    public Set<Mailer> getMail() {
       
        return mail;
    }

    /**
     * @param mail 
     * @return
     */
    public void setMail(Set<Mailer> mail) {
        this.mail = mail;
        
    }

}