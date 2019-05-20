class PostSender{
    static async getPosts(skip,top) {
        let res = await fetch("/photo-posts?skip=" + skip + "&top=" + top,{method:"GET"});
        try{
            res = await res.text();
            res = JSON.parse(res);
            for(let i = 0 ; i < res.length;i++)
            {
                res[i].createdAt = new Date(res[i].createdAt);
            }
        }
        catch (e) {
            res = null;
        }
        return res;
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
