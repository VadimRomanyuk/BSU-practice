package project.logic.com;

public class User {
    private final  String NAME;
    private final  String PASS;
    public User(String login, String pass)
    {
        this.NAME = login;
        this.PASS = pass;
    }

    public User(User user)
    {
        this.NAME = user.getNAME();
        this.PASS = user.getPASS();
    }

    public String getNAME() {
        return NAME;
    }

    public String getPASS() {
        return PASS;
    }
}
