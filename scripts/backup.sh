#!/usr/bin/env bash
# Aegis Overseas - Database Backup Script
set -e

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="../database/backups"
BACKUP_FILE="${BACKUP_DIR}/backup_${TIMESTAMP}.sql"

mkdir -p "${BACKUP_DIR}"

echo "=== Backing up Aegis Overseas Database to ${BACKUP_FILE} ==="
if [ -n "$DATABASE_URL" ]; then
  pg_dump "$DATABASE_URL" > "${BACKUP_FILE}"
  echo "Backup successfully saved to ${BACKUP_FILE}"
else
  echo "Warning: DATABASE_URL not set in environment."
fi
