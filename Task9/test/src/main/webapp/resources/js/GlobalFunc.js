let pager = (function(){
    return {
        setPageUser: function (user)
        {   
            pageView = new View(user);
        },
        setPosts: function (posts)
        {
            countPostsForLoad = 0;
            pagePosts = new PostCollection(posts);
            this.createPage();
        },
        addPost: function(post)
        {
              if(pagePosts.add(post))
              {  let postpos = pagePosts.getPostPosition(post);
                console.log(postpos);
                 if(postpos < pagePosts.getPostsCount()-1)
                 {   
                     pageView.insertPost(post,postpos);
                 }
                 else{
                     pageView.showPost(post);
                 }
                 return true;
              } 
            return false;
        },
        createPage: function()
        {  View.clear();
            if(pagePosts.getArrLength() > 0) {
            pagePosts.getPage(0, 10).forEach(element => {
                pageView.showPost(element);
            });
        }
        },
     removePost: function(id)
     {   let post;
         if(post = pagePosts.get(id))
         {
             pageView.removePost(post);
             pagePosts.remove(id);
             return true;
         }
         return false;
     },
     editPost: function (post)
     {
        if(pagePosts.edit(post.id,post))
        {
            pageView.editPost(post);
            return true;
        }
        return false;
     },
     getALLPosts()
     {
        return  pagePosts.getArrPosts();
     },
     loadMorePosts()
     {
          countPostsForLoad += 10;
          pagePosts.getPage(countPostsForLoad,10).forEach(element=>{
              pageView.showPost(element);
          });
     },
     savePosts(user)
     {
      pagePosts.save(user);
     },
     async restorePosts(user)
     {
     return  await  Sender.getPosts(0,10);
     },
     clearPage()
     {
         View.clear();
     },
     createFilteredPosts: function(filterConfig)
     { let posts =  pagePosts.getPage(0,10,filterConfig);
        if(posts.length > 0)
        {
          posts.forEach(element=>{
            pageView.showPost(element);
          }) 
          return true; 
        }
        return false;
     },
     pushLiker(id,liker)
     {
        pagePosts.addPhotoLiker(id,liker);
     },
     deleteLiker(id,liker)
     {
        pagePosts.deletePhotoLiker(id,liker);
     },
     isUserLikes(id,user)
     {
      return pagePosts.isUserLikesPost(id,user);
     },
     getPost(id)
     {
         return pagePosts.get(id);
     },
     createSingle(post)
     {
         pageView.showPost(post);
     }
    }
}());
