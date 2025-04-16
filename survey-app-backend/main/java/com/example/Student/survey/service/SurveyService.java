package com.example.Student.survey.service;

import com.example.Student.survey.entity.Survey;
import com.example.Student.survey.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    public Survey createSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    public Optional<Survey> getSurveyById(Long id) {
        return surveyRepository.findById(id);
    }

    public Survey updateSurvey(Long id, Survey surveyDetails) {
        Survey survey = surveyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Survey not found"));
        survey.setFirstName(surveyDetails.getFirstName());
        survey.setLastName(surveyDetails.getLastName());
        survey.setStreetAddress(surveyDetails.getStreetAddress());
        survey.setCity(surveyDetails.getCity());
        survey.setState(surveyDetails.getState());
        survey.setZipCode(surveyDetails.getZipCode());
        survey.setTelephoneNumber(surveyDetails.getTelephoneNumber());
        survey.setEmail(surveyDetails.getEmail());
        survey.setSurveyDate(surveyDetails.getSurveyDate());
        survey.setLikedMost(surveyDetails.getLikedMost());
        survey.setInterestSource(surveyDetails.getInterestSource());
        survey.setRecommendation(surveyDetails.getRecommendation());
        survey.setRaffleNumbers(surveyDetails.getRaffleNumbers());
        survey.setComments(surveyDetails.getComments());
        return surveyRepository.save(survey);
    }

    public void deleteSurvey(Long id) {
        Survey survey = surveyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Survey not found"));
        surveyRepository.delete(survey);
    }
}