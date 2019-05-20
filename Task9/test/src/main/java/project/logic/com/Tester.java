package project.logic.com;

import project.database.DataBaseHandler;

import java.sql.Connection;
import java.sql.PreparedStatement;


public class Tester {
    public static void main(String[] args) {
        try {
            Connection conn = new DataBaseHandler().getDbConnect();
            String sql = "UPDATE user SET name = ? WHERE user_id = ?";
            try(PreparedStatement prSt = conn.prepareStatement(sql))
            {
                prSt.setString(1,"Smirnov");
                prSt.setInt(2,1);
                prSt.executeUpdate();
            }

        }
         catch(Exception ex){
        System.out.println("Connection failed...");
        System.out.println(ex);
    }
    }
}
