# 📝 React + Redux Blog Application

## 📌 Objective

Build a Blog Post Application using **React**, **Redux Toolkit**, and **Context API** for state management.  
The app supports full CRUD operations on blog posts, includes dark/light mode, and is deployed on a public cloud platform.

---

## 🚀 Features

- Display a list of blog posts
- View detailed information for a single blog post
- Add new blog posts
- Edit existing blog posts
- Delete blog posts
- Like/Unlike blog posts (toggle, no count)
- Dark/Light mode toggle

---

## 🛠️ Tech Stack

- **React** – UI development
- **Redux Toolkit** – Global state management (blog data)
- **Context API** – Cross-cutting concerns (dark/light mode)
- **React Router** – Client-side routing
- **Tailwind CSS** – Styling
- **LocalStorage** – Persistent data storage (no backend)

> **Note:**
>
> - No backend server required
> - No external UI JS plugins used

---

## 🧠 State Management

### Redux (Global State)

- Manages blog data: list, add, edit, delete, like/unlike
- Store structure: `state.blogs.list`
- **Why Redux?**  
  Centralized, predictable, and ideal for structured, frequently-changing data

### Context API (Cross-cutting Concern)

- Manages UI state: dark/light mode
- **Why Context API?**  
  Lightweight, avoids prop drilling, and is ideal for UI state needed across many components

---

## 💾 Data Persistence

- Blog data is stored in **localStorage**
- Redux initializes state from localStorage
- Every add/edit/delete/like action updates localStorage
- Example:  
  `localStorage.setItem("blogs", JSON.stringify(blogs));`
- Data persists after page refreshh

---

## 🖥️ Application Pages

| Route       | Description      |
| ----------- | ---------------- |
| `/`         | Blog List        |
| `/blog/:id` | Blog Detail Page |
| `/new`      | Add Blog         |
| `/edit/:id` | Edit Blog        |

---

## 🎨 UI & Styling

- Styled with **Tailwind CSS**
- Fully responsive layout
- Dark/Light mode toggle in Navbar
- Smooth hover effects and transitions

---

## ⚙️ Local Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project folder
cd react-redux-blog-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at:  
[http://localhost:5173](http://localhost:5173)
