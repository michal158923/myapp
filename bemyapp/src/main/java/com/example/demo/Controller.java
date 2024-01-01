package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    private final Service service;

    public Controller (Service service) {
        this.service = service;
    }

    @GetMapping("/test")
    public String testMethod() {
        return service.getStr();
    }


}
