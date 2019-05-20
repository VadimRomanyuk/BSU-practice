class Sender
{
    static async sendUserandPass(user, pass)
    {
        let info = new FormData();
        info.append("login",user);
        info.append("pass",pass);
       let res = await fetch("/logpage",{method:"POST",body:info});
    }
}
