package com.example.Student.survey.controller;

import com.example.Student.survey.entity.Survey;
import com.example.Student.survey.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @PostMapping
    public Survey createSurvey(@RequestBody Survey survey) {
        return surveyService.createSurvey(survey);
    }

    @GetMapping
    public List<Survey> getAllSurveys() {
        return surveyService.getAllSurveys();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable Long id) {
        return surveyService.getSurveyById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @RequestBody Survey surveyDetails) {
        try {
            Survey updatedSurvey = surveyService.updateSurvey(id, surveyDetails);
            return ResponseEntity.ok(updatedSurvey);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable Long id) {
        try {
            surveyService.deleteSurvey(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}