export const appConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiPrefix: 'api',
  corsOrigins: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://aegisoverseas.com'
  ],
});
