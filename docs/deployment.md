# Aegis Overseas Deployment Guide

## Production Deployment

### Frontend & Admin (Vite SPAs)
- Can be hosted on Vercel, Cloudflare Pages, AWS S3 + CloudFront, or Nginx.
- Build command:
  ```bash
  cd frontend && npm run build
  cd admin && npm run build
  ```
- Output directory: `dist`

### Backend (NestJS)
- Hosted on Docker, AWS ECS, Railway, or VPS with Node.js 18+.
- Build command:
  ```bash
  cd backend && npm run build
  npm run start:prod
  ```

### Database
- Managed PostgreSQL on Supabase, AWS RDS, or DigitalOcean Managed Databases.
