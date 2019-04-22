let pager = (function(){
    return {
        setPageUser: function (user)
        {   
            pageView = new View(user);
        },
        setPosts: function (posts)
        {  countPostsForLoad = 0;
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
        { 
         pagePosts.getPage(0,10).forEach(element => {
               pageView.showPost(element);
           });
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
     restorePosts(user)
     {
     return  PostCollection.restore(user);
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
        /*pagePosts.getPage(0,10,filterConfig).forEach(element => {
            pageView.showPost(element);
        });*/
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
     createSingle(post) // from this
     {
         pageView.showPost(post);
     }
    }
}());
//                  Tests 

//pager.setPageUser("Petrov");
/*pager.setPosts( [
    {id: '1',

    description: 'Great Day',

    createdAt: new Date('2005-02-20T23:00:00'),

    author: 'Ivanov',

    photoLink: 'img/Picture.jpg',
    
    likes : ["Petrov","Sidorov"],

    hashTags : ["#sunny"]

   },

   {id: '2',

    description: 'Манчестер Юнайтед в 1/4 финала ЛЧ',

    createdAt: new Date('2016-01-23T23:15:00'),

    author: 'Petrov',

    photoLink: "img/Picture.jpg",

    likes : ["Grealish","Sidorov"],

    hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]

   },

   {id: '4',

    description: 'Great Player',

    createdAt: new Date('2001-03-12T11:11:00'),

    author: 'Sidorov',

    photoLink: 'img/Picture.jpg',

    likes : ["Petrov","Grealish","Sidorov","Snow"],

    hashTags : ["#color"]

   }]);*/
//pager.removePost(1);
//pager.addPost({id: "13",author:"Programmer",description:"Great Day",createdAt:new Date('2005-02-03T23:00:00'),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"],likes:["Petrov"]});
//pager.editPost({id: "1",author:"Ivanov",description:"RONNEY GOAL",createdAt:new Date('2005-02-20T23:00:00'),photoLink:"img/Ronney.jpg",hashTags:["#sunny"],likes:["Petrov","Sidorov"]});
//pager.addPost({id: "5",author:"Ivanov",description:"ADD Great Day",createdAt:new Date('2006-02-14'),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"],likes:["Petrov"]});
