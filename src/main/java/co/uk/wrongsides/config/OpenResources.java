package co.uk.wrongsides.config;

import java.util.ArrayList;
import java.util.List;

public enum OpenResources {

    authController("/api/authenticate/user"),
    bowerComponents("/bower_components/**"),
    weddingPackage("/wedding/**"),
    indexPage("/index.html"),
    loginComponent("/login.html"),
    homeComponent("/home.html");

    private final String path;

    OpenResources(String s) { path = s; }

    public static String[] getPaths() {
        List<String> paths = new ArrayList<>();
        for (OpenResources resource : OpenResources.values()) {
            paths.add(resource.path);
        }
        return paths.toArray(new String[paths.size()]);
    }
}
