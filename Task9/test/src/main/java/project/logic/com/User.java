package project.logic.com;

public class User {
    private final  String NAME;
    private final  String PASS;
    public User(String login, String pass)
    {
        this.NAME = login;
        this.PASS = pass;
    }

    public String getNAME() {
        return NAME;
    }

    public String getPASS() {
        return PASS;
    }
}
