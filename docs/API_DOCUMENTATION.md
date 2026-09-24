# Aegis Overseas API Reference 🚀

Base URL: `http://localhost:5000/api`

### Endpoints

#### 1. Consultation Booking
- **POST** `/consultations`
  - Body:
    ```json
    {
      "fullName": "Student Name",
      "email": "student@example.com",
      "phone": "+91 9876543210",
      "destination": "uk",
      "studyLevel": "Postgraduate",
      "fieldOfStudy": "Computer Science",
      "preferredOffice": "Nellore",
      "budgetRange": "₹15L - ₹25L",
      "message": "Looking for January intake."
    }
    ```
  - Response: `201 Created` with booking reference ID.

#### 2. University Finder Query
- **POST** `/universities/match`
  - Body:
    ```json
    {
      "studyLevel": "Postgraduate",
      "preferredCountry": "usa",
      "fieldOfStudy": "Computer Science",
      "academicScore": "75%",
      "englishTest": "IELTS",
      "budgetInr": "₹25L - ₹40L"
    }
    ```
  - Response: Array of matched universities with matching score rationale.

#### 3. Lead Capture
- **POST** `/leads`
  - Body: `{ "name": "...", "email": "...", "phone": "...", "service": "Visa Assistance" }`

#### 4. Destinations List
- **GET** `/destinations`
  - Response: Array of all destinations with country metadata.

#### 5. Universities Directory
- **GET** `/universities?country=usa&field=Computer Science`
  - Response: Filtered list of accredited universities.
