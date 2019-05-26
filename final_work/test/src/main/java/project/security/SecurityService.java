package project.security;

import org.apache.commons.codec.digest.DigestUtils;

public class SecurityService  {
    public static boolean isHashEqual(String password, String passwordHash) {
        return password.equals(passwordHash);
    }

    public static String getHash(String password)
    {
        return DigestUtils.md5(password).toString();
    }

}
