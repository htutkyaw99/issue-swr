# 🛠️ Issue Tracker

A modern **Issue Tracker** built with **React** and its powerful ecosystem — designed to sharpen my frontend engineering skills while embracing production-ready tooling and patterns.

---

## 🚀 Project Goals

This project is part of my continuous learning journey as a frontend developer. It focuses on:

- Strengthening my expertise with **React**, **TypeScript**, and UI/UX best practices.
- Practicing scalable architecture using tools like **Zustand**, **SWR**, and **React Hook Form**.
- Working with a mock backend (**JSON Server**) and preparing for future integration with **Supabase**.
- Crafting polished, accessible UI with **Radix UI** and **Tailwind CSS**.

---

## ✨ Features

- 🧾 **Issue Listing** – View a list of issues with status, priority, and metadata.
- 🔍 **Issue Details View** – Explore full details of any issue.
- ➕ **Create Task** – Add new issues using a well-validated form.
- 🔎 Filter, Sort, and Search – Easily find and organize issues with dynamic filtering, sorting, and search functionality.
- 🛠 **Edit Task** – Modify existing issues with form validation powered by **Zod**.
- ❌ **Delete Task** – Remove issues with user confirmation and optimistic UI updates.
- 🔄 **Client-Side State** – Managed with **Zustand** for global UI state.
- 🌐 **Server State** – Handled by **SWR** with caching and automatic revalidation.

---

## 🧰 Tech Stack & Why I Chose It

I built this project using **React** with **TypeScript** for a modern, scalable frontend experience and strong type safety. For styling, I combined **Tailwind CSS**’s utility-first approach for rapid, responsive design with **Radix UI** components to ensure accessibility and polished UI elements.

Form management is handled by **React Hook Form** due to its minimal re-renders and excellent developer experience, paired with **Zod** for powerful and declarative schema validation.

To manage client-side state, I chose **Zustand** — it’s a lightweight, flexible store that scales nicely without boilerplate. For fetching and caching remote data, I’m using **SWR** because it’s a simple yet powerful library offering automatic caching, revalidation, and a small bundle size, making it very efficient.

For HTTP requests, **Axios** provides a clean promise-based interface with advanced features like interceptors, which I find useful.

The backend is mocked with **JSON Server** for fast prototyping and testing CRUD operations. In the future, I plan to integrate **Supabase** to add real backend functionality like authentication, database storage, and realtime features.

---

## 🔄 Future Enhancements

- 🔐 Authentication and role-based access control using **Supabase Auth**.
- 🌙 Dark mode support.

---

## 🧑‍💻 Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/htutkyaw99/issue-swr
cd issue-tracker

# Install dependencies
npm install

# Start JSON Server (mock backend)
npx start

# Run the development server
npm run dev

