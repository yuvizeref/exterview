package com.codewithuv.exterview.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithuv.exterview.models.ApplicationDetail;

public interface ApplicationDetailRepo extends JpaRepository<ApplicationDetail, Long> {
    List<ApplicationDetail> findByApplicationId(Long applicationId);
}
