import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-form/:id', component: SurveyFormComponent }, // Edit route with ID parameter
  { path: 'survey-list', component: SurveyListComponent }
];