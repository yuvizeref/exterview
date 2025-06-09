package com.codewithuv.exterview.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.codewithuv.exterview.models.Application;
import com.codewithuv.exterview.services.ApplicationService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/applications")
public class Applications {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    public Optional<Application> getApplicationById(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }

    @PostMapping
    public ResponseEntity<Application> addApplication(@RequestBody Application Application) {
        Application savedApplication = applicationService.saveApplication(Application);
        return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }
}
