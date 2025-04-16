Below are Steps for setting up  the frontend for the project :

1. Install angular CLI using command : npm install -g @angular/cli 
2. Create our Angular project using command ng new survey-app
3. As we have used Bootstrap in our project, we install Bootstrap and add the link to package.json 
4. Now, lets create components for our welcome page, survey form and survey list .
ng generate component welcome
ng generate component survey-form
ng generate component survey-list
5. Create a service using command : ng generate service survey
6. In survey.service.ts , when haev a api Url . This file define angular Service 
that interacts with backend RESTful Api for managing surveys.
This survey use HTTP client to perform CRUD operations on survey Data.
7. In welcome component, we have 3 files, named : welcome.component.css, welcome.component.html,welcome.component.ts.
The html file consists of the welcome page code which consists of button for Create a new Survey 
and a button to list all Surveys .
The TS File consists of TypeScript code .This code  generally  has the functions similar to Javascript. 
CSS file has stlying for the Welcome home page.
8. In survey-form  component, we have 3 files, named : survey-form.component.css, survey-form.component.html,survey-form.component.ts.
The html file consists of the survey page code. All the input fields such as Username, Date of Survey, email , etc code should be written here.
The html file consists of entire html code except the <html> <head> <body> tags .
CSS file has stlying for the survey form page.
The TS File consists of TypeScript code .This code  generally  has the functions similar to Javascript. 
This code is server-side code.
9. In survey-list  component, we have 3 files, named : survey-list.component.css, survey-list.component.html,survey-list.component.ts.
The html file consists of the all surveys  code.All the surveys which are given by the user are shown here. Buttons to edit , delete and home button is provided. 
CSS file has stlying for the survey form page.
The TS File consists of TypeScript code .This code  generally  has the functions similar to Javascript. 
This code is server-side code.
9.Now, we will run the angular app using : ng serve


Below are Steps for setting up  the backend for the project :
****************database setup*********************
prerequisite to run this project are javaJDK-21,MySQL,postman (for testing endpoints)  and IDE-like vscode
1)setup the database and create the table surveys
USE survey_db;

CREATE TABLE surveys (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    url VARCHAR(255),
    survey_date DATE NOT NULL,
    likes TEXT,
    interest VARCHAR(50),
    other_text VARCHAR(255),
    comments TEXT,
    recommendation VARCHAR(20) NOT NULL,
    grad_month VARCHAR(20) NOT NULL,
    grad_year VARCHAR(4) NOT NULL,
    data TEXT NOT NULL,
    average VARCHAR(10),
    maximum VARCHAR(10)
);


2)Go on the spring boot initializer website and download springboot project file.(https://start.spring.io/)

3)makesure this configurations 
 - dependencies spring web,spring data jpa, MySQL driver
 - java version 21
 - packaging JAR
and download 

4) create the application.properties file
spring.datasource.url=jdbc:mysql://localhost:3306/survey_db
spring.datasource.username=survey_user
spring.datasource.password=Jaydayma@55
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
server.port=8080

5)create the Survey.java file after creating a model directory under demo where the major content of this java file will be to to define Survey class which represents the handling database operations using springboot applications like JPA.

6)create the repository folder and create a file SurveyRepository.java where this repository interface will serve as a data access layer for Survey entity by providing all necessary database operations without manual implementation.
 - Here SurveyBackenfApplication.java defines the entry point of our application.

7)Create the Controller folder under demo and create SurveyController.java file in the folder.
 - Here the controller will handle the HTTP request for survey operation by providing CRUD operations functionality for main survey entity.

8)Run the Spring Boot application using this command.command=mvn spring-boot:run
9)Open postman and test this localhost endpoint using POST method as POST http://localhost:8080/api/surveys
10)open the survey form , add a entry ,submit the form , then open MySQL terminal and check for the entry is updated in database or not 
11)Delete the entry from the survey list tab option in the form and again open MySQL and check whether the it is deleted from database table in MySQL terminal.
12) We see that the entry is successfully deleted from the app as well as mysql database
13) Now, lets edit(Update) the form . When we click on Edit option in our "List All surveys" section, we could edit the form contents and save them in our database.
14) We successfully implemented CRUD(Create ,Read, Update, Delete) operations for our Survey . 