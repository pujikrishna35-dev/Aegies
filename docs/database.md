# Aegis Overseas Database Documentation

## ORM & Engine
- **Engine**: PostgreSQL 15+
- **ORM**: Prisma Client v5+

## Core Schemas

### `User` & `Lead`
- Stores user credentials, roles (`SUPER_ADMIN`, `COUNSELOR`, `STUDENT`).
- Tracks prospective students captured via landing page forms and university search.

### `StudentProfile` & `Application`
- Educational background, test scores (IELTS, TOEFL, GRE, GMAT), passport details.
- Tracks multi-university application submissions, offer letters, and visa milestones.

### `University` & `Course`
- Global institutions, campus locations, country metadata, acceptance rates.
- Degrees, intake dates, tuition fees, and scholarship eligibility.

## Seeding & Migrations
```bash
# Apply migrations
npx prisma migrate dev

# Seed initial seed records
npm run prisma:seed
```
