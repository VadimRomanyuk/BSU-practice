package project.logic.com;

public class User {
    private final  String NAME;
    private final  String PASS;
    private final String ID;
    public User(String login, String id,String pass)
    {
        this.NAME = login;
        this.ID = id;
        this.PASS = pass;
    }

    public User(User user)
    {
        this.NAME = user.getNAME();
        this.PASS = user.getPASS();
        this.ID = user.getID();
    }

    public String getNAME() {
        return NAME;
    }

    public String getPASS() {
        return PASS;
    }

    public String getID() {
        return ID;
    }
}
