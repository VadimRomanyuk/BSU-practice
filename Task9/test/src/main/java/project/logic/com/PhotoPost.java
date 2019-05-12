package project.logic.com;

import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

public class PhotoPost {
    private String id;
    private String author;
    private String photoLink;
    private String description;
    private Date createdAt;
    private ArrayList<String> likes;
    private ArrayList<String> hashTags;
    public PhotoPost(String id, String description, String author,String link,Date date, ArrayList<String> likes,ArrayList<String> tags)
    {
      this.id = id;
      this.author = author;
      this.createdAt = date;
      this.hashTags = tags;
      this.likes = likes;
      this.photoLink = link;
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
        return photoLink;
    }

    public void setPhotolink(String photolink) {
        this.photoLink = photolink.trim();
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
        return hashTags;
    }

    public void setHashtags(ArrayList<String> hashtags) {
        this.hashTags = hashtags;
    }

    public void putLiker(String user) {this.hashTags.add(user.trim().toLowerCase());}

    public void delLiker(String user){this.hashTags.remove(user.trim().toLowerCase());}

    @Override
    public String toString() {
        JSONObject elem = new JSONObject();
        elem.put("id",id);
        elem.put("author",author);
        elem.put("createdAt", createdAt.toString());
        elem.put("photolink",photoLink);
        elem.put("description",description);
        elem.put("hashtags",hashTags.toString());
        return elem.toString();
    }
}
