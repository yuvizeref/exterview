package com.codewithuv.exterview.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewithuv.exterview.models.Company;
import com.codewithuv.exterview.services.CompanyService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RequestMapping("api/companies")
@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public List<Company> getCompanies() {
        return companyService.getCompanies();
    }

    @GetMapping("/{id}")
    public Optional<Company> getCompanyById(@PathVariable Long id) {
        return companyService.getCompanyById(id);
    }

    @PostMapping
    public Company addCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }

    @DeleteMapping("/{id}")
    public void deleteCompanyById(@PathVariable Long id) {
        companyService.deleteCompany(id);
    }

    @PutMapping
    public Company editCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }

}
