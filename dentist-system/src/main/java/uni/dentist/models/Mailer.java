package uni.dentist.models;
import java.util.*;

/**
 * 
 */
public class Mailer {
    public Mailer() {
    }

    private String content;

    private Guest toguest;

    private Patient topatient;

    private Set<Appointment> booking;
  

    /**
     * @return
     */
    public String getContent() {
        
        return content;
    }

    /**
     * @param content 
     * @return
     */
    public void setContent(String content) {
        this.content = content;
        
    }

    /**
     * @return
     */
    public Guest getToguest() {
        
        return toguest;
    }

    /**
     * @param toguest 
     * @return
     */
    public void setToguest(Guest toguest) {
        this.toguest = toguest;
        
    }

    /**
     * @return
     */
    public Patient getTopatient() {
        
        return topatient;
    }

    /**
     * @param topatient 
     * @return
     */
    public void setTopatient(Patient topatient) {
        this.topatient = topatient;
        
    }

    /**
     * @return
     */
    public Set<Appointment> getBooking() {
        
        return booking;
    }

    /**
     * @param booking 
     * @return
     */
    public void setBooking(Set<Appointment> booking) {
        this.booking = booking;
       
    }

}