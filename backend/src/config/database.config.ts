export const databaseConfig = () => ({
  database: {
    url: process.env.DATABASE_URL || 'postgresql://aegis_user:aegis_secret@localhost:5432/aegis_overseas?schema=public',
    logging: process.env.NODE_ENV !== 'production',
  },
});
