package project.servlets.com;

import project.logic.com.PhotoPost;
import project.logic.com.PostCollection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;

public class PostServlet extends HttpServlet {
    private static PostCollection storage = new PostCollection();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
     String id = req.getParameter("id").trim();
     PhotoPost elem;
     if(id != null && storage.get(id)!= null)
     {
        elem = storage.get(id);
        resp.getOutputStream().println(elem.toString());
     }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       String id =  req.getParameter("id").trim();
       String author = req.getParameter("author").trim();
       String description = req.getParameter("description").trim();
       String photolink = req.getParameter("photolink").trim();
       String[] tags = req.getParameter("tags").trim().split(",");
       ArrayList<String> tagsForPost = new ArrayList<>();
       Collections.addAll(tagsForPost,tags);
       PhotoPost elem = new PhotoPost(id,description,author,photolink,new Date(),new ArrayList<String>(),tagsForPost);
       storage.add(elem);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       String id =  req.getParameter("id").trim();
       if(id != null)
       {
           storage.remove(id);
       }
        resp.getOutputStream().println(id);
    }

   static public PostCollection getStorage() {
        return new PostCollection(storage.getArray());
    }
}
