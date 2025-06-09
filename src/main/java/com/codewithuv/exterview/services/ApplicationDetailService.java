package com.codewithuv.exterview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewithuv.exterview.models.ApplicationDetail;
import com.codewithuv.exterview.repository.ApplicationDetailRepo;

@Service
public class ApplicationDetailService {
    @Autowired
    private ApplicationDetailRepo applicationDetailRepo;

    public List<ApplicationDetail> getApplicationDetails(Long applicationId) {
        return applicationDetailRepo.findByApplicationId(applicationId);
    }

    public Optional<ApplicationDetail> getApplicationDetail(Long id) {
        return applicationDetailRepo.findById(id);
    }

    public ApplicationDetail saveApplicationDetail(ApplicationDetail applicationDetail) {
        return applicationDetailRepo.save(applicationDetail);
    }

    public void deleteApplicationDetail(Long id) {
        applicationDetailRepo.deleteById(id);
    }
}
