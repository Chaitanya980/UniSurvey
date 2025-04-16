package com.example.Student.survey.repository;

import com.example.Student.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
}