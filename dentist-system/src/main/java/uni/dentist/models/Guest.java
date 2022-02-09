package uni.dentist.models;
import java.util.*;

/**
 * 
 */
public class Guest {
  
    private String guest_id;
   
    private String name;

    private String email;

    private Set<Appointment> appointments;

    private Set<Mailer> mail;
    
    
    public Guest() {
    }



    /**
     * @return
     */
    public String getGuest_id() {
        
        return guest_id;
    }

    /**
     * @param guest_id 
     * @return
     */
    public void setGuest_id(String guest_id) {
       this.guest_id = guest_id;
      
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
        this.name= name;
       
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