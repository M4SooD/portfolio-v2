# Next.js Enterprise Boilerplate 🚀

A scalable, production-ready starter kit designed for high-performance applications, featuring **Next.js 16 (App Router)**, **TypeScript**, and a modular architecture.

## 🏗 Architecture & Design Decisions

This project follows a strict separation of concerns to ensure maintainability and scalability for large teams.

### 📂 Folder Structure

- **`src/app`**: Contains strictly routing logic (`page.tsx`, `layout.tsx`). No complex business logic here.
- **`src/components`**: Organized by Atomic Design principles:
  - `ui/`: Reusable, dumb components (Buttons, Inputs) with zero business logic.
  - `modules/`: Feature-specific components (e.g., `LoginForm`, `DashboardChart`).
  - `layouts/`: Global layout components (Header, Sidebar).
- **`src/services`**: Centralized API calls. Direct API fetching inside components is forbidden to ensure ease of testing.
- **`src/lib`**: Configurations for third-party libraries (e.g., Axios instance with Interceptors).
- **`src/store`**: Global state management configuration.

## ⚡ Performance Optimizations

- **Strict Typing**: No `any` types allowed. All API responses are typed in `src/types`.
- **Axios Interceptors**: Centralized error handling (401/403) and token injection in `src/lib/axios.ts`.
- **Modular Imports**: Code splitting enabled by default via Next.js App Router.

## 🛠 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint + Prettier (Strict config)
- **HTTP Client**: Axios (configured for Enterprise needs)

---

_Architected by [Masood Moosavi]_
