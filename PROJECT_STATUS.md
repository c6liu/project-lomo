# LoMo Project Analysis Report

This report provides a comprehensive overview of the current state of the LoMo project, a calm, consent-based community help platform.

---

## 1. Project Structure

The project is organized as a **Bun-managed monorepo** orchestrated by **Turborepo**, ensuring a unified development experience for both frontend and backend.

- **`apps/webapp`**: The frontend application built with **React 19**, **TypeScript**, and **Vite**. It uses **TanStack Router** for file-based routing and is configured with the React Compiler for optimized performance.
- **`apps/backend`**: The backend service built with **Django 5** and **Django REST Framework (DRF)**. It is fully **Dockerized**, including a **PostgreSQL 17** database.
- **`packages/eslint-config`**: A shared ESLint configuration based on the `antfu` preset, enforcing a consistent code style (tabs, double quotes, semicolons) across the entire repository.
- **Infrastructure**:
  - **Docker**: Used for the backend and database to ensure environment parity.
  - **Turborepo**: Manages task execution (build, lint, dev) across the monorepo.

---

## 2. Feature Status

The project is currently in the **early development/prototyping phase**.

### **Finished / Functional Prototypes**
*   **Frontend Routing**: Fully implemented with TanStack Router, including routes for Home, About, and Request creation.
*   **Request Flow Prototype**: A multi-step form for creating help requests is functional, with data currently persisting in `localStorage`.
*   **UI Shell**: Basic layout components (Header, BottomNav, Card) and a responsive "mobile-first" CSS architecture are in place.
*   **Backend Foundation**: Docker environment is stable, Django is configured, and OAuth2 support is initialized.

### **To Be Developed (Pending)**
*   **Backend Logic**: Business models for `Requests`, `Offers`, and `User Profiles` need to be defined.
*   **API Integration**: The frontend needs to migrate from `localStorage` to real REST API endpoints.
*   **Authentication**: Connecting the frontend to the backend's OAuth2 provider.
*   **Styling System**: Implementation of **Tailwind CSS** (currently listed as "coming soon" in documentation).
*   **State Management**: Integration of **TanStack Query** for robust server-state handling.

---

## 3. Potential Improvements

*   **Move to Tailwind CSS**: Replace the manual `styles.css` with Tailwind CSS v4 to leverage the standardized `data-radius` system and utility-first styling.
*   **API Documentation**: Implement `drf-spectacular` to auto-generate OpenAPI documentation for the backend.
*   **Test Coverage**: Add **Vitest** for frontend unit testing and utilize Django's built-in test framework for the backend.
*   **Python DX**: Adopt **Ruff** as a fast, all-in-one linter and formatter for the Python backend.
*   **Component Library**: Formalize the choice between `shadcn/ui` and `React Aria Components` to build a more robust UI kit.

---

## 4. Onboarding Process for Newcomers

Getting started with LoMo is designed to be seamless thanks to the Bun/Turbo integration.

### **Step 1: Prerequisites**
Ensure you have the following installed:
*   **Bun** (1.0+)
*   **Docker** (for the database and backend)
*   **Git**

### **Step 2: Environment Setup**
```bash
# 1. Clone the repository
git clone https://github.com/CivicTechWR/project-lomo.git
cd project-lomo

# 2. Install dependencies
bun install
```

### **Step 3: Development**
```bash
# Start everything (Postgres, Django, Vite) in a unified terminal UI
bun run dev
```
The webapp will be available at `http://localhost:5173` and the backend at `http://localhost:8000`.

### **Step 4: Maintenance**
*   **Linting**: Always run `bun run lint:fix` before committing to ensure code style compliance (especially tabs vs. spaces).
*   **Database Reset**: If you need to wipe the database and start fresh, use `bun run dev:reset`.
