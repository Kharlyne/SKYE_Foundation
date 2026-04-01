# Skye Foundation

## Overview

**Skye Foundation** is a full-stack web application designed to promote awareness and inclusion around autism.  
The platform provides informative content, highlights initiatives, and allows users to get in touch through a contact form.

This project demonstrates the development of a modern web application with a clear UI, dynamic navigation, and backend integration.

---

## Key Features

- Responsive and user-friendly interface
- Dynamic routing with React Router
- Articles and content management (static data)
- Contact form with data stored in a PostgreSQL database
- Clean and structured frontend architecture

---

## Tech Stack

- **Frontend:** React (Vite), SCSS  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  

---


## Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd skye-foundation
```

## 2. Start Backend
```bash
cd backend
npm install
npm run dev
```

## 3. Start Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Database Setup
Create a PostgreSQL database
Create the contacts table
Configure environment variables in a .env file

Example:

```bash
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=yourdb
```

---

### What I Learned
- Building a full-stack application from scratch
- Connecting a React frontend to a Node.js backend
- Managing and storing user input in a relational database
- Structuring a scalable and maintainable project

---
  
### Future Improvements
- Admin dashboard to manage articles
- Authentication system
