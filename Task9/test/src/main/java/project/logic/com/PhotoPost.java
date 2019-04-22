package project.logic.com;

import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

public class PhotoPost {
    private String id;
    private String author;
    private String photolink;
    private String description;
    private Date createdAt;
    private ArrayList<String> likes;
    private ArrayList<String> hashtags;
    public PhotoPost(String id, String description, String author,String link,Date date, ArrayList<String> likes,ArrayList<String> tags)
    {
      this.id = id;
      this.author = author;
      this.createdAt = date;
      this.hashtags = tags;
      this.likes = likes;
      this.photolink = link;
      this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description.trim();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id.trim();
    }

    public String getPhotolink() {
        return photolink;
    }

    public void setPhotolink(String photolink) {
        this.photolink = photolink.trim();
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author.trim();
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public ArrayList<String> getLikes() {
        return likes;
    }

    public void setLikes(ArrayList<String> likes) {
        this.likes = likes;
    }

    public void addLike(String user) {
        this.likes.add(user);
    }

    public ArrayList<String> getHashtags() {
        return hashtags;
    }

    public void setHashtags(ArrayList<String> hashtags) {
        this.hashtags = hashtags;
    }

    @Override
    public String toString() {
        JSONObject elem = new JSONObject();
        elem.put("id",id);
        elem.put("author",author);
        elem.put("createdAt", createdAt.toString());
        elem.put("photolink",photolink);
        elem.put("description",description);
        elem.put("hashtags",hashtags.toString());
        return elem.toString();
    }
}
