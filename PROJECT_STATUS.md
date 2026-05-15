# LoMo Project Analysis Report

This report provides a comprehensive overview of the current state of the LoMo project, a calm, consent-based community help platform.

---

## 1. Project Structure

The project is moving from a traditional Django/Postgres backend to a **Convex** serverless backend to simplify development and provide real-time updates.

- **`apps/webapp`**: The frontend application built with **React 19**, **TypeScript**, and **Vite**. It uses **TanStack Router** for file-based routing.
- **`convex/` (Planned)**: Will host the backend logic, database schema, and server-side functions using TypeScript. This replaces the existing `apps/backend` (Django).
- **`packages/eslint-config`**: Shared ESLint configuration based on the `antfu` preset.
- **Infrastructure**: Transitioning to a serverless model with Convex to minimize DevOps overhead.

---

## 2. Feature Status & Pivot

The project is currently **pivoting** its backend architecture and refining the UX for better accessibility.

### **Finished / Functional Prototypes**
*   **Frontend Routing**: Fully implemented with TanStack Router.
*   **Request Flow Prototype**: Multi-step form for creating help requests (logic is ready to be connected to Convex).
*   **UI Shell**: Basic mobile-first layout components.

### **In Progress / Planned (The Pivot)**
*   **Convex Migration**: Replacing the Django backend with Convex for simpler data syncing and real-time community updates.
*   **Non-Tech Usability**: Redesigning forms with simpler language, larger touch targets, and clearer progress indicators.
*   **Admin Dashboard**: Creating a dedicated interface for community organizers to triage and assign requests.
*   **Authentication**: Implementing Clerk or Auth0 integration with Convex.

---

## 3. Potential Improvements & Roadmap

### **Usability for Non-Tech Users**
- **Simplified Language**: Move away from technical jargon. Replace "Submit Request" with "Send my request" or "I'm finished."
- **Progress Clarity**: Add visual indicators for multi-step forms so users know how much is left.
- **Accessibility (A11y)**: Ensure high contrast, screen reader compatibility, and font scaling.

### **Admin & Maintenance**
- **Admin Dashboard**: A centralized view for admins to see all active requests, their status, and who is helping.
- **Convex Dev Experience**: Transitioning to TypeScript-only backend will make it easier for frontend developers to contribute to the backend.
- **Automated Testing**: Implement Playwright for end-to-end testing of the "Request -> Help" flow.

---

## 4. Onboarding Process for Newcomers

### **Step 1: Prerequisites**
*   **Bun** (1.0+)
*   **Git**
*   *(Note: Docker is no longer required for the new Convex-based flow)*

### **Step 2: Environment Setup**
```bash
git clone https://github.com/CivicTechWR/project-lomo.git
cd project-lomo
bun install
```

### **Step 3: Development**
```bash
# Start the webapp and Convex dev server
bun run dev
```

### **Step 4: Maintenance**
*   **Linting**: Run `bun run lint:fix` frequently.
*   **Backend Changes**: New backend logic goes in the `convex/` directory using TypeScript.
