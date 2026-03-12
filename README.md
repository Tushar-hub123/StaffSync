# StaffSync 🚀  
**Employee Task & Workflow Management System**

Frontend (Vercel)  
https://staffsync-frontend-u51l.vercel.app

Backend API (Render)  
https://staffsync-jyvn.onrender.com

StaffSync is a full-stack web application designed to manage employees and their tasks efficiently.  
It allows admins to assign tasks with scheduled dates and deadlines, while employees can track, accept, and complete their tasks through a dedicated dashboard.

---
## 🌐 Live Deployment

Frontend (Vercel)  
https://staffsync-frontend-u51l.vercel.app

Backend API (Render)  
https://staffsync-jyvn.onrender.com

## 🧩 Features

### 👨‍💼 Admin Panel
- Admin authentication (JWT based)
- Add & remove employees
- Assign tasks to employees
- Set **scheduled date** and **deadline** for tasks
- View complete task history
- Track task status (NEW, PENDING, COMPLETED, REJECTED)

### 👨‍🔧 Employee Panel
- Secure employee login
- View assigned tasks
- See task schedule & deadline
- Accept or reject tasks
- Mark tasks as completed
- Real-time task status updates

---

## 🛠 Tech Stack

### Frontend
- React.js
- Inline CSS (custom styling)
- Axios for API communication

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT Authentication

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Tushar-hub123/StaffSync.git
cd StaffSync


2️⃣ Backend Setup

cd backend
npm install


Create .env file inside backend:

PORT= 5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123

Run backend:

npm start

3️⃣ Frontend Setup

cd frontend
npm install
npm start
