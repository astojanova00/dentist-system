package uni.dentist.models;
import java.util.*;


public class Appointment {
	

	private String appointment_id;
	   
	    private String date;

	    private String time;

	    private Guest owner;

	    private Set<Schedule> schedules;
	   
	    private Patient creator1;

	    private Dentist creator2;

	    private Receptionist creator3;
	    
	    private Set<Mailer> sender;

		private String name;

		private String email;

		private String phone;

    /**
     * Default constructor
     */
    public Appointment() {
    	//this(null,null,null);
    }

    
 
    
    public Appointment (final String id, final String date, final String time) {
		this.appointment_id = id;
		this.date = date;
		this.time = time;
		
		
	}





	public Appointment(String name, String email, String phone, String date) {
		this.name = name;
		this.email = email;
		this.phone = phone;  
		this.date = date;
	}




	public String getAppointment_id() {
       
        return appointment_id;
    }

    /**
     * @param guest_id 
     * @return
     */
    public void setAppointment_id(String appointment_id) {
       this.appointment_id = appointment_id;
      
    }

    /**
     * @return
     */
    public String getDate() {
        
        return date;
    }

    /**
     * @param name 
     * @return
     */
    public void setDate(String date) {
        this.date = date;
       
    }

    /**
     * @return
     */
    public String getTime() {
        
        return time;
    }

    /**
     * @param email 
     * @return
     */
    public void setTime(String time) {
        this.time = time;
    }
    
    
    
    
    
    /**
     * @return
     */
    public Guest getOwner() {
       
        return owner;
    }

    /**
     * @param owner 
     * @return
     */
    public void setOwner(Guest owner) {
       this.owner = owner;
       
    }

    /**
     * @return
     */
    public Set<Schedule> getSchedules() {
        return schedules;
    }

    /**
     * @param schedules 
     * @return
     */
    public void setSchedules(Set<Schedule> schedules) {
        this.schedules = schedules;
      
    }

    /**
     * @return
     */
    public Patient getCreator1() {
        return creator1;
    }

    /**
     * @param creator 
     * @return
     */
    public void setCreator1(Patient creator1) {
        this.creator1 = creator1;
    
    }

    /**
     * @return
     */
    public Dentist getCreator2() {
       
        return creator2;
    }

    /**
     * @param creator 
     * @return
     */
    public void setCreator2(Dentist creator2) {
        this.creator2 = creator2;
        
    }

    /**
     * @return
     */
    public Receptionist getCreator3() {
        return creator3;
    }

    /**
     * @param creator 
     * @return
     */
    public void setCreator3(Receptionist creator3) {
        this.creator3 = creator3;
        
    }

    /**
     * @return
     */
    public Set<Mailer> getSender() {
        return sender;
    }

    /**
     * @param sender 
     * @return
     */
    public void setSender(Set<Mailer> sender) {
       this.sender = sender;
    }




	public String getEmail() {
		
		return email;
	}




	public String getName() {
		
		return name;
	}




	public String getPhone() {
		
		return phone;
	}

}