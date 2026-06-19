# 🩸 LifeLink AI

## AI-Powered Blood Donor Network

### Overview

LifeLink AI is a web-based blood donor management platform designed to connect blood donors and recipients efficiently. The system enables donor registration, donor search, blood compatibility guidance, and AI-powered assistance to support blood donation awareness and emergency response.

The project combines modern web technologies with Generative AI to create a scalable and socially impactful healthcare solution.

---

## Problem Statement

During medical emergencies, locating compatible blood donors can be challenging and time-consuming. Delays in identifying available donors may affect patient care and increase the burden on healthcare providers and families.

LifeLink AI addresses this issue by providing a centralized platform that simplifies donor registration, donor discovery, and blood donation guidance.

---

## Objectives

* Develop a centralized blood donor platform.
* Enable quick donor registration and retrieval.
* Provide blood group compatibility information.
* Integrate Artificial Intelligence for user assistance.
* Improve accessibility to blood donation resources.

---

## Key Features

### Donor Registration

* Register blood donors through a simple interface.
* Store donor information for future access.

### Donor Search

* Search donors based on blood groups.
* Retrieve matching donor records instantly.

### Blood Compatibility Checker

* Provide compatibility information between blood groups.
* Educate users regarding blood donation requirements.

### AI Assistant

* Powered by Groq AI.
* Answers blood donation-related queries.
* Provides awareness and informational support.

### Responsive User Interface

* Clean and modern design.
* Accessible across multiple devices.

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* FastAPI

### Artificial Intelligence

* Groq API
* Llama 3.3 70B Versatile Model

### Deployment

* Netlify (Frontend)
* Render (Backend)

### Version Control

* Git
* GitHub

---

## Project Architecture

```text
User
  │
  ▼
Frontend (HTML, CSS, JavaScript)
  │
  ▼
FastAPI Backend
  │
  ▼
Groq AI Service
  │
  ▼
AI Response Generation
```

---

## Project Structure

```text
LifeLink-AI/

├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env

├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js

├── README.md
└── .gitignore
```

---

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/Akshaya-Biju/Lifelink.git
cd Lifelink
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Environment Variables

Create a `.env` file inside the backend directory and add:

```env
GROQ_API_KEY=your_api_key
```

### Run the Application

```bash
uvicorn app:app --reload
```

### Local Access

```text
http://127.0.0.1:8000
```

### API Documentation

```text
http://127.0.0.1:8000/docs
```

---

## Expected Outcomes

* Faster donor identification.
* Improved awareness regarding blood donation.
* Enhanced accessibility to donor information.
* Demonstration of AI integration in healthcare applications.

---

## Future Enhancements

* User Authentication and Authorization
* Emergency Blood Request Module
* Location-Based Donor Matching
* Email and SMS Notifications
* Hospital Integration
* Donation History Tracking
* Analytics Dashboard
* Database Integration using PostgreSQL

---

## Learning Outcomes

This project provided practical experience in:

* REST API Development
* FastAPI Framework
* Generative AI Integration
* Frontend–Backend Communication
* Cloud Deployment
* Git and GitHub Workflow
* Debugging and Problem Solving

---

## Developer

**Akshaya Biju**

Bachelor of Technology (B.Tech) – Computer Science and Engineering

---

## License

This project is developed for educational, research, and social impact purposes.
