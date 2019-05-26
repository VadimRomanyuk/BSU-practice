package project.logic.com;

import project.database.DataBaseHandler;
import project.servlets.com.LogInServlet;
import java.util.List;

public class PostService{
    private List<User> userList ;
    private PostCollection posts;
    private DataBaseHandler dbHandle = new DataBaseHandler();
    public PostService ()
    {
        this.userList = dbHandle.getAllUsers();
        this.posts = new PostCollection(dbHandle.getAllPosts());
    }

    public void addPost(PhotoPost post)
    {
        dbHandle.savePost(LogInServlet.user.getID(),post);
        this.posts.add(post);
    }

    public void removePost(String id)
    {
        dbHandle.deletePost(id);
        this.posts.remove(id);
    }

    public void setLiker(String id, String user)
    {
        this.posts.setLike(id,user);
    }

    public PostCollection getCollection()
    {
        return this.posts;
    }

    public boolean isHereThisUser(String name)
    {
        for(User user : userList)
        {
            if(user.getNAME().trim().toLowerCase().equals(name.trim().toLowerCase()))
            {
                return true;
            }
        }
        return false;
    }
    public void addUser(User user)
    {
        if(!isHereThisUser(user.getNAME()))
        {
            System.out.println("sign in user");
            userList.add(user);
            dbHandle.signUser(user);
        }
    }

    public PhotoPost get(String id)
    {   PhotoPost post = dbHandle.getPost(LogInServlet.user.getNAME(),id);
        return post;
    }

}
