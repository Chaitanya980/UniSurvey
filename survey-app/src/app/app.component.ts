import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Optional, for common directives like *ngIf

@Component({
  selector: 'app-root',
  standalone: true, // Explicitly declare it as standalone
  imports: [RouterOutlet, CommonModule], // Include necessary imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'survey-app';
}