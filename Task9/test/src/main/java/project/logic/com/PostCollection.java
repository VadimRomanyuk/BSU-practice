package project.logic.com;

import com.google.gson.Gson;

import java.text.SimpleDateFormat;
import java.util.*;

public class PostCollection {

private List<PhotoPost> postArray;

public PostCollection(List<PhotoPost> array)
{

    this.postArray = new ArrayList<>();
    for(PhotoPost post : array) {
        add(post);
    }
    Collections.sort(this.postArray,sortByDate());
}

public List<PhotoPost> getArray()
{
    return this.postArray;
}

public PostCollection()
{
    this.postArray = new ArrayList<>();
}

public PhotoPost get(String id)
{
    List<PhotoPost> out = new ArrayList<>();
    for(PhotoPost post : this.postArray)
    {
        if(post.getId().equals(id))
        {
            out.add(post);
        }
    }
    if(out.size() > 0) {return out.get(0);}
   return null;
}

public void clear()
{
    this.postArray = new ArrayList<>();
}

public boolean remove(String id)
{
   PhotoPost postToDelete = get(id);
   if(postToDelete != null)
   {
       this.postArray.remove(postToDelete);
       System.out.println("Delete this post");
       return true;
   }
    System.out.println("No post in collection");
   return false;
}

private boolean checkForString(String str)
{
    if((str instanceof String) && str.trim().length()>0) {return true;}
    return false;
}

private boolean checkId(String id)
{
    if((id instanceof String) && id.trim().matches("[0-9]+")) {return true;}
    return false;
}

private boolean checkDescription(String desc)
{

    if(checkForString(desc) && (desc.trim().length() < 200))
    {
        return true;
    }
    return false;
}

private boolean checkDate(Date createAt)
{
    if(createAt != null) {return true;}
    return false;
}

public boolean add(PhotoPost post)
{
    if(checkId(post.getId()) && checkForString(post.getAuthor()) && validate(post))
    {
        if(get(post.getId()) == null)
        {
            this.postArray.add(post);
            System.out.println("New post is coming");
            Collections.sort(this.postArray,sortByDate());
            return true;
        }
         edit(post);
    }
    return false;
}

public boolean edit(PhotoPost post)
{   if(get(post.getId()) != null && checkForUpdate(post)) {
    ListIterator<PhotoPost> iter = this.postArray.listIterator();
    while (iter.hasNext()) {
        PhotoPost oldPost = iter.next();
        if (oldPost.getId().equals(post.getId())) {
            if (checkDescription(post.getDescription())) {
                oldPost.setDescription(post.getDescription());
                System.out.println("update description");
            }
            if (checkForString(post.getPhotolink())) {
                oldPost.setPhotolink(post.getPhotolink());
                System.out.println("update link");
            }
            if (checkHashTags(post.getHashtags())) {
                oldPost.setHashtags(post.getHashtags());
                System.out.println("update tags");
            }
            iter.set(oldPost);
            return true;
        }
    }
}
    return false;
}

public boolean validate(PhotoPost post)
{
  if(!checkForString(post.getPhotolink()))
  {
      return false;
  }
  if(!checkDate(post.getCreatedAt()))
  {
      return false;
  }
  if(!checkDescription(post.getDescription()))
  {
      return false;
  }
    System.out.println("Good post");
  return true;
}

public boolean checkForUpdate(PhotoPost post)
{
    if(checkForString(post.getPhotolink())) {return true;}
    if(checkDescription(post.getDescription())){return true;}
    if(checkHashTags(post.getHashtags())){return true;}
    return false;
}

public boolean checkHashTags(ArrayList<String> tags)
{
    if(tags.size() > 0) {return true;}
    return false;
}

private void isBeforeDate(List<PhotoPost> posts, Date dateTo)
{
    ListIterator<PhotoPost> iter = posts.listIterator();
    while(iter.hasNext())
    {
        PhotoPost elem = iter.next();
        if(elem.getCreatedAt().compareTo(dateTo) >= 0)
        {
            iter.remove();
        }
    }
}

private void isAfterDate(List<PhotoPost> posts, Date dateFrom)
{
    ListIterator<PhotoPost> iter = posts.listIterator();
    while(iter.hasNext())
    {
        PhotoPost elem = iter.next();
        if(elem.getCreatedAt().compareTo(dateFrom) <= 0)
        {
            iter.remove();
        }
    }
}

private void isThatAuthor(List<PhotoPost> posts, String name)
{
    ListIterator<PhotoPost> iter = posts.listIterator();
    while(iter.hasNext())
    {
        PhotoPost elem = iter.next();
        if(!elem.getAuthor().toLowerCase().equals(name.toLowerCase()))
        {
            iter.remove();
        }
    }
}

private void isContainTag(List<PhotoPost> posts, String tag)
{
    ListIterator<PhotoPost> iter = posts.listIterator();
    while(iter.hasNext())
    {
        PhotoPost elem = iter.next();
        if(elem.getHashtags().indexOf(tag.toLowerCase()) == -1)
        {
            iter.remove();
        }
    }
}

private Comparator<PhotoPost> sortByDate()
{
    return  new Comparator<PhotoPost>() {
        @Override
        public int compare(PhotoPost o1, PhotoPost o2) {
            return o2.getCreatedAt().compareTo(o1.getCreatedAt());
        }
    };
}

public List<PhotoPost> getFilteredPosts(Map<String,String> filterConfig)
{
   List<PhotoPost> filteredPosts = this.postArray;
   String key;
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
   for(Map.Entry<String,String> pair : filterConfig.entrySet())
   {
       key = pair.getKey().toLowerCase();
       if(key.equals("datefrom"))
       {   try {
           isAfterDate(filteredPosts, dateFormat.parse(pair.getValue()));
       } catch (Exception e)
       {
           return  new ArrayList<>();
       }
       }

       if(key.equals("dateto"))
       {  try {
           isBeforeDate(filteredPosts, dateFormat.parse(pair.getValue()));
       } catch (Exception e)
       {
           return new ArrayList<>();
       }
       }

       if(key.equals("author"))
       {
           isThatAuthor(filteredPosts,pair.getValue());
       }

       if(key.equals("hashtag"))
       {
           isContainTag(filteredPosts,pair.getValue());
       }
   }
    Collections.sort(filteredPosts,sortByDate());
   return filteredPosts;
}

public List<PhotoPost> getPage(int skip, int top, Map<String,String> filterConfig)
{
    int head, tail;
    List<PhotoPost> out = new ArrayList<>();
    if(filterConfig != null)
    {
        out = getFilteredPosts(filterConfig);
    }
    else{
        out = this.postArray;
    }
    if(out.size() == 0)
    {
        head = 0;
        tail = 0;
    }
    else
    {
        head = skip > out.size() ? out.size() : skip;
        tail = skip + top > out.size() ? out.size() : skip + top;
    }
    Collections.sort(out,sortByDate());
    return out.subList(head,tail);
}

public boolean setLike(String id, String user)
{
    PhotoPost elem = get(id);
    if(elem == null)
    {
        return false;
    }
    int index = elem.getLikes().indexOf(user.toLowerCase());
    if(index == -1)
    {
        elem.addLike(user.toLowerCase());
    }
    else{
        elem.getLikes().remove(user.toLowerCase());
    }
    remove(id);
    add(elem);
    return true;
}

public int getPostIndex(String id)
{
    for(int i = 0 ; i < postArray.size();i++)
    {
        if(postArray.get(i).getId().equals(id)){return i;}
    }
    return -1;
}

public ArrayList<PhotoPost> addAll(ArrayList<PhotoPost> posts)
{
    ArrayList<PhotoPost> invalidPosts = new ArrayList<>();
    for(PhotoPost elem : posts)
    {
        if(validate(elem))
        {
            this.postArray.add(elem);
        }
        else{
            invalidPosts.add(elem);
        }
    }
    if(invalidPosts.size() == 0) {return null;}
    return invalidPosts;
}

 public static String toJsonString(List<PhotoPost> info)
 {   if(info.size()>0) {
     Gson gson = new Gson();
     StringBuilder sb = new StringBuilder();
     sb.append("[");
     for (int i = 0; i < info.size(); i++) {
         sb.append(gson.toJson(info.get(i))).append(",");
     }
     sb.append("]");
     return sb.toString().replace(",]", "]");
 }
 return "";
 }
}
