package co.uk.wrongsides.controllers;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class GreetingControllerTest {

    @Test
    public void getGreeting_returns_Hello_World(){
        GreetingController greet = new GreetingController();
        assertThat(greet.getGreeting()).containsValues("Hello World");
    }
}