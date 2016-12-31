import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;


public class NameList {

	ArrayList<String> boyList = new ArrayList<String>();
	ArrayList<String> girlList = new ArrayList<String>();

	HashMap<String, Integer> boyHM = new HashMap<String, Integer>();
	HashMap<String, Integer> girlHM = new HashMap<String, Integer>();

	public NameList(String namegender, String path) {
		try {
			populateList(namegender, path);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if (namegender.equals("girl")) {
			populateHashMap(girlList, namegender);
			normalizeGirlHM();
		} else if (namegender.equals("boy")) {
			populateHashMap(boyList, namegender);
			normalizeBoyHM();
		}
	}

	public void populateList (String namegender, String path) throws IOException  {

		File file = new File(path + namegender + ".txt");
		BufferedReader filereader = new BufferedReader(new FileReader(file));
		String name = null;

		while ((name = filereader.readLine()) != null) {
			if (namegender.equals("girl")) {
				girlList.add("__" + name.toLowerCase() + "__");
			} else if (namegender.equals("boy")) {
				boyList.add("__" + name.toLowerCase() + "__");
			}
		}

		filereader.close();
	}

	public void populateHashMap(ArrayList<String> list, String namegender) {
		for (String s : list) {
			for (int i = 0; i < s.length() - 2; i++) {
				String addString = "" + s.charAt(i)+ s.charAt(i+1) + s.charAt(i+2);
				if (namegender.equals("girl")) {
					addtoGirlHM(addString);
				} else if (namegender.equals("boy")) {
					addtoBoyHM(addString);
				}
			}
		}
	}

	public void addtoBoyHM(String key) {
		if (!boyHM.containsKey(key)) {
			boyHM.put(key, 1);
		} else {
			int value = boyHM.get(key);
			boyHM.put(key, value + 1);
		}
	}

	public void addtoGirlHM(String key) {
		if (!girlHM.containsKey(key)) {
			girlHM.put(key, 1);
		} else {
			int value = girlHM.get(key);
			girlHM.put(key, value + 1);
		}
	}

	public HashMap<String, Integer> getHM (String namegender) {
		if (namegender.equals("girl")) {
			return new HashMap<String, Integer>(girlHM);
		} else {
			return new HashMap<String, Integer>(boyHM);
		}
	}

	public void normalizeGirlHM() {

	}

	public void normalizeBoyHM() {

	}

}
