package com.codewithuv.exterview.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithuv.exterview.models.Application;

public interface ApplicationRepo extends JpaRepository<Application, Long> {

}
