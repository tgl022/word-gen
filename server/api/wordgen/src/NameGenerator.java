import java.util.HashMap;
import java.util.Random;
import java.util.TreeMap;


public class NameGenerator {
	
	HashMap<String, Integer> hashmap;
	int length;
	
	NameGenerator() {
	}
	
	public void setParameters(HashMap<String, Integer> hm, int len) {
		hashmap = new HashMap<String, Integer>(hm);
		length = len;
	}
	
	public String generate() {
		
		String name = "__";
		for (int i = 0; i < length; i++) {
			name = addLetter(name);
		}
		name = name.substring(2, name.length());
		name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length());
		
		return name;
	}
	
	
	public String addLetter(String name) {
		String pair = "" + name.charAt(name.length()-2) +  name.charAt(name.length()-1);
		HashMap<String, Double> seekHM = new HashMap<String, Double>();
		
		double total = 0;
		
		for (char letter = 'a'; letter <= 'z'; letter++) {
			String key = pair + letter;
			double value = 0;
			if (hashmap.containsKey(key)) 
				value = hashmap.get(key);
			total += value;
			seekHM.put(key, value);
		}
		
		for (String key : seekHM.keySet()) {
			double value = seekHM.get(key);
			double ratio =(value/total) * 100;
			seekHM.put(key, ratio);
			
		}
		
		Random rand = new Random();
		int roll = rand.nextInt(99) + 1;
		double cumProb = 0.0;
		
		TreeMap<String, Double> seekTree = new TreeMap<String, Double>(seekHM);
		
		for (String key : seekTree.keySet()) {
			cumProb += seekTree.get(key);
			if (cumProb > roll) {
				name += key.charAt(key.length() - 1);
				break;
			}
		}
		return name;
	}
	
	
}
