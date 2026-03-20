# TrustCars.co.in 🚗

Premium car dealership web application built with modern full-stack technologies.  
**Live Demo:** [trustcars.co.in](https://trustcars.co.in)

## 🔥 Overview

TrustCars is a responsive, dynamic, and premium used car dealership platform. Built as a full-stack TypeScript application, it features a deep royal blue and gold-themed UI showcasing certified pre-owned cars. The application includes a splash screen, comprehensive car listings, individual detail pages, customer testimonials, and a fully integrated enquiry system.

## 🛠 Tech Stack

### Frontend
- **Framework:** React 18, TypeScript, Vite
- **State/Data:** TanStack React Query
- **Styling:** Tailwind CSS, shadcn/ui, Framer Motion
- **Routing:** Wouter

### Backend & Database
- **Runtime:** Node.js with Express
- **Architecture:** RESTful JSON API
- **Database:** PostgreSQL
- **ORM & Validation:** Drizzle ORM, Zod

---

## 🏗 System Architecture

### Frontend Implementation
- **UI/UX:** Utilizes Radix UI primitives via shadcn/ui for accessible, highly customizable components. Animations and page transitions are handled by Framer Motion.
- **Data Fetching:** TanStack React Query manages server state, caching, and synchronization.
- **Form Handling:** `react-hook-form` paired with `@hookform/resolvers` and Zod provides robust, type-safe client-side validation.

### Backend Implementation
- **API Pattern:** Centralized route definitions with Zod schemas ensuring strict input validation and typed API contracts between the client and server.
- **Storage Layer:** Implements an `IStorage` interface with a `DatabaseStorage` implementation, ensuring clean separation of concerns. 
- **Database:** PostgreSQL pool-based connection managed via Drizzle ORM. The schema is shared between the client and server for end-to-end type safety.

### Core API Endpoints
- `GET /api/cars` — Retrieve vehicle inventory
- `GET /api/cars/:id` — Retrieve specific vehicle details
- `POST /api/enquiries` — Submit customer inquiries (Zod validated)
- `GET /api/testimonials` — Retrieve customer reviews

---

## ✨ Features

- **Dynamic Inventory:** Browse premium car listings with advanced search filtering and image navigation.
- **Type-Safe Full Stack:** End-to-end TypeScript implementation sharing schemas between client and server.
- **Premium UI:** Clean, modern design with splash screens and scroll animations.
- **Lead Generation:** Integrated contact and enquiry forms connected directly to the database.

---

## 📂 Project Structure

```text
trustcars.co.in
│
├── client/          # Frontend (React + Vite + Tailwind)
│   └── src/         # UI components, pages, hooks
├── server/          # Backend (Express API + Storage)
│   └── index.ts     # Entry point & Vite middleware integration
├── shared/          # Shared logic (Drizzle schema, Zod validation, Types)
├── migrations/      # Drizzle generated SQL migrations
└── attached_assets/ # Static assets and images

🚀 Local Development
1. Clone the repository
git clone [https://github.com/aakashkandpal/trustcars.co.in.git](https://github.com/aakashkandpal/trustcars.co.in.git)
cd trustcars.co.in

2. Install dependencies
npm install

3. Environment Setup
Create a .env file in the root directory and add your PostgreSQL connection string:
Code snippet
DATABASE_URL=your_postgresql_connection_string

4. Database Setup
npm run db:push
5. Start Development Server
npm run dev

## Render Deployment

This app is ready to run on Render as a Node web service.

Use these settings:

- Build Command: `npm ci && npm run build`
- Start Command: `npm start`
- Health Check Path: `/healthz`

Set these environment variables in Render:

- `DATABASE_URL`: your Render PostgreSQL connection string
- `NODE_ENV=production`

Notes:

- The server already binds to Render's `PORT` automatically in [server/index.ts](/Users/aakashkandpal/Car-Dealership-Site/server/index.ts#L81).
- The repo includes a [render.yaml](/Users/aakashkandpal/Car-Dealership-Site/render.yaml) blueprint if you want Render to read the service config from the repository.
- If you create a Render PostgreSQL instance, prefer the Internal Database URL when your web service and database are both on Render.
