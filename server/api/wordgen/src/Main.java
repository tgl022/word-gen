import java.io.IOException;
import java.util.HashMap;
import java.util.Scanner;
import java.util.Random;


public class Main {

	public static void main(String[] args) throws IOException {
		//boy.txt and girl.txt default to current directory
		String type = args[0];
		String path = "";

		//Generate random length between 5 and 9
		Random rand = new Random();
		int roll = rand.nextInt(6) + 4;
		int length = roll;



		// while (!namegender.equals("stop")) {

			// Scanner in = new Scanner(System.in);
			// System.out.println("Boy or Girl? ");
			// namegender = in.nextLine();

			// System.out.println("How long should the name be? ");
			// length = in.nextInt();



			NameList namelist = new NameList(type, path);
			HashMap<String, Integer> nameHM = namelist.getHM(type);

			NameGenerator namegen = new NameGenerator();
			namegen.setParameters(nameHM, length);

			String name = namegen.generate();
			System.out.print(name);
		// }

	}


}
