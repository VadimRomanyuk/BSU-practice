package project.servlets.com;

import project.logic.com.PhotoPost;
import project.logic.com.PostCollection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

public class PagePostsServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Map<String,String> filterConfig = new HashMap<>();
        List<PhotoPost> posts;
        int skip, top;
        try {
            skip = Integer.parseInt(req.getParameter("skip").trim());
            if(skip == -1)
            {
                posts = PostServlet.storage.getCollection().getArray();
                if(posts.size() == 0){resp.getWriter().write("");}
                else {
                    resp.getWriter().write(PostCollection.toJsonString(posts));
                }
                return ;
            }
        } catch (Exception e)
        {
            e.printStackTrace();
            skip = 0;
        }
        try {
            top = Integer.parseInt(req.getParameter("top").trim());
        }catch (Exception e)
        {
            top = 10;
        }
        try {
            String author = req.getParameter("author").trim();
            if(author != null && author.length() > 0){filterConfig.put("author",author);}
        } catch (Exception e)
        {

        }
        try{
            String dateFrom = req.getParameter("dateFrom").trim();
            if(dateFrom != null && dateFrom.length() > 0){filterConfig.put("datefrom",dateFrom);}
        } catch (Exception e)
        {

        }
        try {
            String dateTo = req.getParameter("dateTo").trim();
            if(dateTo != null && dateTo.length() > 0){filterConfig.put("dateto",dateTo);}
        } catch (Exception e)
        {

        }
        try {
            String tag = req.getParameter("tag").trim();
            if (tag != null && tag.length() > 0) {
                filterConfig.put("hashtag", tag);
            }
        } catch (Exception e)
        {

        }
        if(filterConfig.size() == 0) {
             posts = PostServlet.storage.getCollection().getPage(skip, top, null);
        }
        else{
            posts = PostServlet.storage.getCollection().getPage(skip,top,filterConfig);
        }
         resp.getOutputStream().print(PostCollection.toJsonString(posts));
    }
}
