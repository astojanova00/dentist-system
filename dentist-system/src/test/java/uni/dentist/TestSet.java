package uni.dentist;

import static org.junit.Assert.assertEquals;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;

import uni.dentist.models.User;

public class TestSet {
    @Test
	  public void testSetWithStrings() {
    	final Set<String> testInstance = new HashSet<String>();
    	String value1 = "value";
    	testInstance.add(value1);
    	
    	String value2 = "value";
    	testInstance.add(value2);
    	
    	String value3 = "value";
    	testInstance.add(value3);
    	
    	assertEquals(1, testInstance.size());
    	
    }
    
    
    
    	 @Test
    		public void testSetWithUsers() {
    		 final Set<User> testInstance = new HashSet<User>();
    		 
    	    	User value1 = new User();
    	    	value1.setUsername("Alex21");
    	    	testInstance.add(value1);
    	    	
    	    	User value2 = new User();
    	    	value2.setUsername("Alex21");
    	    	testInstance.add(value2);
    	    	
    	    	User value3 = new User();
    	    	value3.setUsername("Stef23");
    	    	testInstance.add(value3);
    	    	
    	    	assertEquals(1, testInstance.size());
    		}
		
	
	
}
