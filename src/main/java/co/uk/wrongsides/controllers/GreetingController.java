package co.uk.wrongsides.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/greeting")
public class GreetingController {

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public Map<String,Object> getGreeting() {
        Map<String,Object> greeting = new HashMap<String,Object>();
        greeting.put("id", UUID.randomUUID().toString());
        greeting.put("content", "Hello World");
        return greeting;
    }
}