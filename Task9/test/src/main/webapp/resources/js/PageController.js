class PageController
{
   static  user;
   static pass;
   static oldPost;
   static exit_but_handle;
   static load_but_handle;
   static date_from;
   static date_to;
   static add_but_handle;
   static tag_input;
   static search_but_handle;
   static apply_but_handle;
   static cont_func;
   static login_input;
   static pass_input;
   static confirm_but_hanle;
   static usersPosts;
   constructor()
   {  let post;
      PageController.createExitBut();
      PageController.createAddBut();
      PageController.createSearchBut();
      PageController.login_input = document.getElementById("login");
     PageController.pass_input = document.getElementById("pass");
      PageController.createAutorizePage();
   }
   static createExitBut()
   {
      PageController.exit_but_handle = document.getElementById("exit");
      PageController.exit_but_handle.addEventListener('click',PageController.createAutorizePage);
   }
   static createAutorizePage()
   {  
      PageController.closeAllListeners();
      document.getElementById("createpost").style.display = "none"; 
      PageController.closeMainPage();
     document.getElementById("body").style.backgroundImage = "url(https://look.com.ua/pic/201311/1600x1200/look.com.ua-82769.jpg)";  
        document.getElementById("autorize").style.display = "block";
       PageController.confirm_but_handle = document.getElementById("confirm-but");
       PageController.confirm_but_handle.addEventListener('click',PageController.createMainPage);
   }
   static  async createMainPage(event)
   {
     event.preventDefault();
     if(!!PageController.login_input.value.trim() && !!PageController.pass_input.value.trim()) {
         PageController.getClearPage();
         PageController.closeAutorizePage();
         document.getElementById("searchertools").style.display = "block";
         PageController.user = PageController.login_input.value.trim();
         let userOnPage = document.getElementById("username");
         await Sender.sendUserandPass(PageController.user, document.getElementById("pass").value.trim());
             userOnPage.style.display = "block";
             pager.setPageUser(PageController.user);
             PageController.rememberUser();
             PageController.createLoadBut();
             PageController.exit_but_handle.style.display = "block";
             PageController.add_but_handle.style.display = "block";
             document.getElementById("load-but").style.display = "block";
             document.getElementById("main").style.display = "block";
             document.getElementById("add-but").addEventListener('click', PageController.makePost);
               let posts = await PostSender.getPosts(-1,-1);
                   PageController.usersPosts = new PostCollection(posts);
               pager.setPosts(posts);
                 pager.savePosts(PageController.user);
                 PageController.createContFunc();
     }
        else {alert("Wrong data! Try again!");}
   }
   static createLoadBut()
   {
     PageController.load_but_handle = document.getElementById("load-but");
     PageController.load_but_handle.addEventListener('click',PageController.loadMore);
   }
   static createSearchBut()
   {
      PageController.search_but_handle = document.getElementById("searcher");
      PageController.search_but_handle.addEventListener('click',PageController.createSearchPosts);
   }
   static loadMore(event)
   {  event.preventDefault();
      pager.loadMorePosts();
   }
   static createConfrimBut()
   {
      PageController.confirm_but_handle = document.getElementById("confirm-but");
      PageController.confirm_but_handle.addEventListener('click',PageController.createMainPage);
   }
   static createAddBut()
   {
      PageController.add_but_handle = document.getElementById("add-but");
   }
   static closeAutorizePage()
   {
      document.getElementById("autorize").style.display = "none";
      document.getElementById("body").style.background = "white";
   PageController.confirm_but_handle.removeEventListener('click',PageController.createMainPage);
   }
   static rememberUser()
   {
      localStorage.setItem("user",PageController.user);
   }
   static createSearchPosts(event)
   {
      event.preventDefault();
      PageController.load_but_handle.style.display = "none";
      let filterConfig = PageController.getSearcherInfo();
      if(!filterConfig) 
      {
          alert('Uncorrected filters. Try again!');
          PageController.createMainPage(event);
       return;}
      else{
      if(!!filterConfig.dateFrom && !!filterConfig.dateTo)
      {
          if(filterConfig.dateFrom > filterConfig.dateTo)
          {
              let tempDate = filterConfig.dateFrom;
              filterConfig.dateFrom = filterConfig.dateTo;
              filterConfig.dateTo = tempDate;
          }
      }  
      PageController.getClearPage();
     if(!pager.createFilteredPosts(filterConfig))
     {
        alert("No such posts! Try again!");
        PageController.createMainPage(event);
     }
    }
   }

   static getSearcherInfo()
   {
       let searchTab = {
           author: document.getElementById('aut-search').value,
           dateFrom : document.getElementById('datefrom').value, 
           dateTo : document.getElementById('dateto').value,
           hashtag: document.getElementById('tag').value,
       } 
       if(!!!searchTab.author.trim() && !!!searchTab.dateTo.trim() && !!!searchTab.dateFrom.trim() && !!!searchTab.hashtag.trim())
       {
           return false;
       }
       return JSON.parse(JSON.stringify(searchTab),function(key,value)
       {
           if(!!!value) {}
          else if(key == 'dateFrom' || key == 'dateTo'){ return new Date(value);}
           else return value;
       });
   }

   static isOnStorage()
   {
      if(localStorage.getItem(PageController.user + "posts") !== null){return true;}
      return false;
   }

   static closeMainPage()
   {
      PageController.add_but_handle.style.display = "none";
      PageController.exit_but_handle.style.display = "none";
      document.getElementById("main").style.display = "none";
      document.getElementById("username").style.display = "none";
      PageController.getClearPage();
   }
   static createContFunc()
   {
      PageController.cont_func = document.getElementById("main").addEventListener('click',PageController.postEvent);
   }
   static async postEvent(event)
   {
      event.preventDefault();
      let but = event.target;
      if(but.name == 'like')
      {
        await PageController.likeControl(but);
      }
      if(but.name == 'delete')
      {
        await PageController.deletePost(but.id);
      }
      if(but.name == "setting")
      { console.log("Ok");
        PageController.createSettings(but.id);
      }
   }
   static async deletePost(id)
   {  await PostSender.delPost(id);
      PageController.usersPosts.remove(id);
      pager.removePost(id);
      pager.savePosts(PageController.user);
   }
   static async likeControl(likeBut)
   {
      if(likeBut.innerHTML == "❤ Like")
      {
          likeBut.style.background = "red";
          likeBut.style.color = "white";
          likeBut.innerHTML = "❤ Liked";
          await PostSender.setLike(likeBut.id);
      }
      else{
        likeBut.style.background = "white";
        likeBut.style.color = "red";
        likeBut.innerHTML = "❤ Like";
        await  PostSender.setLike(likeBut.id);
      }
     // pager.savePosts(PageController.user);
   }

   static createSettings(id)
   {  
      PageController.load_but_handle.style.display = "none";
      document.getElementById("searchertools").style.display = "none";
     document.getElementById("main").removeEventListener('click',PageController.postEvent);
     document.getElementById("add-but").style.display = "none";
      PageController.getClearPage();
     PageController.createAllListeners();
      document.getElementById("createpost").style.display = "block";
       document.getElementById("savepost").addEventListener('click',PageController.editPost);
      PageController.createTagInput(id);
      PageController.createDescInput();
      PageController.createLink();
   }
   static createTagInput(id)
   {  
      let post = pager.getPost(id);
     PageController.oldPost = post;
     pager.createSingle(PageController.oldPost);
      let str = "";
      post.hashTags.forEach(elem=>{
         str += elem;
         });
         document.getElementById("oldtags").value = str.trim();
   }
   static createDescInput()
   {
     document.getElementById("description").value = PageController.oldPost.description;
   }
   static createLink()
   {
      document.getElementById("link").value = PageController.oldPost.photoLink;
   }
   static createAllListeners()
{  
   document.getElementById("description").addEventListener('keyup',PageController.setDesc);
   document.getElementById("link").addEventListener('keyup',PageController.setLink);
   document.getElementById("oldtags").addEventListener('keyup',PageController.setTags);
   document.getElementById("back").addEventListener('click',PageController.closeCreatePost);
}
static setDesc(event)
{  
   event.preventDefault();
   let desc =  document.getElementById("description").value.trim();
   if(desc.length > 200){alert("too big description"); return;}
   PageController.oldPost.description = desc;
   PageController.getClearPage();
   pager.createSingle(PageController.oldPost);
}
 static setLink(event)
 {
    event.preventDefault();
    PageController.oldPost.photoLink = document.getElementById("link").value.trim();
    PageController.getClearPage();
    pager.createSingle(PageController.oldPost);
 }
 static setTags(event)
 {  let str = document.getElementById('oldtags').value.trim();
    event.preventDefault();
    let tags = str.split("#");
    tags.splice(0,1);
    tags.forEach(function(elem,index)
    {
       tags[index] = '#'+elem;
    });
    PageController.getClearPage();
    PageController.oldPost.hashTags = tags;
    pager.createSingle(PageController.oldPost);
 }

 static closeCreatePost(event)
 {
    event.preventDefault();
    document.getElementById("createpost").style.display = "none";
    document.getElementById("searchertools").style.display = "block";
    document.getElementById("main").addEventListener('click',PageController.postEvent);
    PageController.closeAllListeners();
     document.getElementById("savepost").removeEventListener('click',PageController.editPost);
    PageController.createMainPage(event);
 }
 static closeAllListeners()
 {
   document.getElementById("description").removeEventListener('keyup',PageController.setDesc);
   document.getElementById("link").removeEventListener('keyup',PageController.setLink);
   document.getElementById("oldtags").removeEventListener('keyup',PageController.setTags);
   document.getElementById("back").removeEventListener('click',PageController.closeCreatePost);
 }

 static makePost(event)
 {
    event.preventDefault();
    PageController.getClearPage();
    PageController.load_but_handle.style.display = "none";
      document.getElementById("searchertools").style.display = "none";
     document.getElementById("main").removeEventListener('click',PageController.postEvent);
     document.getElementById("add-but").style.display = "none";
     document.getElementById("createpost").style.display = "block";
    let saveBut =  document.getElementById("savepost");
    PageController.createAllListeners();
     saveBut.addEventListener("click",PageController.pushPost)
    PageController.clearInputForAddPost();
     PageController.initOldPost();
 } 

 /*static redirectSaveBut(but)
 {
    but.removeEventListener('click',PageController.editPost);
    but.addEventListener('click',PageController.pushPost);
 }*/

 static deleteSaveListener(but)
 {
    but.removeEventListener('click',PageController.pushPost);
 }

 static clearInputForAddPost()
 {
    document.getElementById("link").value = "";
    document.getElementById("description").value = "";
    document.getElementById("oldtags").value = "";
 }

 static async  pushPost(event)
 {
     event.preventDefault();
     pager.addPost(PageController.oldPost);
    await PostSender.addPost(PageController.oldPost);
         pager.savePosts(PageController.user);
         PageController.closeMakePostPage(event);
 }

 static closeMakePostPage(event)
 {
    event.preventDefault();
    PageController.deleteSaveListener(document.getElementById("savepost"));
   PageController.closeCreatePost(event);
 }

static initOldPost()
{
   PageController.oldPost = {
      id: new Date().getMilliseconds().toString(),
      author: PageController.user,
      description: "",
      createdAt: new Date(),
      photoLink: "",
      hashTags: [],
      likes: [],
   };
}
 static async editPost(event)
 {
    event.preventDefault();
    pager.editPost(PageController.oldPost);
    await PostSender.addPost(PageController.oldPost);
    pager.savePosts(PageController.user);
    PageController.closeCreatePost(event);
 }

static createSinglePost()
{
   pager.createSingle(PageController.oldPost);
}
   static getClearPage()
   {
      pager.clearPage();
   }
}
new PageController();

// Tests

/* sort only by one hashtag
 user : Petrov 
 */
