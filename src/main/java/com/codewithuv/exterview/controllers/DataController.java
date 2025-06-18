package com.codewithuv.exterview.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewithuv.exterview.models.Application;
import com.codewithuv.exterview.models.Company;
import com.codewithuv.exterview.services.ApplicationService;
import com.codewithuv.exterview.services.CompanyService;

import java.util.Date;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RequestMapping("/api/filldata")
@RestController
public class DataController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private ApplicationService applicationService;

    private String[] companies = { "Google", "Microsoft", "Oracle", "OpenText", "ServiceNow", "Salesforce", "Amazon",
            "Meta", "Alphabet", "Apple", "Nvdia", "Qualcomm", "JP Morgan", "Optum", "TCS" };

    private String[] roles = {
            "Software Engineer",
            "Software Engineer II",
            "Software Engineer 2",
            "SWE I",
            "SDE 2",
            "SDE 3",
            "Software Development Engineer",
            "Senior Software Engineer",
            "Senior Software developer"
    };

    private String[] verdicts = {
            "Selected",
            "In Review",
            "Inerview Scheduled",
            "In Consideration",
            "Out of consideration",
            "Processing",
            "Archived"
    };

    public static String getRandomString(String[] roles) {
        if (roles == null || roles.length == 0) {
            return null;
        }
        Random random = new Random();
        int randomIndex = random.nextInt(roles.length);
        return roles[randomIndex];
    }

    public static Long getRandomNumber(long min, long max) {
        if (min >= max) {
            throw new IllegalArgumentException("The min value must be less than the max value.");
        }
        Random random = new Random();
        long result;

        do {
            result = min + random.nextLong(max - min);
        } while (result == 0);

        return result;
    }

    public static Date getRandomDate() {
        Date currentDate = new Date();

        long oneYearInMillis = 365L * 24 * 60 * 60 * 1000;
        long startMillis = currentDate.getTime();
        long endMillis = startMillis + oneYearInMillis;
        Random random = new Random();
        long randomMillis = startMillis + (long) (random.nextDouble() * (endMillis - startMillis));
        return new Date(randomMillis);
    }

    @GetMapping
    public void fillDate() {
        for (String company : companies) {
            Company newCompany = new Company();
            newCompany.setName(company);
            companyService.saveCompany(newCompany);

            Long apps = getRandomNumber(5, 15);
            for (int i = 0; i < apps; i++) {
                Application application = new Application();
                application.setCompanyId(newCompany.getId());
                application.setRole(getRandomString(roles));
                application.setDateApplied(getRandomDate());
                application.setVerdict(getRandomString(verdicts));

                applicationService.saveApplication(application);
            }
        }
    }

}
