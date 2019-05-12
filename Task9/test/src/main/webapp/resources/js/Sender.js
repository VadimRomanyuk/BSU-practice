class Sender
{
    static async sendUserandPass(user, pass)
    {
        let xhr = new XMLHttpRequest();
        xhr.open("POST","/logpage");
        let info = new FormData();
        info.append("login",user);
        info.append("pass",pass);
        xhr.send(info);
    }
    static  getPosts(skip,top) {
       return new Promise(function(resolve,reject)
       {
           let xhr = new XMLHttpRequest();
           xhr.open("GET","/photo-posts?skip=" + skip + "&top=" + top);
           xhr.onload = function()
           {
               if(this.status == 200)
               {
                   resolve(this.responseText);
               }
               else {
                   let error  = new Error(this.status);
                   reject(error);
               }

           }
         xhr.send();
       });

    }


    static  async addPost(post)
    {
        let info = new FormData();
        info.append("id", post.id);
        info.append("description", post.description);
        info.append("author", post.author);
        info.append("photolink", post.photoLink);
        info.append("tags", post.hashTags.toString());
        let res = await fetch("/photo-post", {method: "POST", body: info});
    }

   static async setLike(postId)
   {
       let data = new FormData();
       data.append("id",postId);
       let res = await fetch("/like",{method:"POST",body:data});
   }

   static async delPost(postId)
   {
       let data = new FormData();
       data.append("id",postId);
       let res = await fetch("/photo-post",{method:"DELETE",body:data});
   }


}
