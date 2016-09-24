package co.uk.wrongsides.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/authenticate")
public class AuthenticateController {

    @RequestMapping(method = RequestMethod.GET, path="/user", produces = "application/json")
    public Principal user(Principal user) {
        return user;
    }
}
