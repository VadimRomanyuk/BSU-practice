package project.database;

import project.logic.com.PhotoPost;
import project.logic.com.PostCollection;
import project.logic.com.User;

import java.util.List;

public interface IPostService {
    void savePost(String userId,PhotoPost post);
    boolean deletePost(String postId);
    List<PhotoPost> getAllPosts();
    PhotoPost getPost(String username, String id);
    void editPost(PhotoPost post);
}
