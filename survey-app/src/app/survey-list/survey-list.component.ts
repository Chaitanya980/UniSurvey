import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Survey } from '../survey';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit() {
    this.loadSurveys();
  }

  loadSurveys() {
    this.surveyService.getAllSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
      },
      error: (err) => {
        alert("Error loading surveys: " + err.message);
      }
    });
  }

  editSurvey(id: number | undefined) {
    if (id) {
      this.router.navigate(['/survey-form', id]);
    }
  }

  deleteSurvey(id: number | undefined) {
    if (id && confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe({
        next: () => {
          this.loadSurveys(); // Refresh the list after deletion
        },
        error: (err) => {
          alert("Error deleting survey: " + err.message);
        }
      });
    }
  }
}