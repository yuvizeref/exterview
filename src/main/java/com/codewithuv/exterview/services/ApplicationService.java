package com.codewithuv.exterview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewithuv.exterview.models.Application;
import com.codewithuv.exterview.repository.ApplicationRepo;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepo applicationRepo;

    public List<Application> getAllApplications() {
        return applicationRepo.findAll();
    }

    public Optional<Application> getApplicationById(Long id) {
        return applicationRepo.findById(id);
    }

    public Application saveApplication(Application application) {
        return applicationRepo.save(application);
    }

    public void deleteApplication(Long id) {
        applicationRepo.deleteById(id);
    }
}
