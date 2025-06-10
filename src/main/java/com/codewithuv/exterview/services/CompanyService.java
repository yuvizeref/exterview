package com.codewithuv.exterview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewithuv.exterview.models.Company;
import com.codewithuv.exterview.repositories.ApplicationRepo;
import com.codewithuv.exterview.repositories.CompanyRepo;

import jakarta.transaction.Transactional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepo companyRepo;
    @Autowired
    private ApplicationRepo applicationRepo;

    public List<Company> getCompanies() {
        return companyRepo.findAll();
    }

    public Optional<Company> getCompanyById(Long id) {
        return companyRepo.findById(id);
    }

    public Company saveCompany(Company company) {
        return companyRepo.save(company);
    }

    @Transactional
    public void deleteCompany(Long id) {
        applicationRepo.deleteApplicationsByCompanyId(id);
        companyRepo.deleteById(id);
    }

}
