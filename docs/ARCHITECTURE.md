# Aegis Overseas Architecture

## System Overview
Aegis Overseas is built as a modular multi-tier enterprise platform for study abroad consulting, university admissions, and student journey management.

### Components
1. **Frontend (`/frontend`)**:
   - Modern Single Page Application built with React 18, Vite, TypeScript, Tailwind CSS, and Lucide Icons.
   - Comprehensive study abroad catalog, destination guides, university search, and dynamic student application forms.
   - Rich interactive hero with live flight path animations, destination carousels, and responsive layouts.

2. **Admin Portal (`/admin`)**:
   - High-efficiency back-office dashboard built with React 18, Vite, and Tailwind CSS.
   - Modules for CRM Leads, Student lifecycle tracking, University and Course management, Visa assistance, and Document pipelines.

3. **Backend API (`/backend`)**:
   - NestJS enterprise framework with TypeScript.
   - Modular architecture separating concerns: Auth, Users, Leads, Students, Universities, Destinations, Applications, Analytics, and Notifications.
   - Prisma ORM interfacing PostgreSQL database with schema migrations and seed scripts.

4. **Database & Storage (`/database`, `/storage`)**:
   - PostgreSQL schema with strict referential integrity.
   - File storage for student transcripts, identity documents, passports, and marketing assets.
