package com.bsu.project;

import org.json.simple.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JavaCheckWeb extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        JSONObject answer = new JSONObject();
        answer.put("success",true);
        answer.put("NameApp","Photolover");
        resp.getOutputStream().println(answer.toString());
    }
}
