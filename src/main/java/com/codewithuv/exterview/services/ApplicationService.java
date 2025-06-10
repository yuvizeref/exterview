package com.codewithuv.exterview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewithuv.exterview.models.Application;
import com.codewithuv.exterview.repositories.ApplicationRepo;

import jakarta.transaction.Transactional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepo applicationRepo;

    public List<Application> getApplications() {
        return applicationRepo.findAll();
    }

    public List<Application> getApplications(Long companyId) {
        return applicationRepo.findByCompanyId(companyId);
    }

    public Optional<Application> getApplication(Long id) {
        return applicationRepo.findById(id);
    }

    public Application saveApplication(Application application) {
        return applicationRepo.save(application);
    }

    public void deleteApplication(Long id) {
        applicationRepo.deleteById(id);
    }

    @Transactional
    public void deleteAllApplications(Long companyId) {
        applicationRepo.deleteApplicationsByCompanyId(companyId);
    }
}
