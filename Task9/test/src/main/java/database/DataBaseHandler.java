package project.database;

import project.logic.com.PhotoPost;
import project.logic.com.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DataBaseHandler implements IPostService {
    private Connection dbConnect;

    public DataBaseHandler() {this.dbConnect = getDbConnect();}

    public  Connection getDbConnect()
    {
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            dbConnect = DriverManager.getConnection(DBConsts.URL,DBConsts.USERNAME,DBConsts.PASSWORD);
            System.out.println("Connection to Store DB succesfull!");
            return dbConnect;
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        return null;
    }

    public void signUser(User user)
    {
        String sql = "INSERT INTO user VALUES(?,?)";
       try( PreparedStatement prSt = dbConnect.prepareStatement(sql))
       {
           prSt.setInt(1,getId(user.getPASS()));
           prSt.setString(2,user.getNAME());
           prSt.executeUpdate();
       }
       catch (Exception e)
       {
           System.out.println("Can't sign user");
       }
    }

    private int getId(String id)
    {
        if(id.toLowerCase().trim().matches(".*[a-z].*"))
        {
            Random rand = new Random();
            return rand.nextInt();
        }
        return Integer.parseInt(id);
    }

    public List<User> getAllUsers()
    {   List<User> users = new ArrayList<>();
        String sql = "SELECT* from user";
        try( PreparedStatement prSt = dbConnect.prepareStatement(sql))
        {
            ResultSet res = prSt.executeQuery();
            while(res.next())
            {
                users.add(new User(res.getString(DBConsts.USER_NAME),String.valueOf(res.getInt(DBConsts.USER_ID))));
            }

        } catch (Exception e)
        {
            System.out.println("problems with users");
        }
        return users;
    }

    @Override
    public void savePost(String userId, PhotoPost post) {
        String sql = "INSERT INTO photo_post VALUES(?,?,?,?,?)";
        try(PreparedStatement prSt = dbConnect.prepareStatement(sql))
        {
           prSt.setInt(1,Integer.parseInt(post.getId()));
           prSt.setString(2,post.getDescription());
           prSt.setDate(3,new Date(post.getCreatedAt().getTime()));
           prSt.setString(4,post.getPhotolink());
           prSt.setInt(5,getId(userId));
           prSt.executeUpdate();
        }
        catch (Exception e)
        {
            System.out.println("Can't save this post");
        }
    }

    @Override
    public boolean deletePost(String postId) {
        String sql = "DELETE FROM photo_post WHERE post_id = " + postId;
        try(PreparedStatement prSt = dbConnect.prepareStatement(sql))
        {
            prSt.executeUpdate();
            return true;
        }
        catch (Exception e)
        {
            System.out.println("Can't delete this post");
        }
        return false;
    }

    @Override
    public PhotoPost getPost(String author , String id) {
        String sql = "SELECT FROM photo_post WHERE post_id = " + id;
        try(PreparedStatement prSt = dbConnect.prepareStatement(sql))
        {
            ResultSet res = prSt.executeQuery();
            String post_id = String.valueOf(res.getInt(DBConsts.PHOTO_POST_POST_ID));
            String descr = res.getString(DBConsts.PHOTO_POST_DESCRIPTION);
            String link = res.getString(DBConsts.PHOTO_POST_PHOTOLINK);
            Date createdAt = res.getDate(DBConsts.PHOTO_POST_CREATEDAT);
            PhotoPost post = new PhotoPost(post_id,descr,author,link,createdAt,new ArrayList<String>(),new ArrayList<String>());
            return post;
        }
        catch (Exception e)
        {
            System.out.println("No such post");
        }
        return null;
    }

    @Override
    public List<PhotoPost> getAllPosts() {

        List<PhotoPost> posts = new ArrayList<>();
        String sql = "SELECT* FROM photo_post";
        List<User> users = getAllUsers();
        try(PreparedStatement prSt = dbConnect.prepareStatement(sql))
        {
            ResultSet res = prSt.executeQuery();
            while(res.next())
            {
                String author = null;
                for(User user : users)
                {
                    if(user.getPASS().equals(String.valueOf(res.getInt(DBConsts.USER_ID))))
                    {
                        author = user.getNAME();
                        break;
                    }
                }

                if(author != null)
                {
                    String post_id = String.valueOf(res.getInt(DBConsts.PHOTO_POST_POST_ID));
                    String descr = res.getString(DBConsts.PHOTO_POST_DESCRIPTION);
                    String link = res.getString(DBConsts.PHOTO_POST_PHOTOLINK);
                    java.util.Date createdAt = res.getDate(DBConsts.PHOTO_POST_CREATEDAT);
                    PhotoPost post = new PhotoPost(post_id,descr,author,link,createdAt,new ArrayList<String>(),new ArrayList<String>());
                    posts.add(post);
                }

            }
            return posts;
        }
        catch (Exception e)
        {
            System.out.println("Error with posts");
        }
        return null;
    }

    public void editPost(PhotoPost post)
    {
        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE photo_post SET ");
        sql.append(DBConsts.PHOTO_POST_DESCRIPTION + " = ? , ");
        sql.append(DBConsts.PHOTO_POST_PHOTOLINK + " = ? ");
        sql.append("WHERE post_id = " + post.getId());
        try(PreparedStatement prSt = dbConnect.prepareStatement(sql.toString()))
        {
            prSt.setString(1,post.getDescription());
            prSt.setString(2,post.getPhotolink());
            prSt.executeUpdate();
        }
        catch (Exception e)
        {
            System.out.println("Wrong edit");
        }
    }

}
