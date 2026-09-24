#!/usr/bin/env bash
# Aegis Overseas - Seed Database Script
set -e

echo "=== Seeding Aegis Overseas Database ==="
cd backend
npx ts-node prisma/seed.ts
echo "=== Database Seeding Complete! ==="
