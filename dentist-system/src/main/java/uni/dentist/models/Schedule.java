package uni.dentist.models;
import java.util.*;


public class Schedule {
	
    private String available_date;

    private String available_time;

    private Dentist makes;

    private Set<Appointment> adds;
    
    public Schedule() {
    }

    

    /**
     * @return
     */
    public String getAvailable_date() {
     
        return available_date;
    }

    /**
     * @param available_date 
     * @return
     */
    public void setAvailable_date(String available_date) {
        
        this.available_date = available_date;
    }

    /**
     * @return
     */
    public String getAvailable_time() {
       
        return available_time;
    }

    /**
     * @param available_time 
     * @return
     */
    public void setAvailable_time(String available_time) {
    this.available_time = available_time;
        
    }

    /**
     * @return
     */
    public Dentist getMakes() {
        
        return makes;
    }

    /**
     * @param makes 
     * @return
     */
    public void setMakes(Dentist makes) {
        this.makes = makes;
       
    }

    /**
     * @return
     */
    public Set<Appointment> getAdds() {
        
        return adds;
    }

    /**
     * @param adds 
     * @return
     */
    public void setAdds(Set<Appointment> adds) {
        this.adds = adds;
       
    }

}