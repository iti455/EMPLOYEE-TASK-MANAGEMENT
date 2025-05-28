Sure! Here's the updated version without the contact section:

---

# Fullstack Task Manager (MERN)

# Overview

This Cloud-Based Task Manager is a web app I developed using the MERN stack (MongoDB, Express.js, React, Node.js) to help teams manage tasks more efficiently. It offers a clean interface for assigning, tracking, and collaborating on tasks. The platform supports admins and regular users with features designed to improve productivity.

### Why?

In fast-paced work environments, keeping track of tasks using spreadsheets or manual methods is inefficient and prone to mistakes. This app solves those problems by providing a centralized system for team task management, enabling smooth collaboration and better workflow.

### Background

With remote work becoming more common, teams need tools that help with communication and task coordination. This app leverages modern web technologies to build a scalable, intuitive task manager. Technologies like Redux Toolkit, Headless UI, and Tailwind CSS enhance the user experience.

## Admin Features

* Manage users: create admin accounts, add team members
* Assign tasks to one or more users and update task details/status
* Mark tasks as todo, in progress, or completed with priority labels
* Manage sub-tasks and upload task-related assets (e.g., images)
* Activate, deactivate user accounts and delete tasks permanently

## User Features

* Update task status (in progress/completed)
* View task details and add comments for communication

## General Features

* Secure login with role-based access control
* Update profile and change password functionality
* Dashboard summarizing activities and filtering tasks by status

## Technologies Used

**Frontend:**

* React (Vite)
* Redux Toolkit
* Headless UI
* Tailwind CSS

**Backend:**

* Node.js with Express.js

**Database:**

* MongoDB

This project combines these technologies to create a practical, efficient task management tool that supports teamwork and productivity.

---

# Setup Instructions

## Server Setup

### Environment variables

Create a `.env` file in the server folder containing:

* `MONGODB_URI` = your MongoDB connection string
* `JWT_SECRET` = a secure secret key
* `PORT` = 8800 (or your preferred port)
* `NODE_ENV` = development

### MongoDB Setup

* Create a MongoDB Atlas account and cluster
* Add database user and IP whitelist
* Connect your app to the cluster with the connection string in `.env`

### Running the Server

1. Open the server folder in your code editor
2. Run `npm install` to install dependencies
3. Run `npm start` to launch the server
4. Check for the “Database Connected” and “Server running” messages

---

## Client Setup

### Environment variables

Create a `.env` file in the client folder containing:

* `VITE_APP_BASE_URL` = `http://localhost:8800` (adjust port if needed)
* `VITE_APP_FIREBASE_API_KEY` = your Firebase API key (if used)

### Running the Client

1. Open the client folder
2. Run `npm install`
3. Run `npm start` to start the React app
4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

