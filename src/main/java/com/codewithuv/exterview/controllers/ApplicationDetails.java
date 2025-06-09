package com.codewithuv.exterview.controllers;

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
import org.springframework.web.bind.annotation.RestController;

import com.codewithuv.exterview.models.ApplicationDetail;
import com.codewithuv.exterview.services.ApplicationDetailService;

@RestController
@RequestMapping("/api/application")
public class ApplicationDetails {

    @Autowired
    private ApplicationDetailService applicationDetailService;

    @GetMapping("/details/{id}")
    public List<ApplicationDetail> getApplicationDetails(@PathVariable Long id) {
        return applicationDetailService.getApplicationDetails(id);
    }

    @GetMapping("/detail/{id}")
    public Optional<ApplicationDetail> getApplicationDetail(@PathVariable Long id) {
        return applicationDetailService.getApplicationDetail(id);
    }

    @PostMapping("/detail")
    public ResponseEntity<ApplicationDetail> addApplication(@RequestBody ApplicationDetail applicationDetail) {
        ApplicationDetail savedApplicationDetial = applicationDetailService.saveApplicationDetail(applicationDetail);
        return new ResponseEntity<>(savedApplicationDetial, HttpStatus.CREATED);
    }

    @DeleteMapping("/detail/{id}")
    public void deleteApplicationDetial(@PathVariable Long id) {
        applicationDetailService.deleteApplicationDetail(id);
    }
}
