#!/usr/bin/env bash
# Aegis Overseas - Setup Script
set -e

echo "=== Setting up Aegis Overseas Workspace ==="

echo "1. Installing root dependencies..."
npm install

echo "2. Installing frontend dependencies..."
cd frontend && npm install && cd ..

echo "3. Installing backend dependencies..."
cd backend && npm install && cd ..

echo "4. Installing admin dependencies..."
cd admin && npm install && cd ..

echo "5. Generating Prisma Client..."
cd backend && npx prisma generate && cd ..

echo "=== Aegis Overseas Setup Complete! ==="
