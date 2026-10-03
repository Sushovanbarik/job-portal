# 💼 Job Portal

A full-stack **Job Portal Web Application** built using the MERN stack. The platform connects job seekers with recruiters and provides features for job searching, job applications, company management, and recruitment management.

## 🚀 Features

### 👨‍💻 Job Seeker

- User registration and login
- Secure authentication
- Browse available jobs
- Search and filter jobs
- View detailed job information
- Apply for jobs
- View applied jobs
- Manage user profile
- View company information

### 🏢 Recruiter / Admin

- Recruiter/Admin authentication
- Create and manage companies
- Set up company information
- Post new jobs
- Update and manage jobs
- View posted jobs
- View applicants
- Manage job applications

### 🔐 Authentication & Security

- JWT-based authentication
- Cookie-based authentication
- Protected routes
- Authentication middleware
- Role-based access control
- Secure API endpoints

### 📁 File Upload

- Multer for handling file uploads
- Cloudinary for cloud-based image/file storage

### 🔔 User Experience

- Responsive user interface
- Reusable React components
- Toast notifications using Sonner
- Animated UI using Framer Motion
- Modern UI using Tailwind CSS and shadcn/ui

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Sonner

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer
- Cloudinary
- CORS

### Tools

- Git
- GitHub
- VS Code
- npm

---

## 📂 Project Structure

```text
Job-Portal/
│
├── backend/
│   ├── controllers/
│   │   ├── application.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   ├── isAuthenticated.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── application.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── application.route.js
│   │   ├── company.route.js
│   │   ├── job.route.js
│   │   └── user.route.js
│   │
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── datauri.js
│   │   └── db.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── auth/
│   │   │   ├── shared/
│   │   │   └── ui/
│   │   │
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/Sushovanbarik/job-portal.git

2. Navigate to the Project
cd job-portal

🔧 Backend Setup
Navigate to the backend:
cd backend

Install dependencies:
npm install

Create a .env file inside the backend folder:
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

Start the backend:
npm run dev

Backend will run on:
http://localhost:8000

🎨 Frontend Setup
Open another terminal and navigate to the frontend:
cd frontend

Install dependencies:
npm install

Start the frontend:
npm run dev

Frontend will normally run on:
http://localhost:5173

🗄️ Database
This project uses MongoDB as the database.
The database stores:
- Users
- Companies
- Jobs
- Applications
MongoDB Atlas can be used for cloud-based database hosting.
☁️ Cloudinary
Cloudinary is used for storing uploaded images/files.
Cloudinary credentials should be stored securely in the .env file and should never be committed to GitHub.
🔄 Application Workflow
                    JOB PORTAL
                        │
            ┌───────────┴───────────┐
            │                       │
       JOB SEEKER                RECRUITER
            │                       │
      Search Jobs              Create Company
            │                       │
    View Job Details             Post Jobs
            │                       │
      Apply for Job            Manage Jobs
            │                       │
     Track Applications        View Applicants
            │                       │
            └───────────┬───────────┘
                        │
                        ▼
                   BACKEND API
                        │
                        ▼
                    EXPRESS.JS
                        │
                        ▼
                     MONGODB

🔐 Authentication Flow
User
 │
 ▼
Register / Login
 │
 ▼
Backend API
 │
 ▼
Validate Credentials
 │
 ▼
Generate JWT
 │
 ▼
Authentication Cookie
 │
 ▼
Protected Routes

📌 Main Modules
User Module
- User registration
- Login
- Logout
- Profile management
- Authentication
Job Module
- Create jobs
- View jobs
- Search jobs
- Update jobs
- Manage jobs
Company Module
- Create companies
- Update company information
- View companies
- Manage company details
Application Module
- Apply for jobs
- View applications
- Manage applications
- Track applied jobs
🧩 Frontend
The frontend contains reusable components for:
- Authentication
- Navigation
- Job browsing
- Job details
- Company information
- Application management
- Admin dashboard
- Forms
- Tables
- UI components
Custom React hooks are used for fetching jobs, companies, applications, and admin data.
🗃️ Redux State Management
Redux Toolkit is used for managing application state.
Main Redux slices:
applicationSlice.js
authSlice.js
companySlice.js
jobSlice.js
store.js

🔒 Environment Variables
Sensitive information should be stored in environment variables.
Examples:
- MongoDB connection string
- JWT secret
- Cloudinary credentials
- API keys
Never upload your .env file to GitHub.

🚀 Future Improvements
- AI-based job recommendations
- Resume parsing
- Advanced job search
- Real-time notifications
- Interview scheduling
- Recruiter analytics dashboard
- Email notifications
- Application status notifications
- Cloud deployment
- Improved mobile responsiveness
👨‍💻 Author
Sushovan Barik
GitHub:
https://github.com/Sushovanbarik
⭐ Support
If you find this project useful, consider giving the repository a ⭐ on GitHub.
Thank you for checking out the Job Portal project! 🚀


