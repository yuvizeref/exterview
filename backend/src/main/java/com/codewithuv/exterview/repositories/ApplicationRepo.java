package com.codewithuv.exterview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithuv.exterview.models.Application;
import java.util.List;

public interface ApplicationRepo extends JpaRepository<Application, Long> {
    List<Application> findByCompanyId(Long companyId);

    void deleteApplicationsByCompanyId(Long companyId);
}
