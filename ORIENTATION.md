# Codebase Orientation Guide

Welcome to the LoMo codebase! This guide will help you understand the patterns, tools, and mental models used in this project.

## 🗺️ High-Level Map

We use a **Monorepo** structure managed by **Bun** and **Turborepo**.

- **`/apps/webapp`**: The React 19 frontend.
- **`/convex`**: The backend logic (TypeScript). We use [Convex](https://www.convex.dev/) for real-time data and server functions.
- **`/packages/eslint-config`**: Shared linting rules.

---

## ⚛️ Frontend Architecture (`apps/webapp`)

### 1. File-Based Routing
We use **TanStack Router**. Routes are defined as files in `src/routes/`.
- `index.tsx` → `/`
- `request.tsx` → `/request`

### 2. React 19 & Compiler
We use the **React Compiler**, so `useMemo` and `useCallback` are mostly unnecessary.

---

## ☁️ Backend Architecture (`convex`)

We have moved away from Django to **Convex** to make the app more responsive and easier to maintain.

### 1. TypeScript Everywhere
The backend is written in TypeScript. This means types can be shared between the frontend and backend effortlessly.

### 2. Real-time by Default
Convex queries are reactive. If data changes in the database, the UI updates automatically without needing to refresh or poll.

### 3. Key Concepts
- **`schema.ts`**: Defines the shape of our data.
- **`queries.ts`**: Functions that read data from the database.
- **`mutations.ts`**: Functions that write or update data.

---

## 👥 Designing for Everyone

### 1. Non-Tech Savvy Users
Our target audience isn't always "techies."
- **Avoid Jargon**: Use "Help needed" instead of "Issue ticket."
- **Focus on Flow**: The UI should guide the user step-by-step.
- **Robustness**: Error messages should be helpful and kind, not technical.

### 2. Admin Roles
Community organizers need an "Admin" view to manage requests.
- **Dashboard**: A bird's-eye view of all community activity.
- **Triage**: Tools to quickly change the status of a request or assign a helper.

---

## 🛠️ How to "Get Used To It"

1.  **Read the `AGENTS.md` files**: They contain the "Source of Truth" for coding rules.
2.  **Explore Convex**: Check the `convex/` directory to see how data is structured.
3.  **Run the Lint**: Use `bun run lint:fix` to keep your code compliant with our standards.

## 🆘 Getting Help
- Join the LoMo channel on the CivicTechWR Slack.
