# CV Application

A dynamic CV generator built with **React**, developed as part of [The Odin Project's](https://www.theodinproject.com/) Full Stack JavaScript curriculum.

## 🔗 Links

- **Live Demo:** [View Project](https://cv-app-jet-gamma.vercel.app/)
- **Challenge Page:** [The Odin Project - CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

## 🚀 Overview

The goal of this project was to build an application that allows users to create a professional CV by filling out various forms. The application manages complex state to ensure that user input is reflected in real-time on the document preview.

### Key Features

* **Real-time Preview:** See your CV take shape as you type.
* **Dynamic Sections:** Add, edit, and remove multiple entries for Educational Experience and Practical Work Experience.
* **State Management:** Utilizes React hooks (`useState`) to handle form data and UI toggles.
* **Responsive Design:** Optimized for different screen sizes.

## 🛠️ Built With

* **React** (Vite)
* **CSS3** (Custom styling and layout)
* **JavaScript** (ES6+)
* **Vercel** (Deployment)

## 📖 What I Learned

This project was a deep dive into the core concepts of React:
- **State & Props:** Understanding how to lift state up and pass data down through components.
- **Form Handling:** Managing controlled components and handling multiple input types.
- **Lists and Keys:** Dynamically rendering components based on arrays of objects.
- **Conditional Rendering:** Switching between edit modes and display modes seamlessly.

## 🔧 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jormaedes/cv-app.git
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd cv-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Launch the development server:**
    ```bash
    npm run dev
    ```

---
Developed by [jormaedes](https://github.com/jormaedes)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
