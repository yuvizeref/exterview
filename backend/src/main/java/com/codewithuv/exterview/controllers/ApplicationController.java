package com.codewithuv.exterview.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewithuv.exterview.models.Application;
import com.codewithuv.exterview.services.ApplicationService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RequestMapping("/api/applications")
@RestController
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public List<Application> getApplications() {
        return applicationService.getApplications();
    }

    @GetMapping("/{id}")
    public Optional<Application> getMethodName(@PathVariable Long id) {
        return applicationService.getApplication(id);
    }

    @GetMapping("/company/{companyId}")
    public List<Application> getApplications(@PathVariable Long companyId) {
        return applicationService.getApplications(companyId);
    }

    @PostMapping
    public Application saveApplication(@RequestBody Application application) {
        return applicationService.saveApplication(application);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }

    @DeleteMapping("/company/{companyId}")
    public void deleteApplications(@PathVariable Long companyId) {
        applicationService.deleteAllApplications(companyId);
    }

    @PutMapping
    public Application putMethodName(@RequestBody Application application) {
        return applicationService.saveApplication(application);
    }
}
