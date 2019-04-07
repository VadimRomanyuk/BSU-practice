class View
{  constructor(user)
    {
        this._user = user;
        this._setUser(user);
    }
    _setUser(user)
    {
        if(!!user)
        {
            let list = document.getElementById("username");
            list.innerHTML = user;
            this._createAddButton();
        }
    }
    _createAddButton()
    {
        let buttonAdd = document.getElementById("add-but");
        buttonAdd.style.display = 'block';
    }
    _createPost (post)
    {   let likeClass = "like-button";
    let likeValue = "&#10084 Like";
        let newPost = `<h3>${post.author}</h3>
        <h3 class= "date"> &nbsp &nbsp  ${post.createdAt.getDate()}.${post.createdAt.getMonth()+1}.
        ${post.createdAt.getFullYear()}</h3>
        <img src=${post.photoLink}><br>`;
        if(post.author === this._user)
        {
         newPost = newPost +"<button class= delch-button  name = setting id = " +post.id + " type= submit>&#9998 setting</button>"+
            "<button class=delch-button name = delete id = " + post.id +  " type=submit>&#10008 Delete</button>";
        }
        if(pager.isUserLikes(post.id,this._user))
        {   console.log("new liked");
            likeClass = "liked-button";
            likeValue = "&#10084 Liked";
        }
        else{console.log("no like");}
        newPost = newPost +"<button class=" + likeClass+ " name = like id = " + post.id +
         " type=submit>" + likeValue + "</button>" + "<p>"+post.description+"<br>";
        for(let i = 0 ; i < post.hashTags.length; i++)
        {
            newPost = newPost + post.hashTags[i];
        }
        newPost = newPost + "</p>";
      return newPost;
    }
    
    getElemById(id) {return document.getElementById(id);}
    createHTMLElem(post)
    {
        let li = document.createElement('li');
        li.id = "postNumber"+post.id;
        li.innerHTML = this._createPost(post);
        return li;
    }

    showPost(post)
    {     let list = this.getElemById("lenta");
          let li = this.createHTMLElem(post);
list.appendChild(li);
    }
    removePost(post)
    {
        let list = document.getElementById("lenta");
        let elem = document.getElementById("postNumber" + post.id);
        list.removeChild(elem);
    }
    editPost(post)
    {
        let elem = document.getElementById("postNumber" + post.id);
         elem.innerHTML = this._createPost(post);
    }
    insertPost(newPost,nextId)
    {   
        let list = this.getElemById("lenta");
        let li = this.createHTMLElem(newPost);
        list.insertBefore(li,list.children[nextId]);
            }
           static clear()
            {
                document.getElementById("lenta").innerHTML = ' ';
            }     
}
