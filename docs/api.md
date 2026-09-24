# Aegis Overseas API Reference

## Base URL
- Development: `http://localhost:5000/api`
- Production: `https://api.aegisoverseas.com/api`

## Core Endpoints

### Authentication
- `POST /api/auth/login`: Authenticate staff or student.
- `POST /api/auth/register`: Register new student.
- `GET /api/auth/profile`: Fetch current user profile.

### Leads & Enquiries
- `POST /api/leads`: Submit lead from website hero or contact form.
- `GET /api/leads`: List leads (Admin/Counselor).
- `PATCH /api/leads/:id/status`: Update lead status.

### Universities & Courses
- `GET /api/universities`: Search and filter partner universities.
- `GET /api/universities/:slug`: Get university profile and requirements.
- `GET /api/courses`: Query degrees, disciplines, and entry criteria.

### Applications & Consultations
- `POST /api/consultations/book`: Schedule free 1-on-1 counseling.
- `POST /api/applications`: Submit university application portfolio.
- `GET /api/applications/my`: Student track application statuses.
