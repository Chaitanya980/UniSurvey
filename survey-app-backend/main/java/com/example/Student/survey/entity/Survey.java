package com.example.Student.survey.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "surveys")
@Data
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "street_address", nullable = false)
    private String streetAddress;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "zip_code", nullable = false, length = 5)
    private String zipCode;

    @Column(name = "telephone_number", nullable = false, length = 12)
    private String telephoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "survey_date", nullable = false)
    private java.sql.Date surveyDate;

    @Column(name = "liked_most")
    private String likedMost; // Comma-separated values

    @Column(name = "interest_source", nullable = false)
    private String interestSource;

    @Column(name = "recommendation", nullable = false)
    private String recommendation;

    @Column(name = "raffle_numbers", nullable = false)
    private String raffleNumbers;

    @Column(name = "comments")
    private String comments;
}