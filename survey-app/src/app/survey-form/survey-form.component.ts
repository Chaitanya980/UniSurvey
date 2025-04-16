// This file contains code for Form validation , Setting and getting a Cookie,etc

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent implements OnInit {
  formData = {
    username: '',
    address: '',
    zip: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    url: '',
    surveyDate: '',
    likes: '',
    interest: '',
    otherText: '',
    comments: '',
    recommendation: '',
    gradMonth: '',
    gradYear: '',
    data: '',
    average: '',
    maximum: ''
  };

  dataError: string = '';
  greetingMessage: string = '';
  userName: string = '';
  surveyId: number | null = null; // To store the ID for editing
  isEditMode: boolean = false; // Flag to determine if we're editing

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showGreeting();
    this.checkCookie();

    // Check if we're in edit mode by looking for an ID in the route
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.surveyId = +id; // Convert string to number
        this.isEditMode = true;
        this.loadSurvey(this.surveyId);
      }
    });
  }

  loadSurvey(id: number) {
    this.surveyService.getSurvey(id).subscribe(survey => {
      if (survey) {
        this.formData = { ...survey }; // Pre-fill the form with survey data
      }
    });
  }

  validateForm(event: Event) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll('input[name="likes"]:checked') as NodeListOf<HTMLInputElement>;
    const radioButtons = document.querySelectorAll('input[name="interest"]:checked') as NodeListOf<HTMLInputElement>;

    let errors: string[] = [];

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(this.formData.username)) {
      errors.push("Name should contain only alphabets.");
    }

    const addressRegex = /^[A-Za-z0-9\s,'-]*$/;
    if (!addressRegex.test(this.formData.address)) {
      errors.push("Address should contain only alphanumeric characters, spaces, commas, or hyphens.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      errors.push("Please enter a valid email address.");
    }

    if (checkboxes.length < 2) {
      errors.push("Please select at least two options for 'What did you like most about the campus?'");
    }

    if (radioButtons.length === 0) {
      errors.push("Please select an option for 'How did you become interested in the university?'");
    }

    if (errors.length > 0) {
      alert("Please fix the following errors before submitting:\n\n" + errors.join("\n"));
      if (!nameRegex.test(this.formData.username)) this.formData.username = "";
      if (!addressRegex.test(this.formData.address)) this.formData.address = "";
      if (!emailRegex.test(this.formData.email)) this.formData.email = "";
      if (checkboxes.length < 2) {
        document.querySelectorAll('input[name="likes"]').forEach((checkbox) => (checkbox as HTMLInputElement).checked = false);
        this.formData.likes = '';
      }
      if (radioButtons.length === 0) {
        document.querySelectorAll('input[name="interest"]').forEach((radio) => (radio as HTMLInputElement).checked = false);
        this.formData.interest = '';
      }
    } else {
      if (this.isEditMode && this.surveyId) {
        // Update existing survey
        this.surveyService.updateSurvey(this.surveyId, this.formData).subscribe(() => {
          alert("Survey updated successfully!");
          this.router.navigate(['/survey-list']);
        });
      } else {
        // Create new survey
        this.surveyService.createSurvey(this.formData).subscribe(() => {
          alert("Form submitted successfully!");
          this.router.navigate(['/survey-list']);
        });
      }
    }
  }

  resetForm() {
    if (confirm("Are you sure you want to reset the form?")) {
      this.formData = {
        username: '',
        address: '',
        zip: '',
        city: '',
        state: '',
        phone: '',
        email: '',
        url: '',
        surveyDate: '',
        likes: '',
        interest: '',
        otherText: '',
        comments: '',
        recommendation: '',
        gradMonth: '',
        gradYear: '',
        data: '',
        average: '',
        maximum: ''
      };
      this.dataError = '';
    }
  }

  //Calculate average 
  computeStat() {
    this.dataError = '';
    this.formData.average = '';
    this.formData.maximum = '';

    const dataInput = this.formData.data.trim();
    const numbers = dataInput.split(',').map(num => num.trim());

    if (numbers.length !== 10) {
      this.dataError = 'Please enter exactly 10 numbers separated by commas.';
      return;
    }

    const validNumbers = numbers.map(num => parseInt(num, 10)).filter(num => !isNaN(num) && num >= 1 && num <= 100);

    if (validNumbers.length !== 10) {
      this.dataError = 'All values must be numbers between 1 and 100.';
      return;
    }

    const sum = validNumbers.reduce((acc, num) => acc + num, 0);
    const average = sum / validNumbers.length;
    const max = Math.max(...validNumbers);

    this.formData.average = average.toFixed(2);
    this.formData.maximum = max.toString();
  }

  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  getCookie(name: string): string {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
  }

  promptForName() {
    const userName = prompt("Please enter your name:");
    if (userName) {
      this.setCookie("username", userName, 7);
      this.showGreeting();
    }
  }

  changeUsername() {
    if (confirm("Are you sure you want to change the username?")) {
      this.setCookie("username", "", -1);
      this.promptForName();
    }
  }

  showGreeting() {
    this.userName = this.getCookie("username");
    const greeting = this.getGreeting();
    if (this.userName) {
      this.greetingMessage = `<h3>${greeting} ${this.userName}, Welcome to SWE642 Survey!!!</h3>`;
    } else {
      this.greetingMessage = `<h3>${greeting}, Welcome to SWE642 Survey!!!</h3>`;
      this.promptForName();
    }
  }

  checkCookie() {
    const userName = this.getCookie("username");
    const currentUserName = this.formData.username;
    if (userName && currentUserName && userName !== currentUserName) {
      if (confirm("The name in the cookie is different. Do you want to update it?")) {
        this.setCookie("username", currentUserName, 7);
        this.showGreeting();
      }
    }
  }

  toggleLike(value: string) {
    let likes = this.formData.likes ? this.formData.likes.split(',') : [];
    const index = likes.indexOf(value);
    if (index === -1) {
      likes.push(value);
    } else {
      likes.splice(index, 1);
    }
    this.formData.likes = likes.join(',');
  }

  toggleOtherInput(show: boolean) {
    if (!show) this.formData.otherText = '';
  }
}