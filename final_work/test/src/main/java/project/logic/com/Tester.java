package project.logic.com;

import com.google.gson.Gson;
import project.database.DataBaseHandler;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Tester {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Vadya");
        names.add("Kolya");
        names.add("Petya");
        System.out.println(new Gson().toJson(names));

    }
}
