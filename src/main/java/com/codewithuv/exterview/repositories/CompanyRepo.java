package com.codewithuv.exterview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithuv.exterview.models.Company;

public interface CompanyRepo extends JpaRepository<Company, Long> {
}
