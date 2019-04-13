package com.bsu.project;

import org.json.simple.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JavaWebGet extends HttpServlet {
    private static final int MAX_LENGTH = 100;
    private static final int MIN_LENGTH = 0;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name").trim();
        switch(name == null? "null" : (name.length() > MIN_LENGTH && name.length() <= MAX_LENGTH)? name : "wrong")
        {
            case "null":
                resp.getOutputStream().println("User without name");
                break;
            case "wrong":
                resp.getOutputStream().println("Bad name for User");
                break;
            default:
                String answer = String.format("Name is %s",name);
                resp.getOutputStream().println(answer);
                break;
        }
    }
}
