
# 🎓 Unisurvey

Unisurvey is a full-stack web application that allows prospective students to provide feedback about their campus visit through an interactive and intelligent survey form. The application also includes an admin view to manage all survey responses with full CRUD capabilities.

## 🌐 Features

### 💬 Personalized Greetings Using Cookies
- Implements time-based personalized greetings like:  
  _"Good Afternoon Jack, welcome to the Survey"_
- Uses cookies to remember user names and greet them accordingly.
- Includes functionality to change the user's name and reset the cookie.
- Cookie expiration is set and handled properly.

### 📝 Smart Form Validation
- Validates the following using JavaScript:
  - Name: Alphabets only
  - Address fields: Appropriate alphanumeric characters
  - At least two checkboxes selected
  - One radio button selected
  - Proper email format
- Uses a single consolidated alert message to display all validation issues.
- Only invalid fields are cleared after validation fails.
- Includes a "Reset" button to clear the form completely.

### 📡 Zipcode Autofill (AJAX + JSON)
- Autofills city and state when a valid ZIP code is entered.
- Uses AJAX to fetch a JSON list of ZIP codes, cities, and states from the backend.
- JSON format:  
  ```json
  { "zip": "20148", "city": "Ashburn", "state": "VA" }
  ```
- Provides inline error messaging for invalid ZIP codes.

### 🌍 Full-Stack Application (Angular + Spring Boot)
- **Frontend**: Angular 2+  
  - Routes for Student Survey and List All Surveys
  - Acknowledgment page after form submission
  - Update/Delete links for each survey in the list
- **Backend**: Spring Boot (RESTful APIs) + JPA/Hibernate
  - CRUD operations for survey data
  - Connected to **Amazon RDS MySQL** database

### 🐳 Docker & Kubernetes Deployment
- Dockerized the application for scalable deployment
- Deployed using **Kubernetes** with **Rancher**
- Supports a minimum of 3 running pods for high availability

### 🔁 CI/CD Pipeline
- GitHub as the source code repository
- Jenkins used for:
  - Automated build and test
  - Docker image creation
  - Deployment on Kubernetes via Rancher

---

## 🚀 Getting Started


### 📥 Clone the Repository

```bash
git clone https://github.com/Chaitanya980/unisurvey.git
cd unisurvey
```

### Backend (Spring Boot)

1. Generate a Spring Boot app from [https://start.spring.io/](https://start.spring.io/)
2. Import into IntelliJ or Eclipse
3. Configure application.properties for Amazon RDS MySQL
4. Run using:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend (Angular)

1. Navigate to Angular folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Angular app:
   ```bash
   ng serve
   ```

### Docker

1. Build Docker image:
   ```bash
   docker build -t unisurvey-app .
   ```
2. Run Docker container:
   ```bash
   docker run -p 8080:8080 unisurvey-app
   ```

### Kubernetes (via Rancher)

1. Set up Rancher Kubernetes cluster with 3 pods
2. Deploy app using Kubernetes manifests:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

### CI/CD with Jenkins

1. Configure GitHub repo and webhook
2. Create Jenkins pipeline for:
   - Code pull
   - Build and test
   - Dockerize and push to container registry
   - Deploy to Kubernetes via Rancher CLI or kubectl

---

## 🛠️ Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Frontend    | Angular 2+          |
| Backend     | Spring Boot + JPA   |
| Database    | MySQL on Amazon RDS |
| Build Tool  | Maven               |
| Container   | Docker              |
| Orchestration | Kubernetes (Rancher) |
| CI/CD       | GitHub + Jenkins    |

---


## 👥 Contributors

- Chaitanya Chaudhari
- Yash Dayma
- Ankit Raut

---

