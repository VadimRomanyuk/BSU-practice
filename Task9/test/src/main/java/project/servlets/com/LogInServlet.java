package project.servlets.com;

import com.google.gson.Gson;
import org.json.simple.JSONObject;
import project.logic.com.PhotoPost;
import project.logic.com.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@WebServlet
@MultipartConfig
public class LogInServlet extends HttpServlet {
    public static User user;
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      String login = req.getParameter("login").trim();
      String pass = req.getParameter("pass").trim();
      user = new User(login,pass);
        PostServlet.storage.addUser(user);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Gson gson = new Gson();
        String answer = gson.toJson(user);
        resp.getOutputStream().print(answer);
    }
}
