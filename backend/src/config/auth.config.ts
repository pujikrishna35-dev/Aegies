export const authConfig = () => ({
  jwtSecret: process.env.JWT_SECRET || 'aegis_overseas_secure_jwt_token_key_2026',
  expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  saltRounds: 10,
});
